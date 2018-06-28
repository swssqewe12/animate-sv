var nw = require('nw.gui');
var win = nw.Window.get();
win.isMaximized = false;
win.maximize();

win.toggleMaximized = function()
{
    if (win.isMaximized)
        win.unmaximize();
    else
    {
        win.maximize();
        win.unmaximize();
        win.maximize();     // fixes glitch on Windows.
    }
}

win.on('maximize', function() {
    win.isMaximized = true;
    document.body.classList.add("maximized");
});

win.on('restore', function() {
    win.isMaximized = false;
    document.body.classList.remove("maximized");
});