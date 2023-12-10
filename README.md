<a id="readme-top"></a>





<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/phuongngo0320/hcmut-ssps">
    <img src="hcmut.png" alt="Logo" width="160" height="160">
  </a>

<h3 align="center">Student Smart Printing Service</h3>

  <p align="center">
    Ứng dụng cung cấp dịch vụ in ấn tiện lợi cho sinh viên
    <br />
    <a href="#getting-started"><strong>Xem hướng dẫn »</strong></a>
    <br />
    <br />
    <a href="https://github.com/phuongngo0320/hcmut-ssps/releases">Tải xuống</a>
    ·
    <a href="mailto:phuong.ngo0320@hcmut.edu.vn">Báo lỗi</a>
    ·
    <a href="mailto:phuong.ngo0320@hcmut.edu.vn">Đề xuất tính năng</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Mục lục</summary>
  <ol>
    <li>
      <a href="#about-the-project">Về dự án này</a>
      <ul>
        <li><a href="#built-with">Công nghệ sử dụng</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Bắt đầu</a>
      <ul>
        <li><a href="#prerequisites">Điều kiện</a></li>
        <li><a href="#installation">Cài đặt</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Hướng dẫn sử dụng</a>
      <ul>
        <li><a href="#notes">Một số lưu ý</a></li>
        <li><a href="#functions">Thao tác trong ứng dụng</a></li>
        <li><a href="#errors">Lỗi có thể xảy ra khi sử dụng</a></li>
      </ul>
    </li>
    <li><a href="#contact">Liên hệ</a></li>
    <li><a href="#acknowledgments">Tài liệu tham khảo</a></li>
  </ol>
</details> -->





<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>

## Về dự án này

Ứng dụng này được hiện thực để phục vụ cho môn học Công nghệ phần mềm, thuộc về Trường Đại học Bách khoa, ĐHQG TP.HCM. Dự án hướng đến mục tiêu xây dựng nên một trang web cung cấp dịch vụ in ấn tiện lợi cho sinh viên của trường.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Công nghệ sử dụng
<a id="built-with"></a>

- [React](https://react.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/en/main)
- [Font Awesome](https://fontawesome.com/)
- [Spring](https://spring.io/projects/spring-framework)
- [Spring Boot](https://spring.io/projects/spring-boot/)
- [Spring JPA](https://spring.io/projects/spring-data-jpa)
- [MySQL](https://www.mysql.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- GETTING STARTED -->
<a id="getting-started"></a>

## Bắt đầu

<a id="prerequisites"></a>
### Điều kiện

Trước khi sử dụng ứng dụng, bạn cần cài đặt trước một số phần mềm sau:

- [Node.js](https://nodejs.org/en) (phiên bản LTS)
- [Apache Maven](https://maven.apache.org/download.cgi) (Link - binary zip archive)
- [MySQL](https://dev.mysql.com/downloads/installer/) (phiên bản Community)

<a id="installation"></a>
### Cài đặt

Vì ứng dụng chưa được triển khai tên miền, bạn có thể sử dụng nó bằng localhost với các bước sau:

1. Truy cập đường dẫn [https://github.com/phuongngo0320/hcmut-ssps/releases](https://github.com/phuongngo0320/hcmut-ssps/releases) và chọn phiên bản của ứng dụng.

2. Tải về source code và giải nén, lưu vào nơi bạn muốn

3. Mở một chương trình shell (Command Prompt, Powershell, Bash...) 

4. Thay đổi đường dẫn tới thư mục của ứng dụng (hcmut-ssps) bằng lệnh `cd <dir>`

5. Chạy các lệnh sau để khởi động chương trình phía client (giao diện ứng dụng sẽ tự động hiển thị sau bước này)

```bash
cd client
npm install
npm start
```

6. Tại vị trí thư mục gốc của ứng dụng (`hcmut-ssps`), mở file cấu hình ứng dụng tại đường dẫn `server/src/main/resources/application.properties`, thay đổi các dòng sau với username và password của tài khoản MySQL mà bạn muốn sử dụng:

```properties
spring.datasource.username=...
spring.datasource.password=...
```

7. Chạy các lệnh sau để khởi động chương trình phía server

```bash
cd server
mvn clean install
mvn spring-boot:run
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- USAGE -->
<a id="usage"></a>

## Hướng dẫn sử dụng

<p align="right">(<a href="#readme-top">back to top</a>)</p>

__Lưu ý__: vì ứng dụng vẫn đang trong giai đoạn phát triển nên một số chức năng sẽ không được đầy đủ như mong muốn

### Tạo tài khoản để sử dụng ứng dụng

Vì ứng dụng có tính năng xác thực nhưng chưa có tính năng đăng ký tài khoản, nên bạn cần tạo tài khoản thủ công trong cơ sở dữ liệu với các bước sau:

1. Mở ứng dụng MySQL Workbench (phần mềm đi kèm khi tải MySQL).

2. Đăng nhập vào cơ sở dữ liệu bạn muốn (mặc định: Local Instance MySQL80).

3. Chọn File -> New Query Tab

4. Sao chép các câu lệnh sau vào tab vừa mở, sau đó nhấn Execute (biểu tượng sấm sét)

```sql
USE cnpm_db;
INSERT INTO `users` (`id`,`first_name`,`is_admin`,`last_name`,`passw`,`username`) VALUES (1,'Tuan',0,'Kieu','123','tuan');
INSERT INTO `users` (`id`,`first_name`,`is_admin`,`last_name`,`passw`,`username`) VALUES (2,'Phuong',1,'Ngo','321','phuong');
INSERT INTO `student` (`id`,`balance`,`mssv`,`user_id`) VALUES (1,2000,2110642,1);
INSERT INTO `admin` (`admin_id`) VALUES (2);
```

Các câu lệnh trên tạo hai tài khoản:

- Tài khoản sinh viên:

    - Username: tuan
    - Password: 123

- Tài khoản nhân viên quản lý:

    - Username: phuong
    - Password: 321

Tài khoản sinh viên có sẵn số dư page balance là 2000.

### Nhóm chức năng của sinh viên

#### In tài liệu

### Nhóm chức năng của nhân viên quản lý (SPSO)

<!-- CONTACT -->
<a id="contact"></a>

## Liên hệ

Thành viên của dự án:

- Ngô Văn Phương - phuong.ngo0320@hcmut.edu.vn
- Kiều Đặng Quốc Tuấn - tuan.kieudangquoc03@hcmut.edu.vn

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
<a id="acknowledgments"></a>

## Tài liệu tham khảo

1. Sommerville, I. (2016). Software Engineering 10th Edition. Boston: Pearson Education Limited.

2. Thinh, N. H. P. (2019). _Use Case Diagram và 5 sai lầm thường gặp_.
Retrieved from Thinhnotes: https://thinhnotes.com/chuyen-nghe-ba/use-case-diagram-va-5-sai-lam-thuong-gap

3. Thinh, N. H. P. (2019). _Viết đặc tả Use Case sao đơn giản nhưng hiệu quả?_
Retrieved from Thinhnotes: https://thinhnotes.com/chuyen-nghe-ba/viet-dac-ta-use-case-sao-don-gian-nhung-hieu-qua

4. [Spring Framework Documentation :: Spring Framework](https://docs.spring.io/spring-framework/reference/index.html)

5. [Spring Boot Reference Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)

6. [React Reference Overview – React](https://react.dev/reference/react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>