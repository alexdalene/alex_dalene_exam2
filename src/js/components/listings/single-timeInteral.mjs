export const updateTime = (deadline, deadlineContainer) => {
  function formatTime(days, hours, minutes, seconds) {
    return `
      <div class="flex flex-col items-center justify-center font-bold">${days}<span class="text-sm font-normal -mt-1">Days</span></div>
      <div class="flex flex-col items-center justify-center font-bold">${hours}<span class="text-sm font-normal -mt-1">Hours</span></div>
      <div class="flex flex-col items-center justify-center font-bold">${minutes}<span class="text-sm font-normal -mt-1">Minutes</span></div>
      <div class="flex flex-col items-center justify-center font-bold">${seconds}<span class="text-sm font-normal -mt-1">Seconds</span></div>
    `;
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
      deadline.days--;
      deadline.hours = 23;
    }
    if (deadline.days < 0) {
      clearInterval(intervalId);
      deadline.days = 0;
      deadline.hours = 0;
      deadline.minutes = 0;
      deadline.seconds = 0;
    }
    deadlineContainer.innerHTML = formatTime(
      deadline.days,
      deadline.hours,
      deadline.minutes,
      deadline.seconds,
    );
  }, 1000);
};
