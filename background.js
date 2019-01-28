chrome.runtime.onMessage.addListener((msg, sender, res) => {
  if (msg.from === 'popup' && msg.subject === 'courseId') {
    if (document.getElementById('group-groupId')) {
      res(document.getElementById('group-groupId').value);
    }
  }
});
