package com.quickhelper.backoffice.controllers;

import com.quickhelper.backoffice.users.Address;
import com.quickhelper.backoffice.users.JobDetails;
import com.quickhelper.backoffice.users.User;
import com.quickhelper.backoffice.users.enums.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers(){
        JobDetails jobDetails = JobDetails.builder()
                .employeeId(1L)
                .employeeType(EmployeeType.REGULAR)
                .location(Location.USA)
                .workAddress(Address.builder()
                        .country("Ukraine")
                        .city("Kyiv")
                        .build())
                .position(Position.ADMIN)
                .jobTitle(JobTitle.EXPERT)
                .timeType(TimeType.FULL_TIME)
                .hireDate(LocalDate.of(2021, 1, 3))
                .continuousServiceDate(LocalDate.of(2021, 1, 3))
                .build();
        User user = User.builder()
                .id(1L)
                .name("Tom")
                .surname("Jones")
                .email("tomJones@gmail.com")
                .jobDetails(jobDetails)
                .gender(Gender.MALE)
                .build();

        return Arrays.asList(user);
    }

}
