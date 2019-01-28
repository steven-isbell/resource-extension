const btn = document.getElementById('click');
btn.onclick = () => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true, currentWindow: true },
    function(tabs) {
      var url = tabs[0].url;
      alert(url);
    }
  );
};
