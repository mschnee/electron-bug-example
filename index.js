var domready = require('domready');

domready(function () {
	var webView = document.getElementById('webView');
	webView.addEventListener('dom-ready', function () {
		webView.openDevTools();
	});	
})
