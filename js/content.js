// Handles interaction with the web page

let input;

function setInput(e) {
  if (e.target.tagName === "INPUT") {
    input = e.target;
  }
}

function pasteMessage(request, sender, sendResponse) {
  if (input && request.text) {
    input.value = request.text;
  }
}

document.addEventListener("click", setInput);
chrome.runtime.onMessage.addListener(pasteMessage);
