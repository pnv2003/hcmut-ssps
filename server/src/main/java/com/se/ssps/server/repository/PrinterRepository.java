package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.configuration.Room;

import jakarta.transaction.Transactional;

@Repository
public interface PrinterRepository extends JpaRepository<Printer,Integer>{
    @Query("SELECT p FROM Printer p where p.id = ?1")
    public Printer findPrinterById(Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.printerName = ?1 where p.id = ?2")
    public void updateName(String newName, Integer id);  

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.inkAmount = ?1 where p.id = ?2")
    public void updateInkAmount(Integer newInkAmount, Integer id);  

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.pageAmount = ?1 where p.id = ?2")
    public void updatePageAmount(Integer newPageAmount, Integer id);  

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.firm = ?1 where p.id = ?2")
    public void updateFirm(String newFirm, Integer id);
    
    

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.description = ?1 where p.id = ?2")
    public void updateDescription(String newDescription, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.efficiency = ?1 where p.id = ?2")
    public void updateEfficiency(Integer newEfficiency, Integer id);

    
    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.room = ?1 where p.id = ?2")
    public void updateRoom(Room newRoom, Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Printer p set p.isDel = true where p.id = ?1")
    public void deletePrinter(Integer id);

}
