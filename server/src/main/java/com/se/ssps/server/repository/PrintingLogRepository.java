package com.se.ssps.server.repository;

import java.time.LocalDate;

import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PrintingLog;

import jakarta.transaction.Transactional;

@Repository
public interface PrintingLogRepository extends JpaRepository<PrintingLog,Integer> {
    // @Transactional
    // @Modifying
    // @Query("UPDATE PrintingLog p set p.squarePrinting = ?1 where p.id = ?2")
    // public void updateSquarePrinting(double newSquarePrinting, Integer id);

    @Query("select COUNT(p.numOfPages) from PrintingLog p where p.printer.id =?1 and p.startDate >= ?2 and p.endDate <= ?3 ")
    public Integer countPageNum (Integer printerId, LocalDate from, LocalDate to);
}
