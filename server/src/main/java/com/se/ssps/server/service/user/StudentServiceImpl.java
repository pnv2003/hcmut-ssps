package com.se.ssps.server.service.user;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.se.ssps.server.entity.File;
import com.se.ssps.server.entity.PaymentLog;
import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.user.Student;
import com.se.ssps.server.repository.PaymentLogRepository;
import com.se.ssps.server.repository.PrinterRepository;
import com.se.ssps.server.repository.PrintingLogRepository;
import com.se.ssps.server.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    PrinterRepository printerRepository;

    @Autowired
    PrintingLogRepository printingLogRepository;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    PaymentLogRepository paymentLogRepository;

    @Override
    public void addPrintingLog(List<PrintingLog> printingLog, Integer printerID, Integer id) {
        ArrayList<PrintingLog> checkList = new ArrayList<PrintingLog>(printingLog);
        for (int i = 0 ; i < checkList.size() ; i ++){
            PrintingLog newLog = checkList.get(i);
            Student findStudent = studentRepository.findStudentById(id);
            Printer findPrinter = printerRepository.findPrinterById(printerID);
            Integer remainPages = findStudent.getBalance() - newLog.getNumOfPages();

            //update số trang còn lại trong tài khoản sinh viên
            studentRepository.updateNumOfPages(remainPages, id); 

            //Thêm log
            //update thgian
            newLog.setStartDate(LocalDateTime.now());//tgian hien tai
            newLog.calculateSquare();
            LocalDateTime finishTime = LocalDateTime.now().plusSeconds(newLog.getNumOfPages()*5);//tgian in xong (sai logic :'( !! )
            newLog.setEndDate(finishTime);
            newLog.setStudent(findStudent);
            newLog.setPrinter(findPrinter);
            printingLogRepository.save(checkList.get(i));

            //update thong tin may in
            //1% muc in dc 20 trang
            printerRepository.updateInkAmount(findPrinter.getInkAmount() - newLog.getNumOfPages()/20, printerID);
            printerRepository.updatePageAmount(findPrinter.getPageAmount() - newLog.getNumOfPages(), printerID); 
        }
    }

    @Override
    public List<PrintingLog> listOfPrintingLogs(Integer id) {
        return printingLogRepository.findAll();
    }

    @Override
    public void buyPage(PaymentLog paymentLog, Integer id) {
        Integer remainPages = studentRepository.findStudentById(id).getBalance() + paymentLog.getNumOfPages();
        studentRepository.updateNumOfPages(remainPages, id);
        paymentLog.setStudent(studentRepository.findStudentById(id));
        paymentLog.setUnitPrice(remainPages);
        paymentLogRepository.save(paymentLog);
    }

    @Override
    public List<PaymentLog> listOfPaymentLogs(Integer id) {
        return paymentLogRepository.findAll();
    }

    @Override
    public Student getStudentInfo(Integer id) {
        return studentRepository.findStudentById(id);
    }

}
