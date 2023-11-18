package com.se.ssps.server.entity.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student")
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private User user;

    @Column(name = "mssv", nullable = false, unique = true)
    private Long MSSV;

    @Column
    private Long balance;

    public Student(Long mSSV, Long balance) {
        MSSV = mSSV;
        this.balance = balance;
    }

    
    
}
