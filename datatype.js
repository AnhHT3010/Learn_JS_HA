let age = 17 // number: số
let name = "Hoang Anh" // string: chuỗi kí tự
let isMale = true // boolean: chỉ có 2 kiểu 1 là true, 2 là false, lưu ý phải ghi đúng định dạng chứ thường không viết hoa
let address // undefined: không xác định
let phone = null // null: không có giá trị
console.log(typeof phone)
console.log(phone)

// đối với dữ liệu phức tạp hơn như mảng, object, function, ...


// CÁCH SỬ DỤNG HÀM
// function: là 1 hàm, thường được tái sử dụng nhiều lần

// function - tên hàm - () - nội dung hàm
function tinhTong(a, b){
    let avg = (a + b) / 2
    if(avg > 8){
        console.log('Trung bình lớn hơn 8')
    }else{
        console.log("Trung bình nhỏ hơn 8")
    }
}

tinhTong(5, 6)
tinhTong(8, 9)
tinhTong(9, 9)