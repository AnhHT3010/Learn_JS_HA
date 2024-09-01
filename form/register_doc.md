## Các bước để đăng ký tài khoản với localStorage

- B1: Lấy dữ liệu getItem() trên localStorage về 2 tình huống xảy ra:

* 1. Đã có dữ liệu trên localStorage rồi (thì lúc này phải convert về dạng JSON.parse để sử dụng được JavaScript)
* 2. Chưa có dữ liệu trên localStorage trả về 1 mảng rỗng

- B2: khi chuyển sang dạng JS thì phải xử logic JS ở phần đẩy dữ liệu vào
  Tức là phải push vào mảng đã được lấy ở bước 1 bằng ngôn ngữ lập trình JS.

- B3: Cài đặt setItem("key","value") gán dữ liệu người dùng vừa đăng ký vào localStorage

* key là khóa (khóa sẽ sử dụng để tham chiếu vào)
* value là giá trị của cái khóa đấy
