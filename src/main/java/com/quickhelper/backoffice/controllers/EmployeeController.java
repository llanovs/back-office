package com.quickhelper.backoffice.controllers;

import com.quickhelper.backoffice.services.EmployeeService;
import com.quickhelper.backoffice.users.Employee;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/v1/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public void addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
    }


    @PostMapping(path = "delete")
    public void deleteEmployee(@RequestBody Employee employee){
        employeeService.deleteEmployee(employee);
    }
}
