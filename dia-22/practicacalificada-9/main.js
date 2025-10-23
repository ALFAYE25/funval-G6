// Selección de elementos

const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('.task-list');
const filterButtons = document.querySelectorAll('.filter-btn');


// Variables globales

let tasks = [];
let currentFilter = 'all';


// Función: Renderizar tareas

const renderTasks = () => {
  taskList.innerHTML = '';

  // Filtrar según la vista actual
  let filteredTasks = tasks;
  if (currentFilter === 'pending') filteredTasks = tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);

  // Mostrar cada tarea
  filteredTasks.forEach(({ id, text, completed }) => {
    const li = document.createElement('li');
    li.className = `task flex justify-between items-center bg-gray-100 rounded p-2 ${completed ? 'opacity-70' : ''}`;
    li.dataset.id = id;

    li.innerHTML = `
      <div class="flex items-center gap-2">
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}>
        <span class="${completed ? 'line-through text-gray-500' : ''}">${text}</span>
      </div>
      <div class="flex gap-2">
        <button class="btn-edit text-blue-600 hover:text-blue-800">Editar</button>
        <button class="btn-delete text-red-600 hover:text-red-800">Eliminar</button>
      </div>
    `;
    taskList.appendChild(li);
  });
};


// Función: Agregar tarea

const addTask = () => {
  const text = taskInput.value.trim();
  if (!text) return alert('Por favor escribe una tarea.');

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks = [...tasks, newTask]; // operador spread
  taskInput.value = '';
  renderTasks();

// alerta temporal
const alert = document.getElementById('alert');
alert.classList.remove('hidden');
setTimeout(() => alert.classList.add('hidden'), 2000);



};


// Delegación de eventos (acciones en la lista)

taskList.addEventListener('click', (event) => {
  const taskElement = event.target.closest('.task');
  if (!taskElement) return; // si no se hizo clic dentro de una tarea
  const taskId = Number(taskElement.dataset.id);

  // 1️⃣ Eliminar tarea
  if (event.target.matches('.btn-delete')) {
    tasks = tasks.filter(task => task.id !== taskId);
  }

  // 2️⃣ Editar tarea
  if (event.target.matches('.btn-edit')) {
    const task = tasks.find(task => task.id === taskId);
    const newText = prompt('Editar tarea:', task.text);
    if (newText) task.text = newText.trim();
  }

  // 3️⃣ Marcar como completada
  if (event.target.matches('.checkbox')) {
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
  }

  renderTasks();
});


// Filtros de tareas

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Quitar estilo activo de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
    // Agregar estilo activo al clicado
    button.classList.add('bg-blue-600', 'text-white');

    currentFilter = button.dataset.filter;
    renderTasks();
  });
});


// Eventos iniciales

addTaskBtn.addEventListener('click', addTask);

// Permitir agregar tarea con la tecla Enter
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
