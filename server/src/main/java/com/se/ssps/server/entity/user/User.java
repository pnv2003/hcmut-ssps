package com.se.ssps.server.entity.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 20)
    private String lastName;

    @Column(name = "username", nullable = false, length = 20, unique = true)
    private String username;

    @Column(name = "passw", nullable = false, length = 20)
    private String password;

    @Column(name = "is_admin",nullable = false)
    private Boolean isAdmin;

    @OneToOne(mappedBy = "user")
    private Student student;

    @OneToOne(mappedBy = "user" )
    private Admin admin;
    
    public User(String firstName, String lastName, String username, String password, Boolean isAdmin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    } 

}
