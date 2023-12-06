package com.se.ssps.server.service.user;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.Config;
import com.se.ssps.server.entity.PageSize;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.configuration.Building;
import com.se.ssps.server.entity.configuration.Campus;
import com.se.ssps.server.entity.configuration.FileType;
// import com.se.ssps.server.entity.configuration.MaxFileSize;
import com.se.ssps.server.entity.configuration.PageAllocation;
import com.se.ssps.server.entity.configuration.Room;

@Service
public interface AdminService {
//================================================================================
//Thao tác đối với máy in
    public List<Printer> findAllPrinter();

    public Printer addPrinter(Integer room_id, Printer newPrinter);

    public Printer findPrinterById(Integer id);

    public Map<String, Boolean> deletePrinter(Integer id);

    public void updatePrinter(Printer newPrinter, Integer id);
//=====================================================================================
//================================================================================
//Thao tác đối với cơ sởx
    public List<Campus> findAllCampus();    

    public Campus addCampus(Campus newCampus);

    public Map<String, Boolean> deleteCampus(Integer id);
//================================================================================
//Thao tác đối với tòa
    public List<Building> findAllBuilding();

    public Building addBuilding(Integer campus_id, Building newBuilding);

    public Map<String, Boolean> deleteBuilding(Integer id);
//================================================================================
//Thao tác đối với phòng
    public List<Room> findAllRoom();

    public Room addRoom(Integer building_id, Room newRoom);

    public Map<String, Boolean> deleteRoom(Integer id);
//=====================================================================================
    //Danh sách file được cho phép
    public List<FileType> findAllType();

    public FileType addType(FileType fileType);

    public void deleteType(Integer fileTypeId);
//================================================================================
//================================================================================

    public void setMaxFileSize(double maxFileSize);

    public void setPagePrice(Integer pagePrice);

//=====================================================================================
//================================================================================
//Thao tác đối với xem lịch sử
    //lịch sử mua hàng
    public List<PrintingLog> findAllPrintingLogs();

    // public boolean addPrintingLog(PrintingLog newPrintingLog);

    //lịch sử thanh toán

    public List<PaymentLog> findAllPaymentLog();

    // public boolean addPaymentLog(PaymentLog paymentLog);

//================================================================================
//=====================================================================================   
    //Thao tác đối với thêm lịch cấp phát trang
    public List<PageAllocation> findAllPageAllocations();

    public PageAllocation addPageAllocation(PageAllocation newPageAllocation);

    public boolean deletePageAllocation(Integer id);
//================================================================================
//================================================================================
    public Config getAllConfig();
//================================================================================
//================================================================================
    public Map<String, Integer> totalPages (YearMonth from, YearMonth to);

    // public Map<>
    public Map<String, Double> printingRequest(YearMonth from, YearMonth to);

    public Map<PageSize, Double> pageSizeByMonth(YearMonth from, YearMonth to);

    public Map<YearMonth, Integer> profitByMonth(YearMonth from, YearMonth to);
    
}
