package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;

import jakarta.transaction.Transactional;

@Repository
public interface BuildingRepository extends JpaRepository<Building,Integer> {
    @Query("SELECT b FROM Building b WHERE b.id = ?1")
    public Building findBuildingById(Integer id);


    // @Transactional
    // @Modifying
    // @Query("UPDATE Building b set b.campus = ?1 where p.id = ?2")
    // public void addBuildingIntoCampus(Campus campus_id, Integer building_id);
}
