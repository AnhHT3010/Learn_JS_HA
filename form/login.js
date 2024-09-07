// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
// Cứ mỗi lần load lại trang hoặc là tắt đi bật lại thì sẽ mất dữ liệu userDB
// Khắc phục bằng cách sử dụng localStorage
// 4 cái mình cần phải nhớ
// 1. cách lưu
// setItem(): Gán dữ liệu vào LocalStorage
// 2. cách lấy
// getItem(): Lấy dữ liệu từ LocalStorage
// 3. cách xóa
// 4. cách xóa tất cả
const form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Đăng nhập thành công
  data = localStorage.getItem("data_user");
  data = data ? JSON.parse(data) : [];
  console.log(data)
  userName = document.getElementById("loginUsername");
  password = document.getElementById("loginPassword");
  console.log(userName.value)
  console.log(password.value)
  let check = false
  for (let i = 0 ; i < data.length ; i++) {
    if (data[i].username == userName.value && data[i].password== password.value ) {
      check = true
      toast({
        title: "Thông báo ✅✅✅",
        message: `${userName.value} đã đăng ký thành công!`,
        type: "success",
        duration: 5000,
      }); 
      break
    }
    console.log(data[i].username, userName.value )
    console.log(data[i].password,password.value)
  }
  if (check == false) {
      toast({
        title: "Thông báo ❌❌❌",
        message: `Tên đăng nhập hoặc mật khẩu không đúng!`,
        type: "error",
        duration: 1000,
      });
  }
  
  // toast({
  //   title: "Thông báo ✅✅✅",
  //   message: `${userName.value} đã đăng ký thành công!`,
  //   type: "success",
  //   duration: 5000,
  // });
  // // Đăng nhập thất bại
  // toast({
  //   title: "Thông báo ❌❌❌",
  //   message: `Tên đăng nhập hoặc mật khẩu không đúng!`,
  //   type: "error",fr
  //   duration: 1000,
  // });
});
localStorage
