const form = document.querySelector('.to-do-container')
const tasksContainer = document.querySelector('.tasks-container')
const taskTitle = document.querySelector('.task-title-input')

handleForm()
function handleForm() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const title = taskTitle.value

        if (verifyInput()) {
            return
        }
        createNewTask(title)
        clearInput()
        focusInput()
    })
}

function createNewTask(taskTitleInput) {
    const task = document.createElement('div')
    task.className = 'task'

    const editRemoveContainer = document.createElement('span')
    editRemoveContainer.className = 'edit-remove-container'

    const buttonEdit = document.createElement('i')
    buttonEdit.className = 'fa-solid fa-pen edit'

    const buttonRemove = document.createElement('i')
    buttonRemove.className = 'fa-solid fa-trash remove'

    editRemoveContainer.append(buttonRemove)
    editRemoveContainer.append(buttonEdit)

    const taskTitle = document.createElement('input')
    taskTitle.className = 'task-title-output'
    taskTitle.value = taskTitleInput
    taskTitle.setAttribute('maxLength', 30)
    taskTitle.disabled = true

    task.append(editRemoveContainer)
    task.append(taskTitle)
    
    tasksContainer.appendChild(task)

    buttonRemove.addEventListener('click', () => {
        task.remove()
    })

    buttonEdit.addEventListener('click', () => {
        taskTitle.disabled = false
        taskTitle.focus()
    })

    taskTitle.addEventListener('blur', () => {
        taskTitle.disabled = true
    })
}

function clearInput() {
    taskTitle.value = ''
}

function focusInput() {
    taskTitle.focus()
}

function verifyInput() {
    if (taskTitle.value.length === 0) {
        return true
    }
}

