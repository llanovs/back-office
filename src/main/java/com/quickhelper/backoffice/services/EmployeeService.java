package com.quickhelper.backoffice.services;

import com.quickhelper.backoffice.repositories.EmployeeRepository;
import com.quickhelper.backoffice.users.Employee;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

     public List<Employee> getAllEmployees(){
         return employeeRepository.findAll();
     }
}
