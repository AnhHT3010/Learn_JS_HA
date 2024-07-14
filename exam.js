// B1: Viết 1 hàm Tính thể tích hình trụ, cho phép người dùng nhập bán kính và chiều cao, sau đó alert('Thể tích hình trụ là: ' + the_tich)

// B2: Viết 1 hàm Tạo hàm chuyển đổi nhiệt độ từ Celsius sang Fahrenheit,
// cho phép người dùng nhập nhiệt độ Celsius, sau đó alert('Nhiệt độ Fahrenheit là: ' + fahrenheit)
// let r = prompt("chọn bán kình của mày");
// let h = prompt("chọn chiều cao cho mày");
// function number(a, b) {
//   let volume = 3.14 * a * a * b;
//   console.log(volume, "Đáp của án mày thôi m cút đi");
// }
// number(r,h)
// Bài 2

let c = prompt("nhiệt độ Celsius");
function number(c) {
  let f = c * 1.8 + 32;
  console.log(f, "thôi m cút hộ tao");
}
number(c);

let f = prompt("nhiệt độ Fahrreneit");
function nuber(f) {
  let f = c * 1.8 + 32;
  console.log(c, "thôi m cút hộ tao");
}
number(c);
// // CÁCH SỬ DỤNG HÀM
// // function: là 1 hàm, thường được tái sử dụng nhiều lần
// // function - tên hàm - () - nội dung hàm
// function tinhTong(a, b) {
//   let avg = (a + b) / 2;
//   if (avg > 8) {
//     console.log("Trung bình lớn hơn 8");
//   } else {
//     console.log("Trung bình nhỏ hơn 8");
//   }
// }
// tinhTong(5, 6);
// tinhTong(8, 9);
// tinhTong(9, 9);
