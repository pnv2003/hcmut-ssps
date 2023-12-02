package com.se.ssps.server.service.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.Config;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;
import com.se.ssps.server.entity.configuration.FileType;
import com.se.ssps.server.entity.configuration.MaxFileSize;
import com.se.ssps.server.entity.configuration.PageAllocation;
import com.se.ssps.server.entity.configuration.PageUnitPrice;
import com.se.ssps.server.entity.configuration.Room;
import com.se.ssps.server.repository.BuildingRepository;
import com.se.ssps.server.repository.CampusRepository;
import com.se.ssps.server.repository.FileTypeRepository;
import com.se.ssps.server.repository.PageAllocationRepository;
import com.se.ssps.server.repository.PaymentLogRepository;
import com.se.ssps.server.repository.PrinterRepository;
import com.se.ssps.server.repository.PrintingLogRepository;
import com.se.ssps.server.repository.RoomRepository;

@Service
public class AdminServiceImpl implements AdminService{
    //Khai báo các repository
    @Autowired
    MaxFileSize maxFileSize ;

    @Autowired
    PageUnitPrice pageUnitPrice;

    @Autowired
    PrinterRepository printerRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    BuildingRepository buildingRepository;

    @Autowired
    CampusRepository campusRepository;

    @Autowired
    PrintingLogRepository printingLogRepository;

    @Autowired
    PaymentLogRepository paymentLogRepository;

    @Autowired
    PageAllocationRepository pageAllocationRepository;

    @Autowired
    FileTypeRepository fileTypeRepository;
//=====================================================================================    
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
//=====================================================================================
    //Thao tác đối với cấu hình vị trí
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
//=====================================================================================
    // thao tác đối với xem thông tin lịch sử
    @Override
    public List<PrintingLog> findAllPrintingLogs() {
        return printingLogRepository.findAll();
    }

    // @Override
    // public boolean addPrintingLog(PrintingLog newPrintingLog) {
    //     // TODO Auto-generated method stub
        
    //     throw new UnsupportedOperationException("Unimplemented method 'addPrintingLog'");
    // }
//=====================================================================================
    @Override
    public List<PaymentLog> findAllPaymentLog() {
       return paymentLogRepository.findAll();
    }

   

    // @Override
    // public boolean addPaymentLog(PaymentLog paymentLog) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'addPaymentLog'");
    // }
//=====================================================================================
//=====================================================================================
    //Thao tác đối với cấp phát trang
    @Override
    public List<PageAllocation> findAllPageAllocations() {
        pageAllocationRepository.updatePageAllocationStatus();
        return pageAllocationRepository.findAll();
    }

    @Override
    public void addPageAllocation(PageAllocation newPageAllocation) {
        pageAllocationRepository.save(newPageAllocation);

    }

    @Override
    public boolean deletePageAllocation(Integer id) {
        if(pageAllocationRepository.findAllocationById(id).getStatus() == true) return false;
        pageAllocationRepository.delete(pageAllocationRepository.findAllocationById(id));
        return true;
    }
//=====================================================================================
//=====================================================================================

    @Override
    public List<FileType> findAllType() {
        return fileTypeRepository.findAll();
    }

    @Override
    public void addType(FileType fileType) {
        fileTypeRepository.save(fileType);
    }

    @Override
    public void deleteType(Integer fileTypeId) {
        fileTypeRepository.delete(fileTypeRepository.findTypeById(fileTypeId));
    }
//=====================================================================================
//=====================================================================================


    @Override
    public Config getAllConfig() {
        Config returnConfig = new Config();
        returnConfig.setFileTypeList(findAllType());
        returnConfig.setMaxFileSize(maxFileSize);
        returnConfig.setPageUnitPrice(pageUnitPrice);
        return returnConfig;
    }

	@Override
	public void setMaxFileSize(double maxFileSize) {
		this.maxFileSize = new MaxFileSize(maxFileSize);
 	}

	@Override
	public void setPagePrice(Integer pagePrice) {
		this.pageUnitPrice = new PageUnitPrice(pagePrice);
	}



    
    
}
