const targetDate = new Date("2023-10-21T11:00:00"); // Set the target date and time (October 20, 2023, 11:00 AM)

function updateCountdown() {
  const now = new Date();
  const difference = now - targetDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");

  daysElement.textContent = days;
  hoursElement.textContent = hours.toString().padStart(2, "0"); // Pad hours with leading zero if needed
  minutesElement.textContent = minutes.toString().padStart(2, "0"); // Pad minutes with leading zero if needed
}

updateCountdown(); // Call the function initially to display the countdown on page load
setInterval(updateCountdown, 1000); // Update the countdown every second
