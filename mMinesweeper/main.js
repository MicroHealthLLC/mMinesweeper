chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: "mSweeper",
    bounds: {
      width: 390,
      height: 560
    },
    maxWidth: 390,
    minWidth: 390,
    minHeight: 560,
    maxHeight: 560,
  });
});
