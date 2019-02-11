function BtnGrp() {
  const el = document.createElement('div');
  const save = Btn();
  const view = Btn();
  const clear = Btn();
  el.classList.add('button_group');
  el.innerHTML = `<button id="click">Save Resource</button>
    <button id="view">View Resources</button>
    <button id="clear">Clear Resources</button>`;

  save.addEventListener('click', () => {
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

  return el;
}
