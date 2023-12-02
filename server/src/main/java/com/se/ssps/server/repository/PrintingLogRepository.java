package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PrintingLog;

@Repository
public interface PrintingLogRepository extends JpaRepository<PrintingLog,Integer> {
    
}
