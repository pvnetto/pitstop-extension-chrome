import ActionManager from './actions/action-manager';
import fillForm from './actions/fill-form';
import checkStock from './actions/check-stock';
import inject from './actions/inject';


const actionManager = new ActionManager([fillForm, checkStock]);

chrome.contextMenus.onClicked.addListener(actionManager.handleContextClick)

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status && changeInfo.status === 'complete') {
    chrome.tabs.executeScript(tabId, { file: 'src/helpers/selection.js' });
  }
});

chrome.browserAction.onClicked.addListener(inject);