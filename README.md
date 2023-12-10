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

Thành viên phát triển dự án:

- Ngô Văn Phương - phát triển frontend
- Kiều Đặng Quốc Tuấn - phát triển backend

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
- [Java](https://www.oracle.com/java/technologies/downloads/) (phiên bản JDK 21)
- [Apache Maven](https://maven.apache.org/download.cgi) (Link - binary zip archive)
- [MySQL](https://dev.mysql.com/downloads/installer/) (phiên bản Community)

<a id="installation"></a>
### Cài đặt

Vì ứng dụng chưa được triển khai tên miền, bạn có thể sử dụng nó bằng localhost với các bước sau:

1. Truy cập đường dẫn [https://github.com/phuongngo0320/hcmut-ssps/releases](https://github.com/phuongngo0320/hcmut-ssps/releases/tag/v1.0.0).

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

8. Sử dụng dữ liệu mẫu trong file `cnpm_db.sql`

- Mở phần mềm MySQL Workbench (đi kèm khi tải MySQL Community)

- Đăng nhập vào cơ sở dữ liệu bạn muốn (mặc định: Local Instance MySQL80).

- Chọn __Server -> Data Import__ 

- Chọn __Import from Self-Contained File__, chọn đường dẫn tới file `cnpm_db.sql`

- Chọn Default Target Schema là `cnpm_db`

- Mở Tab __Import Progress__ và nhấn __Start Import__.

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- USAGE -->
<a id="usage"></a>

## Hướng dẫn sử dụng

<p align="right">(<a href="#readme-top">back to top</a>)</p>

__Lưu ý__: vì ứng dụng vẫn đang trong giai đoạn phát triển nên một số chức năng sẽ không được đầy đủ như mong muốn

### Tài khoản để sử dụng ứng dụng

Các tài khoản có sẵn trong dữ liệu mẫu:

- Tài khoản sinh viên:

    - Username: tuan
    - Password: 123

- Tài khoản nhân viên quản lý:

    - Username: phuong
    - Password: 321

Tài khoản sinh viên có sẵn số dư page balance là 2000.

### Nhóm chức năng của sinh viên

__Chú ý__: Đăng nhập với username `tuan` và password `123` để sử dụng nhóm chức năng này

#### In tài liệu

Ở giao diện __In tài liệu__, bạn có thể gửi một yêu cầu in tới server với các bước sau:

1. Đăng tải file (có thể đăng nhiều file một lúc)

    - Các ràng buộc về định dạng và kích thước được hiển thị trên giao diện (có thể cấu hình phía nhân viên), nếu vi phạm thì file sẽ bị xóa

    - Có thể xóa file khi cần

2. Thiết lập cấu hình in

    - Có thể chọn biểu tượng Info để xem cấu hình đang được áp dụng cho từng file

    - Có thể chọn một file và điền vào biểu mẫu để thiết lập cấu hình mới (có 2 lựa chọn: "Lưu" - áp dụng cho file đang chọn, "Áp dụng cho tất cả" - áp dụng cho toàn bộ file đã đăng)

    - Số trang in có thể vượt quá số dư (được hiển thị trên giao diện), nếu vậy thì yêu cầu in sẽ bị từ chối

    - Đơn vị trang in mặc định là A4: 

        - 1 trang A1 = 8 trang A4
        - 1 trang A2 = 4 trang A4
        - 1 trang A3 = 2 trang A4
        - 1 trang A5 = 0.5 trang A4 (số thập phân được làm tròn lên)

3. Chọn vị trí máy in 

    - Lưu ý rằng máy in đang ngưng hoạt động sẽ không được hiển thị

4. Nhấn __Xác nhận yêu cầu__

__Chú ý__: Tính năng tự động đếm số trang, chọn trang cần in hay bản in xem trước chưa được hiện thực.

#### Mua trang in

Ở giao diện __Mua trang in__, bạn có thể gửi một yêu cầu mua trang tới server với các bước sau:

1. Chọn phương thức thanh toán

2. Chọn số trang cần mua

    Hệ thống sẽ tự động tính toán tổng tiền dựa trên đơn giá (có thể được cấu hình phía nhân viên)

3. Xác nhận thanh toán

__Chú ý__: Tính năng liên kết tới hệ thống thanh toán trực tuyến chưa được hiện thực.

#### Lịch sử in

Ở giao diện __Lịch sử in__, bạn có thể xem lại toàn bộ các yêu cầu in đã gửi từ giao diện __In tài liệu__.

### Nhóm chức năng của nhân viên quản lý (SPSO)

__Chú ý__: Đăng nhập với username `phuong` và password `321` để sử dụng nhóm chức năng này

#### Dashboard

Ở giao diện __Dashboard__, bạn có thể xem các thống kê liên quan tới hệ thống, bao gồm:

- Số trang A4 đã in ứng với từng máy in

- Số yêu cầu in được gửi tới từng máy in

- Phần trăm số trang đã in ứng với từng kích thước trang

- Doanh thu hằng tháng từ giao dịch mua trang in

#### Quản lý máy in

Ở giao diện __Quản lý máy in__, bạn có thể sử dụng các chức năng như:

- Thêm máy in mới

- Xóa máy in

- Chỉnh sửa máy in

- Tìm kiếm máy in

#### Thông số máy in

Ở giao diện __Thông số máy in__, bạn có thể sử dụng các chức năng như:

- Xem các thông số hoạt động của máy in (lượt in, diện tích giấy in, hiệu suất)

- Bật/tắt máy in

#### Cấu hình cấp phát

Ở giao diện __Cấp phát__, bạn có thể sử dụng các chức năng như:

- Thêm lịch cấp phát trang in

- Xóa lịch cấp phát trang in

#### Cấu hình liên quan tới file

Ở giao diện __Cấu hình file__, bạn có thể sử dụng các chức năng như:

- Thêm/xóa định dạng file cho phép

- Chỉnh sửa kích thước file lớn nhất cho phép

- Chỉnh sửa đơn giá trang in

#### Cấu hình vị trí

Ở giao diện __Vị trí__, bạn có thể sử dụng các chức năng như:

- Thêm/xóa cơ sở

- Thêm/xóa tòa tại cơ sở được chọn

- Thêm/xóa phòng tại tòa được chọn

#### Lịch sử in & thanh toán

Ở giao diện __Vị trí__, bạn có thể xem lại toàn bộ các yêu cầu in được thực hiện tại giao diện __In tài liệu__ và yêu cầu thanh toán được thực hiện tại giao diện __Mua trang in__.

<!-- CONTACT -->
<a id="contact"></a>

## Liên hệ

Mọi thắc mắc, báo lỗi, đề xuất tính năng cho ứng dụng xin hay liên hệ qua địa chỉ email:

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