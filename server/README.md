# REST API DOCUMENTATION
## 1. Admin view:
### 1.Printer Service:
1. /admin/index:

`GET` 

View admin Homepage

2. /admin/printer

`GET`

View list of printers

3. /admin/printer

`POST`: (Printer printer)

Add a printer to system


5. /admin/printer?id={id}

`DELETE`: (Integer id)

Delete a printer from system

6. /admin/printer?id={id}
`PUT`: (Printer printer, Integer id)

Update information of a printer

7. /admin/printer/info?id={id}
`GET`: (Integer id)

Get information of a printer

8. /admin/printer/status?id={id}
`GET`: (Integer id)

Get status of a printer


