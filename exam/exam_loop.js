// Bài tập 1: Bắt người dùng nhập 1 số cho đến khi nào số đó chia hết cho 5.
// let number = Number(prompt("số mày phải nhập"));
// let check = true; // chưa chia hết cho 5
// while (number % 5 != 0) {
//   if (number % 5 == 0) {
//     check = false;
//     break;
//   }
//   console.log(`${number} là số không chia hết cho 5 yêu cầu nhập lại`);
//   number = Number(prompt("số mày phải nhập"));
// }
// console.log(`${number} là số chia hết cho 5`);

// Bài tập 2: The FizzBuzz Job Interview Question
// Đề bài: Viết một chương trình in các số từ 1 đến 100. Nhưng với các số chia hết cho 3,
// in "Fizz" thay vì số đó, và với các số chia hết cho 5, in "Buzz".
// Gợi ý: Sử dụng vòng lặp và các điều kiện kiểm tra.

let i = 0;
while (i < 100) {
  i++;
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
