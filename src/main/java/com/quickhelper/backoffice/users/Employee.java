package com.quickhelper.backoffice.users;

import com.quickhelper.backoffice.users.enums.Gender;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Employee {

    @Id
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "employee_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;

    private String name;

    private String surname;

    @Nullable
    private String email;

    @Nullable
    private String phone;

    @Enumerated(EnumType.STRING)
    private Gender gender;

//    todo: implement this a bit later
//    private Address homeAddress;

//    todo: implement this a bit later
//    private JobDetails jobDetails;


    public Employee(String name,
                    String surname,
                    Gender gender,
                    String email,
                    String phone) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }
}
