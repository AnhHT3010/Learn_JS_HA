// B1: Tính tổng các số lớn hơn hoặc bằng 0 trong mảng
// const number = [10, 1, 9, -1, -3, 5];
// let tong = 0;
// for (i = 0; i < number.length; i++) {
//   if (number[i] > 0) {
//     tong = tong + number[i];
//   }
// }
// console.log(tong);

// // B2: Tìm số lần xuất hiện của phần tử số 10 trong mảng
// const number = [10, -12, 0, 1, 3, 10, 10, 10, 10, 10, 10, 101, 10, 10, 19];
// let count = 0;
// for (i = 0; i < number.length; i++) {
//   if (number[i] == 10) {
//     count = count + 1;
//   }
// }
// console.log(count);
// // B3: Tìm số lớn nhất trong mảng
// const number3 = [10, -12, 0, 1, 3, 4, 1, 23, 101, 100, 19];
// Max = -999999999999999999999999;
// for (i = 0; i < number3.length; i++) {
//   if (number3[i] > Max) {
//     Max = number3[i];
//   }
// }
// console.log(Max);

const students = [
  { name: "Alice", class: "10A", score: 85 },
  { name: "Bob", class: "10B", score: 92 },
  { name: "Charlie", class: "10A", score: 88 },
  { name: "David", class: "10B", score: 95 },
  { name: "Eve", class: "10A", score: 91 },
];
console.log(students);
// B1: Tìm sinh viên có điểm cao nhất.
// B2: Tìm bạn thuộc lớp 10A có điểm cao nhất.
// B3: In ra thông tin của bạn Bob.
const ban_1 = prompt("Nhap ten ban 1");
let thong_tin_ban_1 = null;
for (let i = 0; i < students.length; i++) {
  if (students[i].name === ban_1) {
    thong_tin_ban_1 = students[i];
  }
}
console.log(`Thông tin của bạn ${ban_1}`, thong_tin_ban_1.score);
// const thong_tin_ban_1 = students.filter(function (students) {
//   return students.name === ban_1;
// });
// B4: So sánh điểm của 2 bạn bằng cách nhập tên 2 bạn vào từ bàn phím.
// B5: Nhập tên 2 bạn trong lớp và kiểm tra xem 2 bạn có cùng lớp không.
