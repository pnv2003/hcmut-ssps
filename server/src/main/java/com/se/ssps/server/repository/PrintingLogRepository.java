package com.se.ssps.server.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @Query("select SUM(p.squarePrinting) from PrintingLog p where p.printer.id =?1 and p.startDate >= ?2 and p.endDate <= ?3 ")
    public Double sumPageNum (Integer printerId, LocalDateTime from, LocalDateTime to);

    @Query("select count(p.id) from PrintingLog p where p.startDate >= ?1 and p.endDate <= ?2")
    public Integer sumOfRequest(LocalDateTime from, LocalDateTime to);

    @Query("select count(p.id) from PrintingLog p where p.printer.id = ?1 and p.startDate >= ?2 and p.endDate <= ?3 ")
    public Integer countRequestById(Integer printerId, LocalDateTime from, LocalDateTime to);

    @Query("select count(p.id) from PrintingLog p where p.pageSize = ?1 and p.startDate >= ?2 and p.endDate <= ?3")
    public Integer countPageSize(PageSize pagesize, LocalDateTime from, LocalDateTime to);
}
