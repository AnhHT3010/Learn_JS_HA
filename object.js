// const hoang_anh = {
//   fullName: "Mai Hoàng Anh",
//   age: 17,
//   address: "Hà Nội",
// }
// console.log("Đối tượng Hoàng Anh khai báo: ", hoang_anh.fullName)
// console.log("Độ tuổi:", hoang_anh.age)
// console.log("Địa chỉ:", hoang_anh.address)
// hoang_anh.address = "USA"
// console.log("Địa chỉ:", hoang_anh.address)

// Bài tập 1: Tạo đối tượng
// Tạo một đối tượng person với các thuộc tính sau:
// firstName: "John"
// lastName: "Doe"
// age: 25
// city: "New York"
// Thêm một phương thức fullName vào đối tượng person để trả về tên đầy đủ (họ + tên).

// Bài tập 2: Truy cập thuộc tính của đối tượng
// Sử dụng đối tượng person từ Bài tập 1, viết mã để:
// In ra tên.
// In ra tuổi.
// In ra tên đầy đủ bằng phương thức fullName.

// Bài tập 3: Cập nhật thuộc tính của đối tượng
// Cập nhật thuộc tính age của đối tượng person thành 30.
// Thêm thuộc tính mới occupation với giá trị "Engineer".
// In ra đối tượng person đã được cập nhật.

// Bài 1

const person = {
    fullname : "John Doe",
    age: "25",
    city : "New York",
    bill: "60$"
}
console.log("Số tiền mày cần phải trả :", person.bill)
console.log("Tuổi :", person.age +  " Tên :" ,person.fullname  )

person.age ="30"
person.occupation = "enginneer"

// console.log ("Tên", john_doe.fullname + " Tuổi mới :", john_doe.age + " Nghề nghiệp :", john_doe.occupation)
// console.log(`Họ tên của ${john_doe.fullname}, số tuổi là ${john_doe.age} tuổi, số tiền mày cần phải trả là ${john_doe.bill}`)

console.log(person)