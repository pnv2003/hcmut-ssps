package com.se.ssps.server.entity;

import java.time.LocalDateTime;

import com.se.ssps.server.entity.user.Student;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrintingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String fileName;

    private double size;

    private Integer numOfPages;

    private int numOfCopies;

    private boolean isHori;

    private boolean isDoubleSided;

    @Enumerated(EnumType.STRING)
    private PageSize pageSize;

    // @Column(columnDefinition = "TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime startDate;

    // @Column(columnDefinition = "TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime endDate;

    private Double squarePrinting;
    // @OneToOne
    // @JoinColumn(name = "file_iD",referencedColumnName = "id")
    // private File file;

    @ManyToOne
    @JoinColumn(name = "printer_id",referencedColumnName = "id")
    private Printer printer;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;

    public void calculateSquare(){
        final double a4Square = 0.06237;
        if (this.pageSize == PageSize.A4) this.squarePrinting = a4Square*this.numOfPages;
        if (this.pageSize == PageSize.A3) this.squarePrinting = a4Square*2*this.numOfPages;
        if (this.pageSize == PageSize.A2) this.squarePrinting = a4Square*4*this.numOfPages;
        if (this.pageSize == PageSize.A1) this.squarePrinting = a4Square*8*this.numOfPages;
        if (this.pageSize == PageSize.A5) this.squarePrinting = a4Square/2*this.numOfPages;
    }
}
