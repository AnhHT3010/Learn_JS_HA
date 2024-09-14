import universitys from "./data-university.js";

const displayUniversity = () => {
  const listUniversity = document.getElementById("list-university");
  for (let i = 0; i < universitys.length; i++) {
    console.log(universitys[i], i);
    listUniversity.innerHTML += `
      <div class="university">
        <div class="intro">
          <div class="wrap-img">
            <img
              src="${universitys[i].logo}"
              alt=""
            />
          </div>
          <div>
            <b>${universitys[i].title}</b>
            <div class="shortName">${universitys[i].shortName}</div>
          </div>
        </div>
        <div class="description">
          <p class="document">🗒️ ${universitys[i].document} Outline</p>
          <button>See more</button>
        </div>
      </div>
    `;
  }
};

displayUniversity();

// select vào input search-university đó và lấy giá trị
// addEventListener("click", function(){
//   xử lý logic
//   Yêu cầu: in ra các phần tử ở mảng universitys có title chứa giá trị của input search-university
// })
