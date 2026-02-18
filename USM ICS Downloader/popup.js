document.querySelector("#syncBtn").addEventListener("click", function () {
  const status = document.querySelector("#status");
  status.innerText = "Syncing... Check your console!";
  chrome.runtime.sendMessage({ action: "startSync" });
});
