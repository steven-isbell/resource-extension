const rootNode = document.getElementById('root');
rootNode.appendChild(BtnGrp());

const btn = document.getElementById('click');
const view = document.getElementById('view');
const clear = document.getElementById('clear');

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

view.addEventListener('click', () => {
  chrome.storage.sync.get(['resources'], ({ resources = [] }) => {
    if (!resources[0]) {
      return alert('No resources saved');
    }
    const btnGrp = document.getElementsByClassName('button_group')[0];
    rootNode.replaceChild(List(resources), btnGrp);
  });
});

clear.addEventListener('click', () => {
  chrome.storage.sync.clear();
  alert('Storage Cleared!');
});

// add button for viewing list of saved resources

// Write to local
// Page in tab to display items
// form to update name, url, etc. prefill, but editable
