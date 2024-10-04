document.addEventListener('enterpictureinpicture', function(event) {
    event.stopImmediatePropagation();
}, true);

document.addEventListener('leavepictureinpicture', function(event) {
    event.stopImmediatePropagation();
}, true);
