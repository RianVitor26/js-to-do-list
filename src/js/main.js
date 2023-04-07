const form = document.querySelector('.to-do-container')
const tasksContainer = document.querySelector('.tasks-container')
const taskTitle = document.querySelector('.task-title')

handleForm()
function handleForm() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const title = taskTitle.value
        createNewTask(title)
    })
}


function createNewTask(taskTitleInput) {
    const task = document.createElement('div')
    task.className = 'task'

    const editRemoveContainer = document.createElement('span')
    editRemoveContainer.className = 'edit-remove-container'


    const buttonEdit = document.createElement('p')
    buttonEdit.className = 'edit'
    buttonEdit.innerHTML = 'Edit'

    const buttonRemove = document.createElement('p')
    buttonRemove.className = 'remove'
    buttonRemove.innerHTML = 'X'

    editRemoveContainer.append(buttonEdit)
    editRemoveContainer.append(buttonRemove)

    const taskTitle = document.createElement('p')
    taskTitle.className = 'title-task'
    taskTitle.innerHTML = taskTitleInput



    task.append(editRemoveContainer)
    task.append(taskTitle)

    tasksContainer.appendChild(task)

    // <div class="task">
    //     <span class="edit-remove-container">
    //         <p class="edit">Edit</p>
    //         <p class="remove">X</p>
    //     </span>
    //     <p class="title-task">Estudar JS studar JS studar JS</p>
    // </div>
}