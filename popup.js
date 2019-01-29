const btn = document.getElementById('click');

btn.addEventListener('click', () => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true, currentWindow: true },
    function(tabs) {
      const url = tabs[0].url;
      let resources;
      chrome.storage.sync.set({ foo: 'hello', bar: 'hi' }, () => {
        alert('Settings saved');
      });
      chrome.storage.sync.get(['foo'], items => {
        alert('Settings retrieved', items);
      });
    }
  );
});

// Write to local
// Page to display items
// form to update name, url, etc. prefill, but editable
