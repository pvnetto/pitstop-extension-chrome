if (!window.$_selection) {
    window.$_selection = {
        rightClicked: [],
        leftClicked: []
    }

    window.addEventListener('contextmenu', function (ev) {
        const hoveredElements = document.querySelectorAll(':hover');
        $_selection.rightClicked = [...hoveredElements];
    });
}