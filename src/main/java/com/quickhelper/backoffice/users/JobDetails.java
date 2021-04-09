package com.quickhelper.backoffice.users;

import com.quickhelper.backoffice.users.enums.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
public class JobDetails implements Serializable {

    private static final long serialVersionUID = 1L;

    private long employeeId;

    private Position position;

    private JobTitle jobTitle;

    private EmployeeType employeeType;

    private TimeType timeType;

    private Location location;

    private Address workAddress;

    private LocalDate hireDate;

    private LocalDate continuousServiceDate;

    public Period timeInPosition(){
       return Period.between(LocalDate.now(), hireDate);
    }

    public Period lengthOfService(){
        return Period.between(LocalDate.now(), continuousServiceDate);
    }
}
