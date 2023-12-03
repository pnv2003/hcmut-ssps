package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.Campus;

@Repository
public interface CampusRepository extends JpaRepository<Campus, Integer> {

    @Query("SELECT c FROM Campus c WHERE c.id = ?1")
    public Campus findCampusById(Integer id);
    
}
