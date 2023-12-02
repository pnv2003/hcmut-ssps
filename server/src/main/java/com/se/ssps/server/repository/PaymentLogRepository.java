package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PaymentLog;
@Repository
public interface PaymentLogRepository extends JpaRepository<PaymentLog,Integer> {
    
}
