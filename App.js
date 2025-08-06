// Get the root element
const root = document.getElementById('root');

//    STYLING: Create a container
const container = document.createElement('div');
container.style.maxWidth = '400px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.backgroundColor = '#f4f4f4';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
container.style.fontFamily = 'Arial, sans-serif';
container.style.textAlign = 'center';
root.appendChild(container);

// Title
const title = document.createElement('h2');
title.textContent = 'Mini Task Tracker';
title.style.color = '#2c3e50';
container.appendChild(title);

// Input field
const input = document.createElement('input');
input.placeholder = 'Enter a task';
input.style.width = '70%';
input.style.padding = '10px';
input.style.margin = '10px 0';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '5px';
container.appendChild(input);

// Add button
const button = document.createElement('button');
button.textContent = 'Add Task';
button.style.padding = '10px 15px';
button.style.marginLeft = '10px';
button.style.backgroundColor = '#27ae60';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.fontWeight = 'bold';

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#219150';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#27ae60';
});
container.appendChild(button);

// Task list
const taskList = document.createElement('ul');
taskList.style.listStyle = 'none';
taskList.style.padding = '0';
taskList.style.marginTop = '20px';
container.appendChild(taskList);

// Task counter
const counter = document.createElement('p');
counter.style.marginTop = '15px';
counter.style.fontSize = '14px';
counter.style.color = '#555';
container.appendChild(counter);

// List to store tasks
let tasks = [];

// Function to update task counter
function updateCounter() {
  const remaining = tasks.filter(task => !task.completed).length;
  counter.textContent = `Remaining Task${remaining !== 1 ? 's' : ''}: ${remaining}`;
}

// Function to show tasks
function showTasks() {
  taskList.innerHTML = ''; // Clear old tasks

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.backgroundColor = '#fff';
    li.style.border = '1px solid #ddd';
    li.style.padding = '10px';
    li.style.marginBottom = '10px';
    li.style.borderRadius = '5px';

    // Left part: checkbox + task text
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.style.marginRight = '10px';

    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      showTasks();
    });

    const span = document.createElement('span');
    span.textContent = task.text;
    span.style.textDecoration = task.completed ? 'line-through' : 'none';
    span.style.color = task.completed ? '#999' : '#000';

    left.appendChild(checkbox);
    left.appendChild(span);

    // Delete button
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.style.backgroundColor = '#e74c3c';
    del.style.color = '#fff';
    del.style.border = 'none';
    del.style.padding = '5px 10px';
    del.style.borderRadius = '5px';
    del.style.cursor = 'pointer';

    del.addEventListener('click', () => {
      tasks.splice(index, 1);
      showTasks();
    });

    // Add both to list item
    li.appendChild(left);
    li.appendChild(del);
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
