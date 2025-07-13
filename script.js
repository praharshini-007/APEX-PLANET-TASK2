// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name.value || !email.value || !message.value) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  if (!email.value.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully!";
  this.reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// ...existing code...
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const priorityInput = document.getElementById('priorityInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();
  const priority = priorityInput.value;

  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = priority;
  li.innerHTML = `
    <span>${taskText} <small style="color:#888;">[${priority}]</small></span>
    <button onclick="removeTask(this)">&#10005;</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(btn) {
  btn.parentElement.remove();
}

function clearTasks() {
  document.getElementById('taskList').innerHTML = '';
}

// Contact form validation (optional)
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you for contacting us!";
  this.reset();
};
// ...existing code...
