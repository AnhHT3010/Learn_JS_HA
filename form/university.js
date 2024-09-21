import universitys from "./data-university.js";

const displayUniversity = (data) => {
  const listUniversity = document.getElementById("list-university");
  listUniversity.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    console.log(data[i], i);
    listUniversity.innerHTML += `
      <div class="university">
        <div class="intro">
          <div class="wrap-img">
            <img
              src="${data[i].logo}"
              alt=""
            />
          </div>
          <div>
            <b>${data[i].title}</b>
            <div class="shortName">${data[i].shortName}</div>
          </div>
        </div>
        <div class="description">
          <p class="document">🗒️ ${data[i].document} Outline</p>
          <button>See more</button>
        </div>
      </div>
    `;
  }
};

displayUniversity(universitys);

// select vào input search-university đó và lấy giá trị
// addEventListener("click", function(){
//   xử lý logic
//   Yêu cầu: in ra các phần tử ở mảng universitys có title chứa giá trị của input search-university
// })

let searching = document.getElementById("search-university")
searching.addEventListener("change", function(){
  console.log(searching.value)
  let new_universities = []
  for(let i = 0 ; i < universitys.length ; i++) {
    let search = searching.value.toLowerCase()
    let key = universitys[i].title.toLowerCase()
    if ( key.includes(search) ) {
      console.log(universitys[i])
      new_universities.push(universitys[i])
    }
  }
  displayUniversity(new_universities)
}) 


// khi thanh tra thay đổi thì cái web cũng sẽ thay đổi theo
