import { executeDependencies } from '../../helpers/execute-dependencies';

const reduceArrToString = (arr) => {
    return arr.reduce((result, data) => {
        result += data;
        return result;
    }, '');
}

const inject = async (tab) => {
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
}

export default inject;