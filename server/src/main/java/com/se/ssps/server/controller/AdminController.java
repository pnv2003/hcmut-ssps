package com.se.ssps.server.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.se.ssps.server.entity.Config;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;
import com.se.ssps.server.entity.configuration.FileType;
// import com.se.ssps.server.entity.configuration.MaxFileSize;
import com.se.ssps.server.entity.configuration.PageAllocation;
import com.se.ssps.server.entity.configuration.Room;
import com.se.ssps.server.service.user.AdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/config")
    public Config configStat(){
        return adminService.getAllConfig();
    }

    @PostMapping("/file-size")
    public void setMaxFileSize(@RequestParam(name = "size") double maxFileSize){
        adminService.setMaxFileSize(maxFileSize);
    }

    @PostMapping("/unit-price")
    public void setPageUnitPrice(@RequestParam(name = "price") Integer pageUnitPrice){
        adminService.setPagePrice(pageUnitPrice);
    }

    @PostMapping("/file-type")
    public void addFileType(@RequestBody FileType newFileType){
        adminService.addType(newFileType);
    }
    
    @DeleteMapping("/file-type")
    public void deleteFileType(@RequestParam Integer id){
        adminService.deleteType(id);
    }
    
    @GetMapping("/index")
    public String adminHome(){
        return "this is admin homepage";
    }
//=====================================================================================
//Thao tác đối với máy in:
    //Hiện thị danh sách máy in
    @GetMapping("/printer")
    public List<Printer> listOfPrinter(){
        return adminService.findAllPrinter();
    }

    //Thêm một máy in mới
    @PostMapping("/printer")
    public boolean addPrinter(@RequestParam(name = "printer-id") Integer room_id, @RequestBody Printer newPrinter){
        return adminService.addPrinter(room_id, newPrinter);
    }

    //Xóa một printer ra khỏi hệ thống***
    @DeleteMapping("/printer")
    public boolean deletePrinter(@RequestParam Integer id){
        return adminService.deletePrinter(id);
    }

    //Cập nhập một máy in mới
    @PutMapping("/printer")
    public void updatePrinter(@RequestBody Printer newPrinter, @RequestParam Integer id){
        adminService.updatePrinter(newPrinter,id);
    }

    //Hiện thị thông tin một máy in
    @GetMapping("/printer/info")
    public Printer printerInfo(@RequestParam Integer id){
        return adminService.findPrinterById(id);
    }

    //Hiện thị trạng thái một máy in
    @GetMapping("/printer/status")
    public Printer printerStatus(@RequestParam Integer id){
        return adminService.findPrinterById(id);
    }

//=====================================================================================
//Thao tác đối với vị trí
    //Thao tác đối với cơ sở
    //Hiện thị danh sách các cơ sở
    @GetMapping("/campus")
    public List<Campus> listOfCampus(){
        return adminService.findAllCampus();
    }

    @PostMapping("/campus")
    public boolean addCampus(@RequestBody Campus newCampus){
        return adminService.addCampus(newCampus);
        
    }

    @DeleteMapping("/campus")
    public Map<String, Boolean> deleteCampus(@RequestParam Integer id){
        return adminService.deleteCampus(id);
    }

    //Thao tác đối với tòa
    @GetMapping("/building")
    public List<Building> listOfBuildings(){
        return adminService.findAllBuilding();
    }

    @PostMapping("/building")
    public boolean addBuilding(@RequestParam(name = "campus-id") Integer campus_id, @RequestBody Building building){
        return adminService.addBuilding(campus_id, building);
    }
    
    @DeleteMapping("/building")
    public boolean deleteBuilding(@RequestParam Integer id){
        return adminService.deleteBuilding(id);
    }
    //Thao tác đối với phòng
    @GetMapping("/room")
    public List<Room> listOfRooms(){
        return adminService.findAllRoom();
    }

    @PostMapping("/room")
    public boolean addRoom(@RequestParam(name = "building-id") Integer building_id, @RequestBody Room room){
        return adminService.addRoom(building_id, room);
    }

    @DeleteMapping("/room")
    public boolean deleteRoom(@RequestParam Integer id){
        return adminService.deleteRoom(id);
    }
//=====================================================================================
//=====================================================================================
    // Hiện thị thông tin danh sách lịch sử in
    @GetMapping("/printing-logs")
    public List<PrintingLog> listOfPritntingLogs(){
        return adminService.findAllPrintingLogs();
    }
    //Hiện thị thông tin danh sách lịch sử mua
    @GetMapping("/payment-logs")
    public List<PaymentLog> listOfPaymentLogs(){
        return adminService.findAllPaymentLog();
    }
//=====================================================================================
//=====================================================================================
    //Hiện thị thao tác đối với cấp phát trang in
    @GetMapping("/page-allocation")
    public List<PageAllocation> listOfPageAllocations(){
        return adminService.findAllPageAllocations();
    }

    @PostMapping("/page-allocation")
    public void addPageAllocation(@RequestBody PageAllocation newAllocation){
        adminService.addPageAllocation(newAllocation);
    }

    @DeleteMapping("/page-allocation")
    public boolean deleteAllocation(@RequestParam Integer id){
        return adminService.deletePageAllocation(id);
    }


}
