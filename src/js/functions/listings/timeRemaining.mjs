export default function calculateRemainingTime(biddingEndTime) {
  // Convert the bidding end time to a Date object
  const endTime = new Date(biddingEndTime);

  // Get the current time
  const currentTime = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = endTime - currentTime;

  // Ensure the bidding has not ended
  if (timeDifference > 0) {
    // Convert the time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  } else {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
}
