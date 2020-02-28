import { executeDependencies } from '../../helpers/execute-dependencies';

const FILL_FORM_ID = 'fill_form_btn';

// Creates an item on chrome's context menu
chrome.contextMenus.create({
    id: FILL_FORM_ID,
    title: "Preencher formulário",
    contexts: ['page', 'selection', 'link', 'editable'],
});

export const fillForm = {
    id: FILL_FORM_ID,
    execute: (tab) => {
        executeDependencies(tab, () => {
            chrome.tabs.executeScript(tab.id, { file: 'src/libs/faker.pt_BR.min.js', }, () => {
                chrome.tabs.executeScript(tab.id, { file: 'src/actions/fill-form/action.js' });
            });
        });
    }
}