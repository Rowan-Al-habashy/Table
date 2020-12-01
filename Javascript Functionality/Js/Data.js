// Declaration Function //
const userName = document.querySelector(".UserName");
const message = document.querySelector(".Message");
const save = document.querySelector(".save");
// var cancel = document.querySelector(".delete");
// Array data/

var arr = ["UserName", "Message", "cancel"];

var par = document.createElement("table");
par.innerHTML = arr.length;
par.classList.add("table");

for (let i = 0; i < arr.length; i++) {
  const th = document.createElement("th");
  th.innerHTML = arr[i];
  th.classList.add("td");
  document.body.appendChild(th);
}

save.addEventListener("click", function () {
  let arr2 = ["", "", ""];
  var tr = document.createElement("tr");
  tr.innerHTML = arr2.length;

  var me = document.createElement("tr");
  me.innerHTML = userName.value;
  userName.value = "";
  me.classList.add("td2");
  document.body.appendChild(me);

  var td = document.createElement("td");
  td.innerHTML = message.value;
  message.value = "";
  td.classList.add("td1");
  document.body.appendChild(td);
  me.appendChild(td);

  var but = document.createElement("td");
  var cancel = document.createElement("button");
  cancel.innerHTML = "Delete";
  but.classList.add("td2");
  cancel.classList.add("delete");
  me.appendChild(but);
  but.appendChild(cancel);

  cancel.addEventListener("click", function () {
    alert("Are you sure that you want to delete");
    me.classList.add("hidden");
    td.classList.add("hidden");
    but.classList.add("hidden");
    cancel.classList.add("hidden");
  });
});
