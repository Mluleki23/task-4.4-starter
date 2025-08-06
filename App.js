// Get the root element
const root = document.getElementById('root');

// Create elements
const title = document.createElement('h2');
title.textContent = 'Mini Task Tracker';
root.appendChild(title);

// Input field
const input = document.createElement('input');
input.placeholder = 'Enter a task';
root.appendChild(input);

// Add button
const button = document.createElement('button');
button.textContent = 'Add Task';
root.appendChild(button);

// Task list
const taskList = document.createElement('ul');
root.appendChild(taskList);

// Task counter
const counter = document.createElement('p');
root.appendChild(counter);

// List to store tasks
let tasks = [];

// Function to update task counter
function updateCounter() {
  const remaining = tasks.filter(task => !task.completed).length;
  counter.textContent = `Tasks left: ${remaining}`;
}

// Function to show tasks
function showTasks() {
  taskList.innerHTML = ''; // Clear old tasks

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      showTasks();
    });

    // Task text
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) {
      span.style.textDecoration = 'line-through';
    }

    // Delete button
    const del = document.createElement('button');
    del.textContent = 'delete';
    del.addEventListener('click', () => {
      tasks.splice(index, 1);
      showTasks();
    });

    // Add elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);.0
    li.appendChild(del);

    // Add item to the list
    taskList.appendChild(li);
  });

  updateCounter();
}

// Add task when button is clicked
button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  tasks.push({ text: text, completed: false });
  input.value = '';
  showTasks();
});
