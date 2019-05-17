// alert('hi');
Object.defineProperty(HTMLMediaElement, 'playing', {
  get: function(){
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    var tab = tabs[0];
    console.log(tab)
    const vids = document.getElementsByTagName('video');
    vids.forEach(vid => {
      if(document.querySelector('video').playing){
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
        console.log('should close all music videos')
      }
    })
});