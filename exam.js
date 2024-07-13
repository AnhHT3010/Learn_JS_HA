
// B1: Viết 1 hàm Tính thể tích hình trụ, cho phép người dùng nhập bán kính và chiều cao, sau đó alert('Thể tích hình trụ là: ' + the_tich)


// B2: Viết 1 hàm Tạo hàm chuyển đổi nhiệt độ từ Celsius sang Fahrenheit, 
// cho phép người dùng nhập nhiệt độ Celsius, sau đó alert('Nhiệt độ Fahrenheit là: ' + fahrenheit)





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