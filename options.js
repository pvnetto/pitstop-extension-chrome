const initOptions = (items) => {
}

const saveOptions = () => {
    const injectInput = document.querySelector('.inject-input');
    const injectPath = injectInput.files[0].mozFullPath;

    chrome.storage.sync.set({
        injectPath,
    });
}

const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', saveOptions);

chrome.storage.sync.get({
    injectPath: '',
}, initOptions);