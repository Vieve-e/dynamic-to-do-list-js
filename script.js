// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded" , function(){

    //Select DOM Elements:
 const addButton = document.getElementById("add-task-btn");
 const taskInput = document.getElementById("task-input");
 const taskList = document.getElementById("task-list");

   // Add event listener to add task btn
   addButton.addEventListener('click', addTask);

  // Create the addTask Function:
 function addTask() {
    // Retrieve and trim va.ue from the task input field
    const taskText = taskInput.value.trim();

    // Check if task is not empty
    if (taskText === ""){
    //  Prompt the user to enter a task
    alert("Please enter a task");
      return;
    }
    if (taskText !== "") {
      // Create a new <li> element (list item)
      const task = document.createElement('li');
      // Set the text inside the list item to the teskText
      task.classList.add('task');
      taskText.textContent = "tesk added";
      //Create a new button element for removing the task
      const removeTaskBtn = document.createElement("remove-btn");
      // Set the button's text to "Remove"
      removeTaskBtn.classList.add ('remove-task');
      removeTaskBtn.textContent = "Remove";
      // Give the button a class so we can style it later
      removeTaskBtn.addEventListener('click', function() {
        taskElement.remove();
        saveTasks();
    }); 
    }
    // Add a fundtion to be called when the remove button is called
    removeTaskBtn.onclick = function (){
        // When clicked, remove this list item from the task list
        taskList.removeChild(this.psrentNode);
    };
    // Add the remove button to the list item
    taskList.appendChild(removeTaskBtn);

    // Add the list item (with the button) to the task list
    taskList.appendChild(task);

    // Clear the input field to make it ready for the next task
    taskInput.value = "";
 }
    // Attach Event Listeners:
    // Event listener for the 'keypress' event on taskInput to add tasks by pressing Enter
    taskInput.addEventListener('keypress',  function (event) {
        // check if the key pressed is the 'Enter' key
        if (event.key === 'Enter') {
           // Call the addTask function when 'Enter' is pressed 
           addTask();
        }
    });
    // Event listener for when the "DOMContentLoaded" event to invoke addTask when the document has fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Call the addTask function fter the HTML document is fully loaded
       addTask(); 
    });
});


// Function to initialize and load task list
  function initTaskList() {
}
// Function to load tasks from Local Storage
  function loadTasks() {
  const taskList = document.getElementById('task-list');
  const storedTasks = localStorage.getItem('tasks');
}   
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
   
   // Save tasks to Local Storage
   saveTasks();

   // Clear task input
   taskInput.value = '';
  }
// Function to save tasks to Local Storage
function saveTasks() {
const taskList = document.getElementById('task-list');
const tasks = [];

// Iterate through task list and store task text
for (const task of taskList.children) {
tasks.push(task.textContent);
}

// Save tasks to Local Storage
localStorage.setItem('tasks', JSON.stringify(tasks));
};
  