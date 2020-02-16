const solSelection = {
    rightClicked: [],
    leftClicked: []
}

window.addEventListener('contextmenu', function (ev) {
    const hoveredElements = document.querySelectorAll(':hover');
    solSelection.rightClicked = [...hoveredElements];
    console.log(hoveredElements);
});