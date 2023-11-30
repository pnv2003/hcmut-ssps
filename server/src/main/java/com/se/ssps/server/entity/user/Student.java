package com.se.ssps.server.entity.user;

import java.util.List;

import com.se.ssps.server.entity.File;
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
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private User user;

    @Column(name = "mssv", nullable = false, unique = true)
    private Long mssv;

    @Column
    private Long balance;

    public Student(Long mSSV, Long balance) {
        this.mssv = mSSV;
        this.balance = balance;
    }

    @OneToMany(mappedBy = "student")
    private List<PrintingLog> printingLogs;

    @OneToMany(mappedBy = "student")
    private List<File> files;

    @OneToMany(mappedBy = "student")
    private List<PaymentLog> paymentLogs;
    
}
