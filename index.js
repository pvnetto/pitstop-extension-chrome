const reduceArrToString = (arr) => {
  return arr.reduce((result, data) => {
    result += data;
    return result;
  }, '');
}


const executeDependencies = (tab, callback) => {
  chrome.tabs.executeScript(tab.id, { file: 'libs/jquery-3.4.1.min.js', }, () => {
    chrome.tabs.executeScript(tab.id, { file: 'libs/pitstop-0.0.4.js' }, callback);
  });
}


const fillForm = (tab) => {
  executeDependencies(tab, () => {
    chrome.tabs.executeScript(tab.id, { file: 'libs/faker.pt_BR.min.js', }, () => {
      chrome.tabs.executeScript(tab.id, { file: 'actions/fill-form.js' });
    });
  });
}

const checkStock = (tab) => {
  chrome.tabs.executeScript(tab.id, { file: 'actions/check-stock.js' });
}

const handleContextClick = (info, tab) => {
  const { menuItemId } = info;
  if (menuItemId === 'fill_form_btn') fillForm(tab);
  else if (menuItemId === 'check_stock_btn') checkStock(tab);
}


// Creates an item on chrome's context menu
chrome.contextMenus.create({
  id: 'fill_form_btn',
  title: "Preencher formulário",
  contexts: ['page', 'selection', 'link', 'editable'],
});

// Creates an item on chrome's context menu
chrome.contextMenus.create({
  id: 'check_stock_btn',
  title: "Conferir estoque",
  contexts: ['page', 'selection', 'link', 'editable'],
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo);
  if (changeInfo.status && changeInfo.status === 'complete') {
    chrome.tabs.executeScript(tabId, { file: 'helpers/selection.js' });
  }
});


chrome.contextMenus.onClicked.addListener(handleContextClick)

chrome.browserAction.onClicked.addListener(async (tab) => {

  const response = await fetch("http://localhost:3001");
  const data = await response.json();
  const scriptData = reduceArrToString(data.files.js);
  const cssData = reduceArrToString(data.files.css);

  const scriptTemplate = `
      var newScript = document.querySelector('.injected-script') || document.createElement('script');
      newScript.classList.add('injected-script');
      newScript.textContent = ${scriptData};

      document.head.appendChild(newScript);`;


  executeDependencies(tab, () => {
    chrome.tabs.executeScript(tab.id, { code: scriptTemplate });
  });

  chrome.tabs.insertCSS(tab.id, {
    code: cssData
  });

});