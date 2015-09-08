This projects illustrates a bug in Electron's WebView implementation.  Specifically, the preload JavaScript which is injected before the first page load is lost upon any navigation.

# Setup
```
npm i
node_modules/.bin/electron .
```

Electron will load a page that then loads http://www.google.com in a WebView which injects `injected.js`, and then opens devtools for that webview.

# Expected Behavior
The string "THIS HAS BEEN INJECTED" should be output in the console upon every navigation event.
When navigating anywhere, or executing `window.location.reload()` in the devtools console, the string should be presented.

# Actual Behavior
The noted string will only be output on the initial load.  If you type in "youtube" in google search, and then navigate to YouTube, there will be no output.
You can also visit a website that presents a login form, which redirects you to itself when you fail to log-in.
Or you can type `window.location.reload()` in the console.

In all cases, the output is expected.  

# Information:
electron-prebuilt 0.31.2

main.js is the standard main process script.
test.html loads index.js and contains the WebView
index.js opens the WebView's devtools on the 'dom-ready' event.
injected.js is the JavaScript we expect to be injected.