let display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += char;
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") display.innerText = "0";
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}
