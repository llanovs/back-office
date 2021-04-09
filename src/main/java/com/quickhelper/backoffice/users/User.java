package com.quickhelper.backoffice.users;

import com.quickhelper.backoffice.users.enums.Gender;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    private long id;

    private String name;

    private String surname;

    private String email;

    private Gender gender;

    private Address homeAddress;

    private String phone;

    private JobDetails jobDetails;
}
