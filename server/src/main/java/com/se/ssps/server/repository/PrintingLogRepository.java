package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PrintingLog;

import jakarta.transaction.Transactional;

@Repository
public interface PrintingLogRepository extends JpaRepository<PrintingLog,Integer> {
    @Transactional
    @Modifying
    @Query("UPDATE PrintingLog p set p.squarePrinting = ?1 where p.id = ?2")
    public void updateSquarePrinting(double newSquarePrinting, Integer id);
}
