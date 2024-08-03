// interger = Number(prompt ("nhập số mày muốn "))
// for (let i = 1 ; i <=10 ; i++) {
//     ket_qua= interger * i
//     console.log ( `${interger} nhân ${i} = ${ket_qua}`  )
// }

interger = Number(prompt("Nhập số mày muốn kiểm tra"));
check = true;
for (let i = 2; i < interger; i++) {
  if (interger % i == 0) {
    check = false;
  }
}
if (check == true && interger > 1) {
  console.log(`${interger} là số nguyên tố`);
} else {
  console.log(`${interger} không phải là số nguyên tố`);
}
