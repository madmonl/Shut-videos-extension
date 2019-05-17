chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.tabs.getAllInWindow((tabs) => {
    tabs.forEach((tab) => {
      if (tab.id !== sender.tab.id) {
        chrome.tabs.sendMessage(tab.id, {
          msg: "pauseVideos"
        })
      }
    })
  })
})