const taskTitle = document.querySelector('.task-title-input')

export function clearInput() {
    taskTitle.value = ''
}

export function focusInput() {
    taskTitle.focus()
}

export function verifyInput() {
    if (taskTitle.value.length === 0) {
        return true
    }
}
