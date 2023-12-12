package com.se.ssps.server.controller;

import java.time.YearMonth;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.se.ssps.server.dto.PrinterDto;
import com.se.ssps.server.entity.Config;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;
import com.se.ssps.server.entity.configuration.FileType;
import com.se.ssps.server.entity.configuration.MaxFileSize;
// import com.se.ssps.server.entity.configuration.MaxFileSize;
import com.se.ssps.server.entity.configuration.PageAllocation;
import com.se.ssps.server.entity.configuration.PageUnitPrice;
import com.se.ssps.server.entity.configuration.Room;
import com.se.ssps.server.service.user.AdminService;
import com.se.ssps.server.stat.ChartValue;

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
    public MaxFileSize setMaxFileSize(@RequestParam(name = "size") double maxFileSize){
        return adminService.setMaxFileSize(maxFileSize);
    }

    @PostMapping("/unit-price")
    public PageUnitPrice setPageUnitPrice(@RequestParam(name = "price") Integer pageUnitPrice){
        return adminService.setPagePrice(pageUnitPrice);
    }

    @PostMapping("/file-type")
    public FileType addFileType(@RequestBody FileType newFileType){
       return adminService.addType(newFileType);
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

    // @GetMapping("/printer-stat")
    // public List<PrinterDto> listOfPrinterWithStat(){
    //     return adminService.findAllPrinterStat();
    // }
    //Thêm một máy in mới
    @PostMapping("/printer")
    public Printer addPrinter(@RequestParam(name = "room-id") Integer room_id, @RequestBody Printer newPrinter){
        return adminService.addPrinter(room_id, newPrinter);
    }

    //Xóa một printer ra khỏi hệ thống***
    @DeleteMapping("/printer")
    public Map<String, Boolean> deletePrinter(@RequestParam Integer id){
        return adminService.deletePrinter(id);
    }

    //Cập nhập một máy in mới
    @PutMapping("/printer")
    public Map<String,Boolean> updatePrinter(@RequestBody Printer newPrinter, @RequestParam(name = "room-id") Integer roomId){
        return adminService.updatePrinter(newPrinter,roomId);
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
    public Campus addCampus(@RequestBody Campus newCampus){
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
    public Building addBuilding(@RequestParam(name = "campus-id") Integer campus_id, @RequestBody Building building){
        return adminService.addBuilding(campus_id, building);
    }
    
    @DeleteMapping("/building")
    public Map<String, Boolean> deleteBuilding(@RequestParam Integer id){
        return adminService.deleteBuilding(id);
    }
    //Thao tác đối với phòng
    @GetMapping("/room")
    public List<Room> listOfRooms(){
        return adminService.findAllRoom();
    }

    @PostMapping("/room")
    public Room addRoom(@RequestParam(name = "building-id") Integer building_id, @RequestBody Room room){
        return adminService.addRoom(building_id, room);
    }

    @DeleteMapping("/room")
    public Map<String, Boolean> deleteRoom(@RequestParam Integer id){
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
    public PageAllocation addPageAllocation(@RequestBody PageAllocation newAllocation){
        return adminService.addPageAllocation(newAllocation);
    }

    @DeleteMapping("/page-allocation")
    public boolean deleteAllocation(@RequestParam Integer id){
        return adminService.deletePageAllocation(id);
    }

//=====================================================================================
//=====================================================================================
//Thống kê
    //Thống kê số trang theo từng máy in trong khoảng thời gian (from, to)
    @GetMapping("/statistics/pages-by-printer")
    public List<ChartValue> pageByPrinter(@RequestParam String from,@RequestParam String to){
        return adminService.totalSquare(YearMonth.parse(from), YearMonth.parse(to));
    }

    //Thống kê tỉ lệ số yêu cầu theo từng máy in trong khoảng thời gian (from, to)
    @GetMapping("/statistics/request-by-printer")
    public List<ChartValue> requestByPrinter(@RequestParam String from,@RequestParam String to){
        return adminService.printingRequest(YearMonth.parse(from), YearMonth.parse(to));
    }

    //Thống kê tỉ lệ loại kích thước trang được yêu cầu in trong khoảng thời gian (from, to)
    @GetMapping("/statistics/size-by-month")
    public List<ChartValue> pageSizeByMonth(@RequestParam String from,@RequestParam String to){
        return adminService.pageSizeByMonth(YearMonth.parse(from), YearMonth.parse(to));
    }

    //Thống kê số tiền bán trang in đối với từng tháng trong khoảng thời gian (from, to)
    @GetMapping("/statistics/profit-by-month")
    public List<ChartValue> profitByMonth(@RequestParam String from,@RequestParam String to){
        return adminService.profitByMonth(YearMonth.parse(from), YearMonth.parse(to));
    }
}
