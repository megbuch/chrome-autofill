// TODO: Fix input remaining highlighted
const style = document.createElement("style");
style.textContent = `
    .focused {
        border: 2px solid red !important;
    }
`;
document.head.appendChild(style);

// Handles interaction with the web page
let focusedInput = null;

function setInput(e) {
  if (e.target.tagName === "INPUT") {
    if (focusedInput) {
      focusedInput.classList.remove("focused");
    }
    focusedInput = e.target;
    focusedInput.classList.add("focused");
  }
}

function clearInput(e) {
  // if (e.target.tagName === "INPUT") {
  //   e.target.classList.remove("focused");
  //   focusedInput = null;
  // }
}

document.addEventListener("focus", setInput, true);
// document.addEventListener("blur", clearInput, true);

function pasteMessage(request, sender, sendResponse) {
  if (focusedInput && request.text) {
    focusedInput.value = request.text;

    // Create and dispatch an 'input' event
    let event = new Event("input", { bubbles: true });
    focusedInput.dispatchEvent(event);
    focusedInput.classList.remove("focused");
  }
}
chrome.runtime.onMessage.addListener(pasteMessage);
