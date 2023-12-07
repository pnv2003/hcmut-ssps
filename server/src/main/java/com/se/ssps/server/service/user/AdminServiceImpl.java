package com.se.ssps.server.service.user;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.Config;
import com.se.ssps.server.entity.PageSize;
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
import com.se.ssps.server.repository.MaxSizeRepository;
import com.se.ssps.server.repository.PageAllocationRepository;
import com.se.ssps.server.repository.PageUnitRepo;
import com.se.ssps.server.repository.PaymentLogRepository;
import com.se.ssps.server.repository.PrinterRepository;
import com.se.ssps.server.repository.PrintingLogRepository;
import com.se.ssps.server.repository.RoomRepository;

import ch.qos.logback.core.util.FileSize;

@Service
public class AdminServiceImpl implements AdminService{
    //Khai báo các repository
    //@Autowired
    @Autowired
    MaxSizeRepository maxFileSizeRepo ;

    @Autowired
    PageUnitRepo pageUnitPriceRepo;

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
    public Printer addPrinter(Integer room_id, Printer newPrinter) {
        newPrinter.setRoom(roomRepository.findRoomById(room_id));
        // roomRepository.findRoomById(room_id).setPrinter(newPrinter);
        roomRepository.savePrinter(newPrinter,room_id);
        // roomRepository.roomHavePrinter(room_id);
        return printerRepository.save(newPrinter);
    }

    @Override
    public Printer findPrinterById(Integer id) {
       return printerRepository.findPrinterById(id);
    }

    @Override
    public Map<String, Boolean> deletePrinter(Integer id) {
        HashMap<String, Boolean> newMap = new HashMap<>();
        Printer findPrinter = printerRepository.findPrinterById(id);
        printerRepository.delete(findPrinter);
        newMap.put("accepted", true);
        return newMap;

    }

    @Override
    public Map<String, Boolean> updatePrinter(Printer newPrinter, Integer roomId) {
        HashMap<String, Boolean> newMap = new HashMap<>();
        Room findRoom = roomRepository.findRoomById(roomId);
        if (findRoom.getPrinter()!= null) {
            if (findRoom.getPrinter().getId().equals(newPrinter.getId())) {
                newMap.put("accepted", true);
                printerRepository.updateDescription(newPrinter.getDescription(), newPrinter.getId());
                printerRepository.updateEfficiency(newPrinter.getEfficiency(), newPrinter.getId());
                printerRepository.updateFirm(newPrinter.getFirm(),newPrinter.getId());
                printerRepository.updateInkAmount(newPrinter.getInkAmount(), newPrinter.getId());
                printerRepository.updateName(newPrinter.getPrinterName(), newPrinter.getId());
                printerRepository.updatePageAmount(newPrinter.getPageAmount(), newPrinter.getId());
                printerRepository.updateStatus(newPrinter.getStatus(), newPrinter.getId());
                return newMap;
            }
            newMap.put("accepted", false);
            return newMap;
        }
        printerRepository.updateDescription(newPrinter.getDescription(), newPrinter.getId());
        printerRepository.updateEfficiency(newPrinter.getEfficiency(), newPrinter.getId());
        printerRepository.updateFirm(newPrinter.getFirm(),newPrinter.getId());
        printerRepository.updateInkAmount(newPrinter.getInkAmount(), newPrinter.getId());
        printerRepository.updateName(newPrinter.getPrinterName(), newPrinter.getId());
        printerRepository.updatePageAmount(newPrinter.getPageAmount(), newPrinter.getId());
        printerRepository.updateRoom(findRoom, newPrinter.getId());
        printerRepository.updateStatus(newPrinter.getStatus(), newPrinter.getId());
        newMap.put("accepted", true);
        return newMap;

    }
//=====================================================================================
//=====================================================================================
    //Thao tác đối với cấu hình vị trí
    @Override
    public List<Campus> findAllCampus() {
        return campusRepository.findAll();
    }

    @Override
    public Campus addCampus(Campus newCampus) {
        ArrayList<Campus> campusCheckList = new ArrayList<Campus>(campusRepository.findAll());
        for(int i = 0 ; i < campusCheckList.size(); i++){
            if (campusCheckList.get(i).equals(newCampus)) return null;
        }
        return campusRepository.save(newCampus);
    }

    @Override
    public Map<String, Boolean> deleteCampus(Integer id) {
        HashMap<String, Boolean> newMap = new HashMap<>();
        Campus findCampus = campusRepository.findCampusById(id);
        if (findCampus.getBuildings().isEmpty()){
            campusRepository.delete(findCampus);
            newMap.put("accepted", true);
            return newMap;
        }
        // findCampus.setDel(true);
        newMap.put("accepted", false);
            return newMap;
    }
    
    //=====================================================================================
    @Override
    public List<Building> findAllBuilding() {
        return buildingRepository.findAll();
    }

    @Override
    public Building addBuilding(Integer campus_id, Building newBuilding) {
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
                return buildingRepository.save(newBuilding);
            }
        }
        return null;   
    }

     @Override
    public Map<String, Boolean> deleteBuilding(Integer id) {
        HashMap<String, Boolean> newMap = new HashMap<>();
        Building findBuilding = buildingRepository.findBuildingById(id);
        if (findBuilding.getRooms().isEmpty()) {
            buildingRepository.delete(findBuilding);
            newMap.put("accepted", true);
            return newMap;
        }
        newMap.put("accepted", false);
            return newMap;
    }
    //=====================================================================================
    @Override
    public List<Room> findAllRoom() {
        return roomRepository.findAll();
    }
    
    @Override
    public Room addRoom(Integer building_id, Room newRoom) {
        ArrayList<Building> buildingCheckList = new ArrayList<Building>(buildingRepository.findAll());
        for (int i = 0 ; i < buildingCheckList.size(); i ++){
            if (buildingCheckList.get(i).getId().equals(building_id)){
                newRoom.setBuilding(buildingCheckList.get(i));
                newRoom.setHavePrinter(false);
                buildingCheckList.get(i).getRooms().add(newRoom);
                return roomRepository.save(newRoom);
            }
        }
        return null;
    }

	@Override
	public Map<String, Boolean> deleteRoom(Integer id) {
        HashMap<String, Boolean> newMap = new HashMap<>();
        Room findRoom = roomRepository.findRoomById(id);
        if (findRoom.getPrinter() == null){
            roomRepository.delete(findRoom);
            newMap.put("accepted", true);
            return newMap;
        }
        newMap.put("accepted", false);
            return newMap;
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
    public PageAllocation addPageAllocation(PageAllocation newPageAllocation) {
        return pageAllocationRepository.save(newPageAllocation);

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
    public FileType addType(FileType fileType) {
        return fileTypeRepository.save(fileType);
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
        returnConfig.setMaxFileSize(maxFileSizeRepo.getValue());
        returnConfig.setPageUnitPrice(pageUnitPriceRepo.getValue());
        return returnConfig;
    }

	@Override
	public MaxFileSize setMaxFileSize(double maxFileSize) {
        if (pageUnitPriceRepo.findAll().isEmpty()){
            MaxFileSize newPrice = new MaxFileSize(1,maxFileSize);
            return maxFileSizeRepo.save(newPrice);
        }
        else {
            maxFileSizeRepo.setMaxSize(maxFileSize);
        }
        return new MaxFileSize(1,maxFileSize);
 	}

	@Override
	public PageUnitPrice setPagePrice(Integer pagePrice) {  
        if (pageUnitPriceRepo.findAll().isEmpty()){
            PageUnitPrice newPrice = new PageUnitPrice(1,pagePrice);
            return pageUnitPriceRepo.save(newPrice);
        }
        else {
            pageUnitPriceRepo.setPrice(pagePrice);
        }
        return new PageUnitPrice(1,pagePrice);
	}
//=====================================================================================
//=====================================================================================
    private Double pagesNum(Integer printerId, LocalDateTime from, LocalDateTime to){
        return printingLogRepository.sumPageNum(printerId, from, to);
    }

    @Override
    public Map<String, Double> totalSquare(YearMonth from, YearMonth to) {
        LocalDateTime fromDate = from.atDay(1).atStartOfDay();
        LocalDateTime toDate = to.atEndOfMonth().atTime(24, 59,59);
        HashMap<String, Double> newMap = new HashMap<>();
        ArrayList<Printer> printerList = new ArrayList<>(printerRepository.findAll());
        for (int i = 0 ; i < printerList.size() ; i++){
            newMap.put(printerList.get(i).getPrinterName(), pagesNum(printerList.get(i).getId(), fromDate, toDate));
        }
        return newMap;
    }

    @Override
    public Map<String, Double> printingRequest(YearMonth from, YearMonth to) {
        // TODO Auto-generated method stub
        LocalDateTime fromDate = from.atDay(1).atStartOfDay();
        LocalDateTime toDate = to.atEndOfMonth().atTime(24, 59,59);
        HashMap<String, Double> newMap = new HashMap<>();
        ArrayList<Printer> printerList = new ArrayList<>(printerRepository.findAll());
        Double sumOfRequest = (printingLogRepository.sumOfRequest(fromDate, toDate)).doubleValue();
        for (int i = 0 ; i < printerList.size() ; i++){
            Double requestOf = printingLogRepository.countRequestById(printerList.get(i).getId(), fromDate, toDate).doubleValue();
            newMap.put(printerList.get(i).getPrinterName(), requestOf/sumOfRequest*100);
        }
        return newMap;
    }

    //theo tgian
    @Override
    public Map<PageSize, Double> pageSizeByMonth(YearMonth from, YearMonth to) {
        LocalDateTime fromDate = from.atDay(1).atStartOfDay();
        LocalDateTime toDate = to.atEndOfMonth().atTime(24, 59,59);
        HashMap<PageSize, Double> newMap = new HashMap<>();
        Double sumOfPageSize = (printingLogRepository.sumOfRequest(fromDate, toDate)).doubleValue();

        Double pageSizeOfA5 = printingLogRepository.countPageSize(PageSize.A5,fromDate,toDate).doubleValue();
        Double pageSizeOfA4 = printingLogRepository.countPageSize(PageSize.A4,fromDate,toDate).doubleValue();
        Double pageSizeOfA3 = printingLogRepository.countPageSize(PageSize.A3,fromDate,toDate).doubleValue();
        Double pageSizeOfA2 = printingLogRepository.countPageSize(PageSize.A2,fromDate,toDate).doubleValue();
        Double pageSizeOfA1 = printingLogRepository.countPageSize(PageSize.A1,fromDate,toDate).doubleValue();
       
        newMap.put(PageSize.A5, pageSizeOfA5/sumOfPageSize*100);
        newMap.put(PageSize.A4, pageSizeOfA4/sumOfPageSize*100);
        newMap.put(PageSize.A3, pageSizeOfA3/sumOfPageSize*100);
        newMap.put(PageSize.A2, pageSizeOfA2/sumOfPageSize*100);
        newMap.put(PageSize.A1, pageSizeOfA1/sumOfPageSize*100);

        return newMap;

    }

    @Override
    public Map<YearMonth, Integer> profitByMonth(YearMonth from, YearMonth to) {
        HashMap<YearMonth, Integer> newMap = new HashMap<>();
        while (!from.isAfter(to)) {
            LocalDateTime fromDate = from.atDay(1).atStartOfDay();
            LocalDateTime toDate = from.atEndOfMonth().atTime(24, 59, 59, 59);
            Integer profitPerMonth = paymentLogRepository.countPageNums(fromDate, toDate) * pageUnitPriceRepo.getValue();
            newMap.put(from, profitPerMonth);
            from = from.plusMonths(1);
        }
        return newMap;
    }

}
