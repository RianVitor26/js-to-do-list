const tasksContainer = document.querySelector('.tasks-container')

export function createNewTask(titleForTask) {
    const task = document.createElement('div')
    task.className = 'task'

    const iconsContainer = document.createElement('span')
    iconsContainer.className = 'icons-container'

    const penIcon = document.createElement('i')
    penIcon.className = 'fa-solid fa-pen pen'

    const trashIcon = document.createElement('i')
    trashIcon.className = 'fa-solid fa-trash trash'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'

    iconsContainer.append(trashIcon)
    iconsContainer.append(penIcon)
    iconsContainer.append(checkbox)

    const taskTitle = document.createElement('input')
    taskTitle.className = 'task-title-output'
    taskTitle.value = titleForTask
    taskTitle.setAttribute('maxLength', 30)
    taskTitle.disabled = true

    task.append(iconsContainer)
    task.append(taskTitle)

    tasksContainer.appendChild(task)


    trashIcon.addEventListener('click', () => {
        task.remove()
    })

    penIcon.addEventListener('click', () => {
        taskTitle.disabled = false
        taskTitle.focus()

    })

    taskTitle.addEventListener('blur', () => {
        taskTitle.disabled = true
    })

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            taskTitle.style.textDecoration = 'line-through'
            tasksContainer.prepend(task)
        }
        else {
            taskTitle.style.textDecoration = 'none'
       }
       
    })
}
