// Bài tập 1: Bắt người dùng nhập 1 số cho đến khi nào số đó chia hết cho 5.

// Bài tập 2: The FizzBuzz Job Interview Question
// Đề bài: Viết một chương trình in các số từ 1 đến 100. Nhưng với các số chia hết cho 3,
// in "Fizz" thay vì số đó, và với các số chia hết cho 5, in "Buzz". Với các số vừa chia hết cho 3 và 5, in "FizzBuzz".
// Gợi ý: Sử dụng vòng lặp và các điều kiện kiểm tra.
number = Number(prompt("số mày phải nhập"));
check = true;
while (number % 5 != 0) {
  if (number % 5 == 0) {
    check = false;
    break;
  }
}
if ((check = false)) {
  console.log(`${number} là số chia hết cho 5`);
} else {
  console.log(`${number} là số không chia hết cho 5 yêu cầu nhập lại`);
}
