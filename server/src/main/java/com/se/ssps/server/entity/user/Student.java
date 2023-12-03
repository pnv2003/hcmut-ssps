package com.se.ssps.server.entity.user;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.se.ssps.server.entity.File;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.PrintingLog;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "mssv", nullable = false, unique = true)
    private Long mssv;

    @Column
    private Integer balance;

    public Student(Long mSSV, Integer balance) {
        this.mssv = mSSV;
        this.balance = balance;
    }

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<PrintingLog> printingLogs;

    // @OneToMany(mappedBy = "student")
    // private List<File> files;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<PaymentLog> paymentLogs;
    
}
