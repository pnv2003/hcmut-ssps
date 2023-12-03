package com.se.ssps.server.service.user;

import java.util.List;

import org.springframework.stereotype.Service;

// import com.se.ssps.server.entity.File;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.user.Student;

@Service
public interface StudentService {
    public Student getStudentInfo(Integer id);
//==============================================================================================
//==============================================================================================
    //Thao tác đối với việc in tài liệu
    public void addPrintingLog(List<PrintingLog> printingLog, Integer printerID, Integer id);

    public List<PrintingLog> listOfPrintingLogs(Integer id);

//==============================================================================================
//==============================================================================================
    //Thao tác mua trang in
    public void buyPage(PaymentLog paymentLog, Integer id);

    public List<PaymentLog> listOfPaymentLogs(Integer id);
}
