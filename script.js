function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskInput.value}</span>
      <span class="cross-mark" onclick="deleteTask(this)">X</span>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function deleteTask(task) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(task.parentElement);
}

function toggleDarkMode() {
  const container = document.querySelector('.container');
  container.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.querySelector('.dark-mode-btn');
  darkModeBtn.addEventListener('click', toggleDarkMode);
});

  