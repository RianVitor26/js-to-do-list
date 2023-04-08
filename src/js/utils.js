export const taskTitle = document.querySelector('.task-title-input');

export function clearInput() {
    taskTitle.value = '';
}

export function focusInput() {
    taskTitle.focus();
}

export function verifyInput() {
    return taskTitle.value.length === 0;
}
