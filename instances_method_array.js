// function hihi(callback) {
//   callback();
// callback là trong 1 hàm gọi thêm 1 hàm khác
// sẽ in ra giá trị nếu như hàm callback có return
// }
// hihi(function () {
//   console.log("Hoàng Anh");
// });
// Filter: Thông thường sẽ lấy ra các phần tử thỏa mãn điều kiện
// kết quả của filter sẽ luôn trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện
// let number = [1, 2, 3, 4, 56, 67, 8, 9, 10];
const result = students.filter(function (student) {
  if (student.name == "Bob" || student.name == "Alice") {
    return true;
  }
}); // nếu return true nó sẽ lấy giá trị đó ra: [1]
console.log("Kết quả", result);

// Find: Tìm ra phần tử đầu tiên thỏa mãn điều kiện, trả ra 1 phần tử duy nhất: 1
const result2 = students.find(function (student) {
  return student.name == "Bob";
});
console.log("Kết quả", result2);

// find                     filter
// trả ra 1 phần tử         trả ra 1 mảng
// nếu không tìm thấy       nếu không tìm thấy
// trả ra undefined         trả ra mảng rỗng
