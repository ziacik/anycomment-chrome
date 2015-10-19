'use strict';

chrome.tabs.query({ active:true }, function(tabs) {
	var tab = tabs[0];
	document.getElementById('frame').src = 'http://localhost:1337/#!/?room=' + tab.url;
})