var btAddTask = document.querySelector("#addTask");

btAddTask.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-add");
  var task = form.inputTask.value;
  console.log(task);
  var taskTr = document.createElement("tr");
  var taskTd = document.createElement("td");
  taskTd.textContent = task;
  taskTr.appendChild(taskTd);
  var tabela = document.querySelector("#table-Tasks");
  tabela.appendChild(taskTr);
  form.reset();

});
