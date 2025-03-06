document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    let timerInterval;
    let timerSeconds = 0;

    const timerDisplay = document.getElementById('timer-display');
    const startTimerButton = document.getElementById('start-timer');
    const stopTimerButton = document.getElementById('stop-timer');
    const resetTimerButton = document.getElementById('reset-timer');

    startTimerButton.addEventListener('click', startTimer);
    stopTimerButton.addEventListener('click', stopTimer);
    resetTimerButton.addEventListener('click', resetTimer);

    function startTimer() {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        startTimerButton.disabled = true;
        stopTimerButton.disabled = false;
        resetTimerButton.disabled = false;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerSeconds = 0;
        updateTimerDisplay();
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
        resetTimerButton.disabled = true;
    }

    function updateTimerDisplay() {
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;
        timerDisplay.textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    }

    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }
});
