const reduceArrToString = (arr) => {
  return arr.reduce((result, data) => {
    result += data;
    return result;
  }, '');
}

const fillForm = (info, tab) => {
  chrome.tabs.executeScript(tab.id, { file: 'libs/faker.pt_BR.min.js', }, () => {
    chrome.tabs.executeScript(tab.id, {
      file: 'actions/fill-form.js',
    });
  });
}

// Creates an item on chrome's context menu
chrome.contextMenus.create({
  id: 'fill_form_btn',
  title: "Preencher formulário",
  contexts: ['page'],
});

chrome.contextMenus.onClicked.addListener(fillForm)

chrome.browserAction.onClicked.addListener(async (tab) => {
  // TODO: Add port/relative path configs, so files are always fetched from localhost:port/path

  const response = await fetch("http://localhost:3001");
  const data = await response.json();
  const scriptData = reduceArrToString(data.files.js);
  const cssData = reduceArrToString(data.files.css);

  const scriptTemplate = `
      var newScript = document.querySelector('.injected-script') || document.createElement('script');
      newScript.classList.add('injected-script');
      newScript.textContent = ${scriptData};

      document.head.appendChild(newScript);`;


  chrome.tabs.executeScript(tab.id, { file: 'libs/jquery-3.4.1.min.js' }, () => {
    chrome.tabs.executeScript(tab.id, {
      code: scriptTemplate,
    });
  });

  chrome.tabs.insertCSS(tab.id, {
    code: cssData
  });

});