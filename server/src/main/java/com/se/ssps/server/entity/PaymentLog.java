package com.se.ssps.server.entity;


import java.time.LocalDateTime;

import com.se.ssps.server.entity.user.Student;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Setter
@Getter
public class PaymentLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;
    
    private int numOfPages;

    // @Column(columnDefinition = "TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime payDate;

    private String paymentMethod;

    private Integer unitPrice;
}
