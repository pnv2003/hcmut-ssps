package com.se.ssps.server.service.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.se.ssps.server.entity.File;
import com.se.ssps.server.entity.PaymentLog;
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
            Integer remainPages = studentRepository.findStudentById(id).getBalance() - checkList.get(i).getNumOfPages();
            studentRepository.updateNumOfPages(remainPages, id); 
            checkList.get(i).setStudent(studentRepository.findStudentById(id));
            checkList.get(i).setPrinter(printerRepository.findPrinterById(printerID));
            printingLogRepository.save(checkList.get(i));
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
