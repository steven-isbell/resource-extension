const btn = document.getElementById('click');

btn.addEventListener('click', () => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true, currentWindow: true },
    function(tabs) {
      const url = tabs[0].url;
      chrome.storage.sync.set({ foo: 'hello', bar: 'hi' });
    }
  );
});

// add button for viewing list of saved resources
// chrome.storage.sync.get(['foo'], items => {
//     resources = items;
// });

// Write to local
// Page to display items
// form to update name, url, etc. prefill, but editable
