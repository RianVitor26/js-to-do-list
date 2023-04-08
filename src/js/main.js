import { clearInput, focusInput, verifyInput } from "./utils.js"
import { createNewTask } from "./createNewTask.js"

const form = document.querySelector('.to-do-container')
const inputTask = document.querySelector('.task-title-input')
const TASKS_KEY = 'tasks'

let taskList = []

init()

function init() {
    createTasksFromLocalStorage()
    handleFormSubmitEvent()
}

function createTasksFromLocalStorage() {
    const savedTaskList = JSON.parse(localStorage.getItem(TASKS_KEY)) || []
    savedTaskList.forEach(createNewTask)
    taskList = savedTaskList
}

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
    localStorage.setItem(TASKS_KEY, JSON.stringify(taskList))
}
