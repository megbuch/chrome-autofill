// Handles user interaction in extension window

const button = document.getElementById("pasteButton");

button.addEventListener("click", sendHelloWorld);

function sendHelloWorld() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { text: "web developer" });
  });
}
