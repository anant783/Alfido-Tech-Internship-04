function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(delBtn);
  
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  