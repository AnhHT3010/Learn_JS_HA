// Hàm (function) trong JS
// 1. Hàm:
//     - 1 khối mã thực thi 1 nhiệm vụ cụ thể
//     - tái sử dụng

// 2. Loại Hàm
//     - built-in
//     - tự định nghĩa

// 3. Tính chất
// - không thực thi trong quá trình chạy chương trình
// - chỉ chạy khi được gọi
// - có thể nhận tham số
// - có thể trả về giá trị

// 4. Cách sử dụng
// - Khai báo
// - Gọi
// - Truyền tham số
// - Nhận giá trị trả về

// 5. Cách khai báo
// - function name() {}
// - function name() {return value}
// let math = Number(prompt("Nhập điểm toán:"))
// let literature = Number(prompt("Nhập điểm văn:"))
// let english = Number(prompt("Nhập điểm anh:"))
// function avgMathAndLit(math, literature){
//     let result = math + literature
//     return result
// }
// avgMathAndLit(math, literature) // goi ham

// const kq = (avgMathAndLit(math, literature) + english) / 3
// console.log("Kết quả sau khi tính toán: ",kq)

// Xét học lực:
// Tạo một hàm determineAcademicPerformance(kq) để xác định học lực dựa trên điểm trung bình:
// Điểm trung bình từ 9 trở lên: "Xuất sắc"
// Điểm trung bình từ 8 đến dưới 9: "Giỏi"
// Điểm trung bình từ 6.5 đến dưới 8: "Khá"
// Điểm trung bình từ 5 đến dưới 6.5: "Trung bình"
// Điểm trung bình dưới 5: "Yếu"

// 3 kiểu
if(kq >= 9){
    console.log("Xuất sắc")
}else if(kq >= 8){
    console.log("Giỏi")
}
else if (kq >= 6.5) {
    console.log('Khá')
}
else if  (kq >= 5) {
    console.log('Trung bình')
}
else if ( kq < 5) {
    console.log ('Yếu')
}
