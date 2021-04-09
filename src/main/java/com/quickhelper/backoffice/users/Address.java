package com.quickhelper.backoffice.users;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Address implements Serializable {

    private static final long serialVersionUID = 1L;

    private String country;
    private String city;
    private String street;
    private String building;
    private String apartment;
}
