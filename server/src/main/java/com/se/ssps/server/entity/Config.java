package com.se.ssps.server.entity;

import java.util.List;
import lombok.*;

import com.se.ssps.server.entity.configuration.FileType;
import com.se.ssps.server.entity.configuration.MaxFileSize;
import com.se.ssps.server.entity.configuration.PageUnitPrice;

@Getter
@Setter
@NoArgsConstructor
public class Config {
    private List<FileType> fileTypeList;

    private MaxFileSize maxFileSize;

    private Integer pageUnitPrice;
}
