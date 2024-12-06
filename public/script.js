document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
});
