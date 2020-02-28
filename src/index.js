import { executeDependencies } from './helpers/execute-dependencies';
import { reduceArrToString } from './utils/reduceArrToString';

import fillForm from './actions/fill-form';

// const fillForm = (tab) => {
//   executeDependencies(tab, () => {
//     chrome.tabs.executeScript(tab.id, { file: 'libs/faker.pt_BR.min.js', }, () => {
//       chrome.tabs.executeScript(tab.id, { file: 'actions/fill-form.js' });
//     });
//   });
// }

const checkStock = (tab) => {
  chrome.tabs.executeScript(tab.id, { file: 'actions/check-stock.js' });
}

class ActionManager {
  constructor(actions) {
    this.actions = actions;

    this.handleContextClick = this.handleContextClick.bind(this);
  }


  handleContextClick = (info, tab) => {
    const { menuItemId } = info;

    this.actions.forEach(action => {
      if (action.id === menuItemId) action.execute(tab)
    })
    // if (menuItemId === 'fill_form_btn') fillForm(tab);
    // else if (menuItemId === 'check_stock_btn') checkStock(tab);
  }

}

const actionManager = new ActionManager([fillForm]);


// // Creates an item on chrome's context menu
// chrome.contextMenus.create({
//   id: 'fill_form_btn',
//   title: "Preencher formulário",
//   contexts: ['page', 'selection', 'link', 'editable'],
// });

// Creates an item on chrome's context menu
chrome.contextMenus.create({
  id: 'check_stock_btn',
  title: "Conferir estoque",
  contexts: ['page', 'selection', 'link', 'editable'],
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo);
  if (changeInfo.status && changeInfo.status === 'complete') {
    chrome.tabs.executeScript(tabId, { file: 'src/helpers/selection.js' });
  }
});


chrome.contextMenus.onClicked.addListener(actionManager.handleContextClick)

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