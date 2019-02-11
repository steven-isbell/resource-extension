function BtnGrp() {
  const el = document.createElement('div');

  const save = Btn('Save Resource', 'click', () => {
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

  const view = Btn('View Resources', 'click', () => {
    chrome.storage.sync.get(['resources'], ({ resources = [] }) => {
      if (!resources[0]) {
        return alert('No resources saved');
      }
      const btnGrp = document.getElementsByClassName('button_group')[0];
      rootNode.replaceChild(List(resources), btnGrp);
    });
  });

  const clear = Btn('Clear Resources', 'click', () => {
    chrome.storage.sync.clear();
    alert('Storage Cleared!');
  });

  el.classList.add('button_group');

  const btns = [save, view, clear];

  btns.forEach(val => el.appendChild(val));

  return el;
}
