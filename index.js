// Creates an item on chrome's context menu
chrome.contextMenus.create(
  { title: "This is a custom context button", contexts: ["browser_action"] },
  function() {
    console.log("created btn");
  }
);

chrome.browserAction.onClicked.addListener(tab => {
  // chrome.tabs.executeScript(tab.id, {
  //     file: 'inject.js',
  //     runAt: 'document_start',
  // });

  // TODO: Fetch files from localhost
  // TODO: Read fetched files and insert to code
  // TODO: Add port/relative path configs, so files are always fetched from localhost:port/path

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json));

  // https://stackoverflow.com/questions/26491360/chrome-extension-executescript-on-tab
  chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {
      code:
        "const myScript = document.createElement('script');" +
        "myScript.textContent = 'console.log(window.WhatsAppFormModal)';" +
        "document.head.appendChild(myScript);"
    });
  });
});
