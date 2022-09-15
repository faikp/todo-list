window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const listElem = document.querySelector("#tasks");
  const addBtn = document.querySelector("#task-submit");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("PLEASE FILL SOMETHING!");
      return;
    }

    const taskElem = document.createElement("div");
    taskElem.classList.add("task");
    const taskContentElem = document.createElement("div");
    taskContentElem.classList.add("content");
    taskElem.appendChild(taskContentElem);

    const taskInputElem = document.createElement("input");
    taskInputElem.classList.add("text");
    taskInputElem.type = "text";
    taskInputElem.value = task;
    taskInputElem.setAttribute("readonly", "readonly");

    taskContentElem.appendChild(taskInputElem);

    const actionElem = document.createElement("div");
    actionElem.classList.add("actions");

    const editElem = document.createElement("button");
    editElem.classList.add("edit");
    editElem.innerHTML = "Edit";

    const deleteElem = document.createElement("button");
    deleteElem.classList.add("delete");
    deleteElem.innerHTML = "Delete";

    actionElem.appendChild(editElem);
    actionElem.appendChild(deleteElem);

    taskElem.appendChild(actionElem);
    listElem.appendChild(taskElem);

    listElem.appendChild(taskElem);

    input.value = "";

    editElem.addEventListener("click", () => {
      if (editElem.innerText.toLowerCase() == "edit") {
        taskInputElem.removeAttribute("readonly");
        taskInputElem.focus();
        editElem.innerText = "Save";
      } else {
        taskInputElem.setAttribute("readonly", "readony");
        editElem.innerText = "Edit";
      }
    });

    deleteElem.addEventListener('click',()=>{
      listElem.removeChild(taskElem)
    })
  });
});
