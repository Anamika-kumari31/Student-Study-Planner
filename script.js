let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

function saveTasks() {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const subjectInput = document.getElementById("subjectInput").value;
    const dateInput = document.getElementById("dateInput").value;
    const priorityInput = document.getElementById("priorityInput").value;

    if (taskInput === "" || subjectInput === "" || dateInput === "" || priorityInput === "") {
        alert("Please fill all fields.");
        return;
    }

    const newTask = {
        id: Date.now(),
        task: taskInput,
        subject: subjectInput,
        date: dateInput,
        priority: priorityInput,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    displayTasks();

    // Inputs Clear Karne Ke Liye
    document.getElementById("taskInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("priorityInput").value = "";
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const statusFilter = document.getElementById("statusFilter").value;
    const priorityFilter = document.getElementById("priorityFilter").value;

    const filteredTasks = tasks.filter(item => {
        const matchesSearch = item.task.toLowerCase().includes(searchInput) || 
                              item.subject.toLowerCase().includes(searchInput);

        const matchesStatus = statusFilter === "all" || 
                              (statusFilter === "completed" && item.completed) || 
                              (statusFilter === "pending" && !item.completed);

        const matchesPriority = priorityFilter === "all" || item.priority === priorityFilter;

        return matchesSearch && matchesStatus && matchesPriority;
    });

    filteredTasks.forEach(item => {
        const taskDiv = document.createElement("div");
        taskDiv.style.display = "flex";
        taskDiv.style.justifyContent = "space-between";
        taskDiv.style.alignItems = "center";
        taskDiv.style.padding = "10px";
        taskDiv.style.margin = "8px 0";
        taskDiv.style.border = "1px solid #ccc";
        taskDiv.style.borderRadius = "5px";
        taskDiv.style.backgroundColor = item.completed ? "#e2ffe2" : "#fff";

        taskDiv.innerHTML = `
            <div>
                <strong style="${item.completed ? 'text-decoration: line-through;' : ''}">${item.task}</strong> 
                <span style="color: #666;">(${item.subject})</span><br>
                <small>📅 ${item.date} | ⚡ Priority: ${item.priority}</small>
            </div>
            <div>
                <button onclick="completeTask(${item.id})" style="margin-right: 5px; padding: 5px 10px; cursor: pointer;">
                    ${item.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="deleteTask(${item.id})" style="padding: 5px 10px; cursor: pointer; background-color: #ff4d4d; color: white; border: none; border-radius: 3px;">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });

    updateStats();
}

function completeTask(id) {
    const task = tasks.find(item => item.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        displayTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(item => item.id !== id);
    saveTasks();
    displayTasks();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(item => item.completed).length;
    const pending = total - completed;

    document.getElementById("totalTasks").innerText = total;
    document.getElementById("completedTasks").innerText = completed;
    document.getElementById("pendingTasks").innerText = pending;
}

// Initial Calls & Event Listeners
displayTasks();

document.getElementById("searchInput").addEventListener("input", displayTasks);
document.getElementById("statusFilter").addEventListener("change", displayTasks);
document.getElementById("priorityFilter").addEventListener("change", displayTasks);