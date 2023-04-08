import { clearInput, focusInput, verifyInput } from "./utils.js"
import { createNewTask } from "./createNewTask.js"

const form = document.querySelector('.to-do-container')
const inputTask = document.querySelector('.task-title-input')

export let taskList = []

createTasksFromLocalStorage()

function createTasksFromLocalStorage() {
    let savedTaskList = JSON.parse(localStorage.getItem('tasks'))
    if (!Array.isArray(savedTaskList)) {
        savedTaskList = [savedTaskList]
    }

    if (savedTaskList[0] === null) return

    savedTaskList.forEach(task => {
        createNewTask(task)
    })

    taskList = savedTaskList
}

handleFormSubmitEvent()

function handleFormSubmitEvent() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const titleForTask = inputTask.value

        if (verifyInput()) return

        createNewTask(titleForTask)
        saveTaskOnLocalStorage(titleForTask)
        clearInput()
        focusInput()
    })
}

function saveTaskOnLocalStorage(titleForTask) {
    taskList.push(titleForTask)
    localStorage.setItem('tasks', JSON.stringify(taskList))
}
