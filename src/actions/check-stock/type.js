const CHECK_STOCK_ID = 'check_stock_btn';

// Creates an item on chrome's context menu
chrome.contextMenus.create({
    id: CHECK_STOCK_ID,
    title: "Conferir estoque",
    contexts: ['page', 'selection', 'link', 'editable'],
});

export const checkStock = {
    id: CHECK_STOCK_ID,
    execute: (tab) => {
        chrome.tabs.executeScript(tab.id, { file: 'src/actions/check-stock/action.js' });
    }
}