const results = document.getElementById("results-div")
const clearBtn = document.getElementById("clear-btn")
const checkBtn = document.getElementById("check-btn")
const input = document.getElementById("user-input")

const validatePhoneNumber = () => {
  if (!input.value) {
    alert("Please provide a phone number");
    return;
  }

  const phoneNumber = input.value;
  const pattern = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  const match = pattern.test(phoneNumber);

  if (match) {
    results.innerHTML = `<p>Valid US number: ${phoneNumber}</p>`;
  } else {
    results.innerHTML = `<p>Invalid US number: ${phoneNumber}</p>`;
  }
};

const clearResults = () => {
  results.innerHTML = ``
}

checkBtn.addEventListener("click", validatePhoneNumber)
clearBtn.addEventListener("click", clearResults)