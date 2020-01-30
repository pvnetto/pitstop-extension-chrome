// Creates an item on chrome's context menu
chrome.contextMenus.create({
  title: "This is a custom context button",
  contexts: ["browser_action"]
},
  function () {
    console.log("created btn");
  }
);

chrome.browserAction.onClicked.addListener(async (tab) => {
  // TODO: Add port/relative path configs, so files are always fetched from localhost:port/path

  const response = await fetch("http://localhost:3001");
  const data = await response.json();
  const scriptData = data.file;

  const scriptTemplate = `
      var newScript = document.querySelector('.injected-script') || document.createElement('script');

      newScript.classList.add('injected-script');
      newScript.textContent = ${scriptData};
      document.head.appendChild(newScript);
    `

  // https://stackoverflow.com/questions/26491360/chrome-extension-executescript-on-tab
  chrome.tabs.executeScript(tab.id, {
    code: scriptTemplate
  });

});