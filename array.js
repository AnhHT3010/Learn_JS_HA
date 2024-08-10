// const products = [
//   1,
//   "Banana",
//   "Orange",
//   "Strawberry",
//   6,
//   1234,
//   {
//     name: "Hoang Anh",
//     age: 20,
//   },
//   null,
//   false,
//   true,
//   [1, 2, 3, 4, 5, [123, 12, 1233]],
// ];
const navigation = [
  "Tin Tức",
  "Bóng đá",
  "Ngoại Hạng Anh",
  "Kinh Doanh",
  "Giải trí",
  "Sức khỏe",
  "Hi tech",
  "Thế giới",
  "Thể thao",
  "Pháp luật",
  "🗑️🗑️💀",
];
// độ dài của mảng
// console.log(navigation.length);
// lấy phần tử cuối cùng
// console.log("navigation", navigation[navigation.length - 1]);
// cập nhật dữ liệu
navigation[2] = "Ngoại Hạng Em 🥲";
// thêm phần tử vào cuối mảng
navigation.push("🫥🫥");
navigation.push("Thời sự");
// xóa phần tử cuối cùng
navigation.pop();
// console.log("navigation", navigation);

// vòng lặp qua mảng
// for (let i = 0; i < navigation.length - 1; i++) {
//   console.log("navigation", navigation[i]);
// }
let number = [10, -12, 0, 1, 3];
for (let i = 0; i <= number.length - 1; i++) {
  if (number[i] == 0) console.log("number", number[i]);
}
