package com.se.ssps.server.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.PaymentLog;
@Repository
public interface PaymentLogRepository extends JpaRepository<PaymentLog,Integer> {
    @Query("select sum(p.numOfPages) from PaymentLog p where p.payDate >= ?1 and p.payDate <= ?2")
    public Integer countPageNums(LocalDateTime from, LocalDateTime to);
}
