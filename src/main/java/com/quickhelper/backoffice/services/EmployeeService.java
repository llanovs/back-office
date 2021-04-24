package com.quickhelper.backoffice.services;

import com.quickhelper.backoffice.repositories.EmployeeRepository;
import com.quickhelper.backoffice.users.Employee;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

     public List<Employee> getAllEmployees(){
         return employeeRepository.findAll();
     }

    public Optional<Employee> getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId);
    }

    public Optional<Employee> getEmployeeByEmail(String email) {
         return employeeRepository.findByEmail(email);
    }

    public void addEmployee(Employee employee){
         employeeRepository.save(employee);
    }


    public void updateEmployee(Employee employee){
         if(employeeRepository.findById(employee.getId()).isPresent()) {
             employeeRepository.save(employee);
         }
    }

    public void deleteEmployeeById(Long employeeId){
        if(employeeRepository.findById(employeeId).isPresent()) {
            employeeRepository.deleteById(employeeId);
        }
    }
}
