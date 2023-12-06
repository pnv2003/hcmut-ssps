package com.se.ssps.server.repository;

import java.time.LocalDate;

import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PageSize;
import com.se.ssps.server.entity.PrintingLog;

import jakarta.transaction.Transactional;

@Repository
public interface PrintingLogRepository extends JpaRepository<PrintingLog,Integer> {
    // @Transactional
    // @Modifying
    // @Query("UPDATE PrintingLog p set p.squarePrinting = ?1 where p.id = ?2")
    // public void updateSquarePrinting(double newSquarePrinting, Integer id);

    @Query("select SUM(p.numOfPages) from PrintingLog p where p.printer.id =?1 and p.startDate >= ?2 and p.endDate <= ?3 ")
    public Integer sumPageNum (Integer printerId, LocalDate from, LocalDate to);

    @Query("select count(p.id) from PrintingLog p where p.starDate >= ?1 and p.endDate <= ?2")
    public Integer sumOfRequest(LocalDate from, LocalDate to);

    @Query("select count(p.id) from PrintingLog p where p.printer.id = ?1 and p.startDate >= ?2 and p.endDate <= ?3 ")
    public Integer countRequestById(Integer printerId, LocalDate from, LocalDate to);

    @Query("select count(p.id) from PrintingLog p where p.pageSize = ?1 and p.startDate >= ?2 and p.endDate <= ?3")
    public Integer countPageSize(PageSize pagesize, LocalDate from, LocalDate to);
}
