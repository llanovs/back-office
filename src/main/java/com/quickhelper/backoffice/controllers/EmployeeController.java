package com.quickhelper.backoffice.controllers;

import com.quickhelper.backoffice.errorhandling.BadRequestException;
import com.quickhelper.backoffice.errorhandling.EmployeeNotFoundException;
import com.quickhelper.backoffice.services.EmployeeService;
import com.quickhelper.backoffice.users.Employee;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/v1/employees")
public class EmployeeController {

    private static final String MSG_EMPLOYEE_DOES_NOT_EXIST = "Employee doesn't exist";
    private static final String MSG_EMAIL_TAKEN = "Email already taken";

    private final EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{employeeId}")
    public Employee getEmployeeById(@PathVariable Long employeeId) {
        Optional<Employee> employee = employeeService.getEmployeeById(employeeId);
        if (!employee.isPresent()) {
            throw new EmployeeNotFoundException(MSG_EMPLOYEE_DOES_NOT_EXIST);
        }
        return employee.get();
    }

    @PostMapping("/add")
    public void addEmployee(@Valid @RequestBody Employee employee) {
        if (employeeService.getEmployeeByEmail(employee.getEmail()).isPresent()) {
            throw new BadRequestException(MSG_EMAIL_TAKEN);
        }
        employeeService.addEmployee(employee);
    }

    @PostMapping(path = "/update")
    public void updateEmployee(@Valid @RequestBody Employee employee) {
        if (!employeeService.getEmployeeById(employee.getId()).isPresent()) {
            throw new BadRequestException(MSG_EMPLOYEE_DOES_NOT_EXIST);
        }
        employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/delete/{employeeId}")
    public void deleteEmployee(@PathVariable Long employeeId) {
        if (!employeeService.getEmployeeById(employeeId).isPresent()) {
            throw new BadRequestException(MSG_EMPLOYEE_DOES_NOT_EXIST);
        }
        employeeService.deleteEmployeeById(employeeId);
    }
}
