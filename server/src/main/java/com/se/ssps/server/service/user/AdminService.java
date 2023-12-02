package com.se.ssps.server.service.user;

import java.util.List;

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
import com.se.ssps.server.entity.configuration.Room;

@Service
public interface AdminService {
//================================================================================
//Thao tác đối với máy in
    public List<Printer> findAllPrinter();

    public boolean addPrinter(Integer room_id, Printer newPrinter);

    public Printer findPrinterById(Integer id);

    public boolean deletePrinter(Integer id);

    public void updatePrinter(Printer newPrinter, Integer id);
//=====================================================================================
//================================================================================
//Thao tác đối với cơ sở
    public List<Campus> findAllCampus();    

    public boolean addCampus(Campus newCampus);

    public boolean deleteCampus(Integer id);
//================================================================================
//Thao tác đối với tòa
    public List<Building> findAllBuilding();

    public boolean addBuilding(Integer campus_id, Building newBuilding);

    public boolean deleteBuilding(Integer id);
//================================================================================
//Thao tác đối với phòng
    public List<Room> findAllRoom();

    public boolean addRoom(Integer building_id, Room newRoom);

    public boolean deleteRoom(Integer id);
//=====================================================================================
    //Danh sách file được cho phép
    public List<FileType> findAllType();

    public void addType(FileType fileType);

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

    public void addPageAllocation(PageAllocation newPageAllocation);

    public boolean deletePageAllocation(Integer id);
//================================================================================
//================================================================================
    public Config getAllConfig();
    

}
