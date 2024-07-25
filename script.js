document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

// Check Local Storage for existing tasks
const tasks = JSON.parse(localStorage.getItem('loadTasks'));


function addTask(newTask) {
    // Add the new task to the DOM

    // Update tasks array
    tasks.push(newTask);

    // Save updated tasks to Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
   // Function to remove a task
function removeTask(taskIndex) {
    // Remove the task from the tasks array
    tasks.splice(taskIndex, 1);

    // Update Local Storage with the new tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Remove the task element from the DOM
    // You can use the taskIndex to target the specific task element to remove
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        // Create task element in the DOM for each task
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        
        // Append the task element to the task list
        document.getElementById('task-list').appendChild(taskElement);
    });
}

// Call the function when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);






    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        } else {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add = 'remove-btn';
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});