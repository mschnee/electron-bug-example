/**
 * Main process for things.
 */

var app = require('app');
var Window = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function () {
    mainWindow = new Window({
        'min-width': 800,
        'min-height': 600
    });

    mainWindow.loadUrl('file://' + __dirname + '/test.html');

    //mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    mainWindow.on('focus', function () {
        mainWindow.send('window-focused');
    });

    mainWindow.on('blur', function () {
        mainWindow.send('window-blurred');
    });
});