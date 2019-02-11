function Btn(innerText = 'click', eventType = 'click', eventCb, style = null) {
  const btn = document.createElement('button');

  btn.innerText = innerText;

  if (eventType && eventCb) {
    btn.addEventListener(eventType, eventCb);
  }
  if (style) {
    btn.setAttribute('style', style);
  }

  return btn;
}
