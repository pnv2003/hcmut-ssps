package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.configuration.Room;

import jakarta.transaction.Transactional;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Modifying
    @Transactional
    @Query("update Room r set r.printer = ?1, r.havePrinter = true where r.id = ?2")
    public void savePrinter(Printer newPrinter, Integer id);


    @Query("SELECT r FROM Room r where r.id = ?1")
    public Room findRoomById(Integer id);

    @Modifying
    @Transactional
    @Query("update Room r set r.havePrinter = true where r.id = ?1")
    public void roomHavePrinter(Integer roomId);
}
