package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.PageUnitPrice;

import jakarta.transaction.Transactional;

@Repository
public interface PageUnitRepo extends JpaRepository<PageUnitPrice, Integer> {
    @Modifying
    @Transactional
    @Query("update PageUnitPrice p set p.price = ?1 where p.id = 1")
    public void setPrice (Integer price);

    @Query ("select p.price from PageUnitPrice p where p.id = 1")
    public Integer getValue();
}
