export default function calculateRemainingTime(biddingEndTime) {
  // Convert the bidding end time to a Date object
  const endTime = new Date(biddingEndTime);

  // Get the current time
  const currentTime = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = endTime - currentTime;

  // Ensure the bidding has not ended
  if (timeDifference > 0) {
    // Convert the time difference to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  } else {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
}
