chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === 'toggleChat') {
      chrome.tabs.executeScript({
        file: 'bundle.js',
      });
    }
  });
  