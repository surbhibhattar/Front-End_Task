var url =
  "http://ec2-3-6-40-236.ap-south-1.compute.amazonaws.com/civicrm/sites/all/modules/civicrm/extern/rest.php?entity=contact&action=get&key=3ac2ed2bce3fbd3b27f225c32d80c82f&api_key=hP0SvTcj0fzQUOchaptOJJl1&json=1";

function fetchData() {
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      console.log("response: ", response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

fetchData();

var totalRecords = data.length;
var currentPage = 0;
var maxRecordsPerPage = 6;
var maxPagesColumns = 3;
var pages = Math.ceil(totalRecords / maxRecordsPerPage);

function showRecords(records) {
  for (let i = 0; i < data.length; i++) {
    if (Math.floor(i / maxRecordsPerPage) === currentPage) {
      let tr = document.createElement("tr");
      let th = document.createElement("th");
      th.setAttribute("scope", "row");
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("style", "width:20px;height:20px");
      th.appendChild(input);
      tr.appendChild(th);
      for (const [key, value] of Object.entries(data[i])) {
        let td = document.createElement("td");
        td.setAttribute("class", "list_data");
        td.innerHTML = value;
        tr.appendChild(td);
      }
      let td = document.createElement("td");
      td.setAttribute("class", "actions");
      td.innerHTML = `<a href="#">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-pencil-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
        />
      </svg>
    </a>
    <a href="#"
      ><svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-card-list"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
        />
        <path
          fill-rule="evenodd"
          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
        />
        <circle cx="3.5" cy="5.5" r=".5" />
        <circle cx="3.5" cy="8" r=".5" />
        <circle cx="3.5" cy="10.5" r=".5" />
      </svg>
    </a>`;
      tr.appendChild(td);
      document.getElementsByTagName("tbody")[0].appendChild(tr);
    }
  }
}

function previous() {
  currentPage = currentPage > 0 ? currentPage - 1 : 0;
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  showRecords();
}

function next() {
  currentPage = currentPage < pages - 1 ? currentPage + 1 : currentPage;
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  showRecords();
}

function pageClick(page) {
  currentPage = page;
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  showRecords();
}
