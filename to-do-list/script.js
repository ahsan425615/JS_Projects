// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', function() {
        newTask.remove();
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter key to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
