// Handles user interaction in extension window

const button = document.getElementById("pasteButton");

button.addEventListener("click", pasteHelloWorld);

function pasteHelloWorld() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { text: "Hello World" });
  });
}
