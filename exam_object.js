// Bài tập 5: Đối tượng lồng nhau
// Tạo một đối tượng tên là student với các thuộc tính sau:
// name: "Alice"
// age: 22
// address: {
// street: "123 Main St"
// city: "Los Angeles"
// zip: "90001"
// }
// Viết mã để:
// In ra tên của sinh viên.
// In ra thành phố của sinh viên (trong đối tượng address).
// In ra tuổi của sinh viên sau 5 năm.

const person = {
    fullname : "Alice",
    age : "22",
    address : {
        street : "123 Main St",
        city : " Los Angeles",
        zip : "90001"
    }
 }

 console.log(`${person.fullname}  ${person.address.city}  ${Number(person.age) +5}` )