import path from 'path';

const jqueryPath = path.resolve('src', 'libs', 'jquery-3.4.1.min.js');
const solPath = path.resolve('src', 'libs', 'pitstop-0.0.5.js');

export const executeDependencies = (tab, callback) => {
    chrome.tabs.executeScript(tab.id, { file: jqueryPath }, () => {
        chrome.tabs.executeScript(tab.id, { file: solPath }, callback);
    });
}