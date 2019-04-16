document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

    var taskInput = document.querySelector("#taskInput");
    taskInput.setAttribute("minlength", "5"); // TOOLTIP
    taskInput.setAttribute("maxlength", "100"); // J.W.
    var taskList = document.querySelector("#taskList");
    var addTaskBtn = document.querySelector("#addTaskButton");
    var removeFinishedBtn = document.querySelector("#removeFinishedTasksButton");

    // COUNTER

    var taskCount = 0;
    var spanTaskCount = document.createElement("span");
    spanTaskCount.id = "counter";
    spanTaskCount.innerText = taskCount + " zadań do zrobienia."
    taskList.parentElement.insertBefore(spanTaskCount, taskList);

    function taskCountUp() {
        taskCount++
        spanTaskCount.innerText = taskCount + " zadań do zrobienia."
    }

    function taskCountDown() {
        taskCount--;
        spanTaskCount.innerText = taskCount + " zadań do zrobienia."
    }

    // COUNTER <KONIEC>

    // CZESC DODATKOWA - PRIORYTET

    var priorityInput = document.createElement("input");
    priorityInput.style.display = "block";
    priorityInput.id = "priorityInput";
    priorityInput.setAttribute("placeholder", "Task priority from 1-10");
    priorityInput.setAttribute("type", "number");
    priorityInput.setAttribute("min", "1");
    priorityInput.setAttribute("max", "10")
    priorityInput.style.width = "177px"

    addTaskBtn.parentElement.insertBefore(priorityInput,addTaskBtn);

    // CZĘŚĆ DODATKOWA <KONIEC>

    // DODAWANIE ELEMENTU LISTY

    addTaskBtn.addEventListener("click", function(){
        if(taskInput.value.length > 5 && taskInput.value.length < 100) {
            var newTask = document.createElement("li")
            var prVal = parseInt(priorityInput.value);
            newTask.innerHTML = "<h1></h1><button>Delete</button><button>Complete</button>";

            // SEKCJA NADANIA PRIORIYTETU 
            if(prVal < 1 || prVal > 10 || prVal === "") {
                newTask.dataset.priority = 0;
            } else {
                newTask.dataset.priority = prVal
            }
            console.log(newTask.dataset.priority)
            // SEKCJA NADANIA PRIORYTETU <KONIEC>

            // DECYZJA GDZIE UMIEŚCIĆ NOWY TASK

            if(taskList.children.length === 0 || parseInt(newTask.dataset.priority) === 0){
                taskList.appendChild(newTask);
            } else {
                for(var i=0;i<taskList.children.length;i++){
                    if (parseInt(newTask.dataset.priority) >= parseInt(taskList.children[i].dataset.priority)){
                        taskList.insertBefore(newTask, taskList.children[i])
                        break;
                    } 
                    taskList.appendChild(newTask);
                }
            }
            taskCountUp();

            // DECYZJA <KONIEC>

            newTask.firstElementChild.innerText = taskInput.value;
            taskInput.value = "";

            var deleteTaskBtn = newTask.childNodes[1];
            var completeTaskBtn = newTask.childNodes[2];

            //  USUNIĘCIE TASKA

            deleteTaskBtn.addEventListener("click", function() {
                taskList.removeChild(this.parentElement)
                if(!this.parentElement.firstElementChild.classList.contains("red")){
                    taskCountDown();
                };
            })

            // TASK COMPLETE

            completeTaskBtn.addEventListener("click", function(){
                this.parentElement.firstElementChild.classList.toggle("red");
                if(this.parentElement.firstElementChild.classList.contains("red")){
                  taskCountDown();
                } else taskCountUp();
            })
        }
    })

    // DODAWANIE ELEMENTU LISTY <KONIEC>

    // USUWANIE WYKONANEGO TASKA

    removeFinishedBtn.addEventListener("click", function() {
        for(var i=taskList.children.length;i>0;i--){
            if(taskList.children[i - 1].firstElementChild.classList.contains("red")) {
                taskList.removeChild(taskList.children[i - 1]);
            }
        }
    })

    // USUWANIE WYKONANEGO TASKA <KONIEC>

});