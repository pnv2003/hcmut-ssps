package com.se.ssps.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.se.ssps.server.entity.PaymentLog;
// import com.se.ssps.server.entity.File;
import com.se.ssps.server.entity.PrintingLog;
import com.se.ssps.server.entity.user.Student;
import com.se.ssps.server.service.user.StudentService;

@RequestMapping("/student/{id}")
@RestController
@CrossOrigin
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/print")
    public void printDoc(   @RequestBody List<PrintingLog> printingLog, 
                            @RequestParam Integer printerID,
                            @PathVariable Integer id){
        studentService.addPrintingLog(printingLog,printerID,id);
    }

    @GetMapping("/printing-logs")
    public List<PrintingLog> listOfPrintingLogs(@PathVariable Integer id){
         return studentService.listOfPrintingLogs(id);
    }

    @PostMapping("/buy-pages")
    public void buyPages(@RequestBody PaymentLog payment, @PathVariable Integer id){
        studentService.buyPage(payment, id);
    }

    @GetMapping("/payment-logs")
    public List<PaymentLog> listOfPaymentLogs(@PathVariable Integer id){
        return studentService.listOfPaymentLogs(id);
    }

    @GetMapping("/info")
    public Student studentInfo(@PathVariable Integer id){
        return studentService.getStudentInfo(id);
    }
}
