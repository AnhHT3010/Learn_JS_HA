import subject from "./data-subject.js";
const displaySubject = (data) => {
  const listSubject = document.getElementById("list-subject");
  listSubject.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    console.log(data[i], i);
    listSubject.innerHTML += `
      <div class="subject">
        <a href="subjects.html">
          <div class="intro">
            <div class="wrap-img">
              <img
                src="${data[i].imgUrl}"
                alt=""
              />
            </div>
            <b>${data[i].major}</b>
          </div>
          <div class="shortName">${data[i].name}</div>
        </a>
      </div>
    `;
  }
};
displaySubject(subject);

const searchFilter = document.getElementById("search-filter");
searchFilter.addEventListener("submit", function (e) {
  e.preventDefault();
  const majorVietNam = document.getElementById("vietnamese");
  const majorEnglist = document.getElementById("english");
  console.log(majorVietNam.checked, majorEnglist.checked);
  let new_subjects = [];
  for (let i = 0; i < subject.length; i++) {
    if (majorVietNam.checked && subject[i].major === "Hệ tiếng việt") {
      new_subjects.push(subject[i]);
    }
    if (majorEnglist.checked && subject[i].major === "Hệ tiếng anh") {
      new_subjects.push(subject[i]);
    }
  }
  displaySubject(new_subjects);
});
