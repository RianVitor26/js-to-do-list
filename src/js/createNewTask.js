const tasksContainer = document.querySelector('.tasks-container')

function createTaskHTML(titleForTask) {
    return `
    <div class="task">
      <span class="icons-container">
        <i class="fa-solid fa-trash trash"></i>
        <i class="fa-solid fa-pen pen"></i>
        <input type="checkbox" class="checkbox">
      </span>
      <input type="text" class="task-title-output" value="${titleForTask}" maxLength="30" disabled>
    </div>
  `
}

function updateTaskList(taskList) {
    localStorage.setItem('tasks', JSON.stringify(taskList))
}

export function createNewTask(titleForTask) {
    const taskElement = document.createElement('div')
    taskElement.innerHTML = createTaskHTML(titleForTask)
    const taskTitleElement = taskElement.querySelector('.task-title-output')

    tasksContainer.appendChild(taskElement)

    const trashIcon = taskElement.querySelector('.trash')
    trashIcon.addEventListener('click', () => {
        const taskName = taskTitleElement.value
        const taskList = JSON.parse(localStorage.getItem('tasks'))
        const index = taskList.indexOf(taskName)
        taskList.splice(index, 1)
        updateTaskList(taskList)
        taskElement.remove()
    })

    const penIcon = taskElement.querySelector('.pen')
    penIcon.addEventListener('click', () => {
        taskTitleElement.disabled = false
        taskTitleElement.focus()
    })
    
    taskTitleElement.addEventListener('blur', () => {
        taskTitleElement.disabled = true
        const newTaskTitle = taskTitleElement.value
        const taskList = JSON.parse(localStorage.getItem('tasks'))
        const index = taskList.indexOf(titleForTask)
        taskList.splice(index, 1, newTaskTitle)
        updateTaskList(taskList)
    })

    const checkbox = taskElement.querySelector('.checkbox')
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskTitleElement.style.textDecoration = 'line-through'
            tasksContainer.prepend(taskElement)
        } else {
            taskTitleElement.style.textDecoration = 'none'
        }
    })
}
