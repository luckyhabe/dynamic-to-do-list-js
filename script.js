document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
        } else {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList = 'remove-btn';
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