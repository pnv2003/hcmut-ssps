package com.se.ssps.server.dto;

import com.se.ssps.server.entity.Printer;
import com.se.ssps.server.entity.configuration.Room;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PrinterDto {
    private Integer printJob;
    private Double  squarePringting;
    private Boolean status;
    private Room    room;
    public PrinterDto(Printer printer) {
        this.status = printer.getStatus();
        this.room   = printer.getRoom();
        this.printJob = printer.getPrintingLogs().size();
    }
    
}
