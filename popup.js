const btn = document.getElementById('click');

btn.addEventListener('click', () => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true, currentWindow: true },
    tabs => {
      chrome.storage.sync.get(['resources'], ({ resources = [] }) => {
        const url = tabs[0].url;
        resources.push(url);
        chrome.storage.sync.set({ resources });
      });
    }
  );
});

// add button for viewing list of saved resources

// Write to local
// Page to display items
// form to update name, url, etc. prefill, but editable
