package com.quickhelper.backoffice.repositories;

import com.quickhelper.backoffice.users.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findById(Long employeeId);

    Optional<Employee> findByEmail(String email);

}
