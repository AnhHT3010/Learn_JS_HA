// Giới thiệu về toán tử trong JS
// 1. Toán tử số học
// 2. Toán tử gán
// 3. Toán tử so sánh
// 4. Toán tử logic

// 1. Toán tử số học
// Các phép + - * / ** %
// let co_so = 3
// let mu = 2
// let kq = co_so ** mu
// console.log(kq)

// 2. Toán tử gán
// let a = 5
// let a = 2 + 4 + 5
// console.log(a)

// 3. Toán tử so sánh > < >= <= == !=
// let a = 6
// let b = 8
// if(a < b){
//     console.log('a nhỏ hơn b')
// }

// 4. Toán tử logic: 1 là đúng 2 sai
// &&: và
// ||: hoặc
// !: phủ định

// Ví dụ:
// let a = 4
// let b = 8
// if(!(a < b || a > 5)){
//     console.log('a nhỏ hơn b và lớn hơn 5')
// }

// Bài tập
// Viết chương trình kiểm tra số chẵn lẻ, cho phép người dùng nhập số, nếu chẵn alert('Số chẵn'), nếu lẻ alert('Số lẻ')

// Tính diện tích hình tròn, cho phép người dùng nhập bán kính, sau đó alert('Diện tích hình tròn là: ' + dien_tich)

// Tính chỉ số BMI, cho phép người dùng nhập cân nặng (weight) và chiều cao (height), sau đó alert('Chỉ số BMI của bạn là: ' + bmi)
//bài 1
// let a = prompt("picknumber");
// if (a % 2 == 1) {
//   console.log("a là số lẻ");
// }
// if (a % 2 == 0) {
//   console.log("a là số chẵn");
// }

//bài 2
//let a = prompt("chọn bán kính");
//let output = a * a * 3.14;
//console.log(output);

//bài 3
// let a = prompt("chọn cân nặng");
// if (a > 60) {
//   console.log("mày béo vãi");
// }
// let b = prompt("chọn chiều cao của mày");
// let output = a / (b * b);
// console.log(output);
