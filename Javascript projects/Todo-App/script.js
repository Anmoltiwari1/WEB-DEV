document.addEventListener('DOMContentLoaded',()=>{//It is done ,as in case id DOM is not loaded our buttons..etc will not work,so for not to have incovience we add this,as it says that once the DOMcontent is loaded then only next operstions will be done


    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //if page reloaed it check that local storage has anything in it is it has it add in array,if not it will give the empty array

    tasks.forEach((task) => renderTask(task)) //this renders the tasks

    addTaskButton.addEventListener("click", () => {
      const tasktesk = todoInput.value.trim();
      if (tasktesk == "") {
        //When user does not input anything
        return;
      }
      const newTask = {
        id: Date.now(), //Give unique String every time for id purpose
        text: tasktesk,
        completed: false,
      };
      tasks.push(newTask);
      saveTask();
      renderTask(newTask)
      todoInput.value = ""; //clear input
      console.log(tasks);
    });



    function renderTask(task) {
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id);
      if (task.completed) {
        li.classList.add("completed");
      }
      li.innerHTML = `<span>${task.text}</span> <button>Delete</button>`;
      //We we click on that task and want it to be completed
      li.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        li.style.backgroundColor = "#191b1e";
        saveTask();
      });
      //querySelector.(We can add button(for tag),.button(for class),and #button(for id))
      li.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation()//prevent toggle from firing
        //it filter that "t(variable) take take every array element one by one" if it not equal to task.id/task then remove that one ,menas all true elemnt will come back
        tasks=tasks.filter(t => t.id !== task.id)
        li.remove();
        saveTask();
      });

      todoList.appendChild(li);
    }





    //This function add it into local storage.
    function saveTask() {
      //localstorage-->it gives acces to local storage of browser.
      //setItem-->Add items to local storage
      //JSON.stringify(tasks)-->convert the task of array into json format
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})