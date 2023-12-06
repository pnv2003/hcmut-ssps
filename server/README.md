# REST API DOCUMENTATION
# Admin view:
### 1.Printer Service:
#### 1.1 Get list of printer: `GET` 
```JSon
/admin/printer
```
* return
```
list<Printer>
```
#### 1.2 Add a printer: `POST`
```
/admin/printer?room-id={room-id}
```
```
{
    "printerName": String,
    "inkAmount": Integer,
    "pageAmount": Integer,
    "firm": string,
    "description": String,
    "efficiency":Integer
}
```
* return
```
{
    "id": Integer
    "printerName": String,
    "inkAmount": Integer,
    "pageAmount": Integer,
    "firm": string,
    "description": String,
    "efficiency":Integer,
    "isDel": boolean,
    "room":Room
}
```
#### 1.3 Delete a printer: `DELETE`
```
/admin/printer?id={printer-id}
```
* return
```
Map<String,Boolean> : <"accepted", true/false>
```
#### 1.4 Update a printer: `PUT`
change room:
```
/admin/printer?roon-id={room-id}
```
not change room
```
/admin/printer
```
```
{
    "id": integer,
    "printerName": String,
    "inkAmount": Integer,
    "pageAmount": Integer,
    "firm": string,
    "description": String,
    "efficiency":Integer
}
```
* return
```
{
    "accepted":boolean
}
```
#### 1.5 Get info/status from a printer: `GET`
```
/admin/printer/info?id={printer-id}
/admin/printer/status?id={printer-id}
```
* return 
```
{
    "id": Integer
    "printerName": String,
    "inkAmount": Integer,
    "pageAmount": Integer,
    "firm": string,
    "description": String,
    "efficiency":Integer,
    "isDel": boolean,
    "room":Room
}
```

### 2. Location Service
#### 2.1 Get list of campus: `GET`
```
/admin/campus
```
* return
```
List<Campus>
```
#### 2.2 Add a campus: `POST`
```
/admin/campus
```
```
{
    "campusName":String
}
```
* return
```
{
    "id":Integer,
    "campusName:String,
    "isDel":boolean
}
```

#### 2.3 Delete a campus: `DELETE`
```
/admin/campus?id={campus-id}
```
* return
```
Map<String, Boolean> : <"accepted", true/false>
```
#### 2.4 Get list of building: `GET`
```
/admin/building
```
* return
```
list<Building>
```
#### 2.5 Add a building: `POST`
```
/admin/building?campus-id={campus-id}
```
```
{
    "buildingName":String,
}
```
* return
```
{
    "id":Integer,
    "buildingName": String,
    "isDel": boolean,
    "campus": Campus
}
```
#### 2.6 Delete a building: `DELETE`
```
admin/building/?id={building-id}
```
* return
```
Map<String, Boolean> : <"accepted", true/false>
```
#### 2.7 Get list of room: `GET`
```
admin/room
```
* return
```
List<Room>
```
#### 2.8 Add a room: `POST`
```
admin/room/?buidling-id={building-id}
```
```
{
    "roomName": string
}
```
* return
```
{
    "id":integer,
    "roomName":string,
    "building":building
}
```
#### 2.9 Delete a room: `DELETE`
```
admin/room?id={room-id}
```
* return
```
Map<String, Boolean> : <"accepted", true/false>
```
### 3.History Service
#### 3.1 Get list of printing logs: `GET`
```
/admin/printing-logs
```
* return
```
Lis><PrintingLog>
```
#### 3.2 Get list of payment logs: `GET`
```
admin/payment-logs
```
* return
```
List<PaymentLog>
```
### 4. Page allocation Service
#### 4.1 Get list of page allocation: `GET`
```
/admin/page-allocation
```
* return
```
List<PageAllocation>
```
#### 4.2 Add a page allocation: `POST`
```
/admin/page-allocation
```
```
{
    "semester":integer,
    "year":integer,
    "allocatedDate": "YYYY-MM-DD",
    "numOfPage":integer
}
```
* return
```
{
    "id":integer,
    "semester":integer,
    "year":integer,
    "allocatedDate": "YYYY-MM-DD",
    "numOfPage":integer,
    "status": boolean
}
```
#### 4.3 Delete a page allocation: `DELETE`
```
/admin/page-allocation?id={page-allocation-id}
```
* return
```
true/false
```

### 5. Other Configuration Service
#### 5.1 Get list of config: `GET`
```
/admin/config
```
* return
```
{
    List<FileType>,
    maxFileSize:{
        "maxFileSize": double
    },
    pageUnitPrice: integer
}
```
#### 5.2 Set max file size: `POST`
```
/admin/file-size?size={max-size}
```
#### 5.3 Set page unit price: `POST`
```
/admin/unit-price?price={unit-price}
```
#### 5.4 Add file type: `POST`
```
/admin/file-type
```
```
{
    "fileTypeName": string,
    "type": boolean (true: document, false: image)
}
```
* return
```
{
    "id": integer,
    "fileTypeName": string,
    "type": boolean (true: document, false: image)
}
```
#### 5.5 Delete a file type: `DELETE`
```
admin/file-type?id={file-type-id}
```
### 6. Statistic Service
#### 6.1 Get number of pages for each printer in time (@from, @to)
```
/admin/statistics/pages-by-printer?from={start}&to={end}
```
* return
```
Map<String, Integer> : <Printer name, number of page of printer>
```
#### 6.2 Get percent of requests for each printer in time (@from, @to)
```
/admin/statistics/request-by-printer?from={start}&to={end}
```
* return
```
Map<String, Double> : <Printer name, percent of number of requests of printer>
```
#### 6.3 Get percent of each page size used in time (@from, @to)
```
/admin/statistics/size-by-month?from={start}&to={end}
```

* return
```
Map<PageSize, Double> : <Type of page size, percent of each page size used>
```
#### 6.4 Get amount of money receiving from selling printing pages for each month in time (@from, @to)
```
/admin/statistics/profit-by-month?from={start}&to={end}
```
* return
```
Map<YearMonth, Integer> : <Month, amount of money receiving of month>
```
# Student View
### 1. Print documents: `POST`
```
/student/{id}/print?printer-id={printer-id}
```
```
{
    printingLog:
    {
        printingLog: {
            "fileName":String,
            "size": double,
            "numOfPages": integer,
            "numOfCopies": integer,
            "isHori": boolean,
            "isDoubleSided": boolean,
            "pageSize": string 
            ("A1","A2","A3","A4","A5")
        },
        ...
    }
}
```
### 2. Get list of printing logs: `GET`
```
/student/{id}/printing-logs
```
* return
```
{
    "printingLog":
    {
        "printingLog": {
            "fileName":String,
            "size": double,
            "numOfPages": integer,
            "numOfCopies": integer,
            "isHori": boolean,
            "isDoubleSided": boolean,
            "pageSize": string 
            ("A1","A2","A3","A4","A5"),
            "startDate": LocalDateTime,
            "endDate": LocalDateTime,
            "squarePrinting": double,

            "printer":{
                "id": Integer
                "printerName": String,
                "inkAmount": Integer,
                "pageAmount": Integer,
                "firm": string,
                "description": String,
                "efficiency":Integer,
                "isDel": boolean,
                "room":Room
                },

            "student":{
                "id": integer,
                "user_id":integer,
                "mssv": Long,
                "balance":integer
            }
        },
        ...
    }
}
```
### 3. Buy printing pages: `POST`
```
/student/{id}/buy-pages
```
```
{
    "numOfPages":integer,
    "paymentMethod":string
}
```
### 4. Get list of payment logs: `GET`
```
/student/{id}/payment-logs
```
* return
```
{
    "payment-logs":{
        "payment-log:{
            "id": integer,
            "numOfPages": integer,
            "payDate": LocalDateTime,
            "unitPrice":integer,
            "paymentMethod":string,

            "student":{
                "id": integer,
                "user_id":integer,
                "mssv": Long,
                "balance":integer
            }
        },
        ...
    }
}
```
### 5. Get information of student: `GET`
```
/student/{id}/info
```
* return
```
{
    "id": integer,
    "user_id":integer,
    "mssv": Long,
    "balance":integer
}
```
# User view
### 1. Login: `POST`
```
/login
```
```
{
    "username":string,
    "password":string
}
```
* return

```
{
    "user":{
        "id": long,
        "firstName": string,
        "lastName": string,
        "username": string,
        "password": string,
        "isAdmin":boolean
    },
    "isCorrectPass": true/false
}
```