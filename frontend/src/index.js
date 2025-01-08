const taskList = document.getElementById('task-list');
const loadTasks = async () => {
    try {
        const response = await fetch('http://10.6.131.191:3000/tasks');
        const tasks = await response.json();
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
             <div class="task-card">
                <h3>${task.title}</h3>
                <p><strong>Username:</strong> ${task.username}</p>
                <p><strong>Description:</strong> ${task.description}</p>
                <p><strong>Status:</strong> ${task.status}</p>
                <p><strong>Due Date:</strong> ${task.due_date}</p>
                <p><strong>Created At:</strong> ${task.created_at}</p>
            </div>
            `;
            taskList.appendChild(taskItem);
        });
    } catch (error) {
        const errorItem = document.createElement('li');
        errorItem.textContent = 'Error loading tasks';
        taskList.appendChild(errorItem);
    }
};

(async () => {
    await loadTasks();
})();