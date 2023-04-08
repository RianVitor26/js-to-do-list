import { clearInput, focusInput, verifyInput } from "./utils.js"
import { createNewTask } from "./createNewTask.js"

const form = document.querySelector('.to-do-container')
const inputTask = document.querySelector('.task-title-input')

function handleFormSubmitEvent() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const titleForTask = inputTask.value

        if (verifyInput()) return
           
        createNewTask(titleForTask)
        clearInput()
        focusInput()
    })
}

handleFormSubmitEvent()

