package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.PageAllocation;

import jakarta.transaction.Transactional;

@Repository
public interface PageAllocationRepository extends JpaRepository<PageAllocation,Integer>{
    @Modifying
    @Transactional
    @Query("UPDATE PageAllocation p set p.status = true where p.allocatedDate < now()")
    public void updatePageAllocationStatus();
    

    @Query("SELECT pa FROM PageAllocation pa WHERE pa.id = ?1")
    public PageAllocation findAllocationById(Integer id);
}
