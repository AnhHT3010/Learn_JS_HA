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

const userName = document.getElementById("registerUsername");
const password = document.getElementById("registerPassword");
const password_confirm = document.getElementById("registerConfirmPassword");

const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");
const errorPasswordConfirm = document.getElementById("errorPasswordConfirm");

const form = document.getElementById("registerForm");

// validate form: xử lý ngoại lệ khi người dùng nhập sai
// username có ít nhất 3 kí tự
// password không bỏ trống
// password_confirm phải trùng với password

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorName.innerText = "";
  errorPassword.innerText = "";
  errorPasswordConfirm.innerText = "";
  // bắt lỗi khi người dùng nhập sai
  if (userName.value.length < 3) {
    errorName.innerText = "Tên đăng nhập phải có ít nhất 3 kí tự";
  }
  if (password.value.length === 0) {
    errorPassword.innerText = "Mật khẩu không được để trống";
  }
  if (password_confirm.value !== password.value) {
    errorPasswordConfirm.innerText = "Mật khẩu không trùng khớp";
  }
  if (
    errorName.innerText !== "" ||
    errorPassword.innerText !== "" ||
    errorPasswordConfirm.innerText !== ""
  ) {
    return; // bắt người dùng nhập lại 
  }
  // lấy thông tin từ localStorage
  let data = localStorage.getItem("data_user"); // chứa những dữ liệu mà người dùng nhập
  // Lưu ý: Khi lấy dữ liệu từ localStorage về thì nó đang ở dạng chuỗi 
  console.log("Lúc lấy trên browser về:", data); // in ra những dữ liệu application 
  data = data ? JSON.parse(data) : []; // nếu như data có nó sẽ là JSON.prase(data) còn nếu không có data thì sẽ là rỗng
  console.log("Sau khi chuyển dạng dữ liệu về ngôn ngữ lập trình JS:", data); // tạo ra để có thể mình nhìn và kiểm tra
  console.log(data); // same với dòng 90
  data.push({
    username: userName.value,
    password: password.value,
  }); // thêm người dùng mới của mình
  // lưu thông tin người dùng vào mảng userData
  // set vào localStorage ( cái tk localStorage)
  localStorage.setItem("data_user", JSON.stringify(data)); // convert về chuỗi để browser hiểu
  toast({ // bật thông báo ra thì dùng dòng lệnh toast 
    title: "Thông báo ✅✅✅",
    message: `${userName.value} đã đăng ký thành công!`,
    type: "success",
    duration: 5000,
  });
  userName.value = "";
  password.value = "";
  password_confirm.value = ""; // reset lại value của tất cả cái form
});
