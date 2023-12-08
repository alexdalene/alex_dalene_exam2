export const updateTime = (deadline, deadlineContainer) => {
  function formatTime(hours, minutes, seconds) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  let intervalId = setInterval(() => {
    deadline.seconds--;
    if (deadline.seconds < 0) {
      deadline.minutes--;
      deadline.seconds = 59;
    }
    if (deadline.minutes < 0) {
      deadline.hours--;
      deadline.minutes = 59;
    }
    if (deadline.hours < 0) {
      clearInterval(intervalId);
      deadline.hours = 0;
      deadline.minutes = 0;
      deadline.seconds = 0;
    }
    deadlineContainer.textContent = formatTime(
      deadline.hours,
      deadline.minutes,
      deadline.seconds,
    );
  }, 1000);
};
