package com.se.ssps.server.service.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;
import com.se.ssps.server.entity.configuration.Room;
import com.se.ssps.server.repository.BuildingRepository;
import com.se.ssps.server.repository.CampusRepository;
import com.se.ssps.server.repository.PrinterRepository;
import com.se.ssps.server.repository.RoomRepository;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    PrinterRepository printerRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    BuildingRepository buildingRepository;

    @Autowired
    CampusRepository campusRepository;
//=====================================================================================
//Thao tác đối với máy in
    @Override
    public List<Printer> findAllPrinter() {
        return printerRepository.findAll();
    }

    @Override
    public boolean addPrinter(Integer room_id, Printer newPrinter) {
        newPrinter.setRoom(roomRepository.findRoomById(room_id));
        roomRepository.findRoomById(room_id).setPrinter(newPrinter);
        printerRepository.save(newPrinter);
        return true;
    }

    @Override
    public Printer findPrinterById(Integer id) {
       return printerRepository.findPrinterById(id);
    }

    @Override
    public boolean deletePrinter(Integer id) {
        Printer findPrinter = printerRepository.findPrinterById(id);
        if (findPrinter.getPrintingLogs().isEmpty()){
            printerRepository.delete(findPrinter);
            return true;
        }
        return false;
    }

    @Override
    public void updatePrinter(Printer newPrinter, Integer id) {
        printerRepository.updateDescription(newPrinter.getDescription(), id);
        printerRepository.updateEfficiency(newPrinter.getEfficiency(), id);
        printerRepository.updateFirm(newPrinter.getFirm(), id);
        printerRepository.updateInkAmount(newPrinter.getInkAmount(), id);
        printerRepository.updateName(newPrinter.getPrinterName(), id);
        printerRepository.updatePageAmount(newPrinter.getPageAmount(), id);
        printerRepository.updateSquarePrinting(newPrinter.getSquarePrinting(), id);
        printerRepository.updateRoom(newPrinter.getRoom(), id);
    }
//=====================================================================================
    @Override
    public List<Campus> findAllCampus() {
        return campusRepository.findAll();
    }

    @Override
    public boolean addCampus(Campus newCampus) {
        ArrayList<Campus> campusCheckList = new ArrayList<Campus>(campusRepository.findAll());
        for(int i = 0 ; i < campusCheckList.size(); i++){
            if (campusCheckList.get(i).equals(newCampus)) return false;
        }
        campusRepository.save(newCampus);
        return true;
    }

    @Override
    public boolean deleteCampus(Integer id) {
        Campus findCampus = campusRepository.findCampusById(id);
        if (findCampus.getBuildings().isEmpty()){
            campusRepository.delete(findCampus);
            return true;
        }
        // findCampus.setDel(true);
        return false;
    }
    
//=====================================================================================
    @Override
    public List<Building> findAllBuilding() {
        return buildingRepository.findAll();
    }

    @Override
    public boolean addBuilding(Integer campus_id, Building newBuilding) {
        ArrayList<Campus> campusCheckList = new ArrayList<Campus>(campusRepository.findAll());
        for (int i = 0 ; i < campusCheckList.size() ; i ++){
            if (campusCheckList.get(i).getId().equals(campus_id)){
                // buildingRepository.addBuildingIntoCampus(campus, newBuilding.getId());
                // if (campusCheckList.get(i).getBuildings()==null){
                //     List<Building> newList = new ArrayList<Building>();
                //     campusCheckList.get(i).setBuildings(newList);
                // }
                newBuilding.setCampus(campusCheckList.get(i));
                campusCheckList.get(i).getBuildings().add(newBuilding);
                buildingRepository.save(newBuilding);
                return true;
            }
        }
        return false;   
    }

     @Override
    public boolean deleteBuilding(Integer id) {
        Building findBuilding = buildingRepository.findBuildingById(id);
        if (findBuilding.getRooms().isEmpty()) {
            buildingRepository.delete(findBuilding);
            return true;
        }
        return false;
    }
//=====================================================================================
    @Override
    public List<Room> findAllRoom() {
        return roomRepository.findAll();
    }
    
    @Override
    public boolean addRoom(Integer building_id, Room newRoom) {
        ArrayList<Building> buildingCheckList = new ArrayList<Building>(buildingRepository.findAll());
        for (int i = 0 ; i < buildingCheckList.size(); i ++){
            if (buildingCheckList.get(i).getId().equals(building_id)){
                newRoom.setBuilding(buildingCheckList.get(i));
                buildingCheckList.get(i).getRooms().add(newRoom);
                roomRepository.save(newRoom);
                return true;
            }
        }
        return false;
    }

	@Override
	public boolean deleteRoom(Integer id) {
        Room findRoom = roomRepository.findRoomById(id);
        if (findRoom.getPrinter() == null){
            roomRepository.delete(findRoom);
            return true;
        }
        return false;
	}
//=====================================================================================

    

    
    
}
