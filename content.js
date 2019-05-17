const vids = document.getElementsByTagName('video');
chrome.runtime.onMessage.addListener(() => {
    for (vid of vids)
      vid.pause()
})

if (vids) {
  for (vid of vids) {
    vid.addEventListener('playing', () => {
      chrome.runtime.sendMessage({msg: 'turnVideosOff'})
    })
    vid.addEventListener('play', () => {
      chrome.runtime.sendMessage({msg: 'turnVideosOff'})
    })
    vid.addEventListener('loadsstart', () => {
      chrome.runtime.sendMessage({msg: 'turnVideosOff'})
    })
  }
}