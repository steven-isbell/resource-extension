function BtnGrp() {
  const el = document.createElement('div');
  el.classList.add('button_group');
  el.innerHTML = `<button id="click">Save Resource</button>
    <button id="view">View Resources</button>
    <button id="clear">Clear Resources</button>`;

  return el;
}
