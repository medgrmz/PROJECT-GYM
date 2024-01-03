const form = document.querySelector("form");
const button = document.querySelector("button");
const summaryDiv = document.createElement("div");
summaryDiv.setAttribute("id","summary") ;
// summaryDiv.style.display = "none"; // Removed this line to keep summary visible

// Function to update the summary content
const updateSummary = () => {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const activity = document.getElementById("activity").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const summaryText = `
    Appointment Summary:
    - Name: ${firstName} ${lastName} c
    - Activity: ${activity}
    - Date: ${date}
    - Time: ${time}
  `;

  summaryDiv.textContent = summaryText;
};

// Event listener for button click
button.addEventListener("click", (event) => {
  event.preventDefault();

  // Update the summary before display
  updateSummary();

  // Insert the summary below the form (if not already there)
  if (!form.nextElementSibling || form.nextElementSibling !== summaryDiv) {
    form.insertAdjacentElement("afterend", summaryDiv);
  }

  // Toggle visibility of summary only (keep form visible)
  summaryDiv.style.display = "block";
});

// Event listener for summary click (no action needed now)
summaryDiv.addEventListener("click", () => {
  // No need to toggle form visibility here
});

// Event listeners for input changes (unchanged)
const inputs = document.querySelectorAll("input, select");
inputs.forEach((input) => {
  input.addEventListener("change", updateSummary);
});
