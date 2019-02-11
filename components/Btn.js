function Btn(style = null, innerText = 'click', eventType, eventCb) {
  const btn = document.createElement('button');

  btn.innerText = innerText;

  if (handler) {
    btn.addEventListener(eventType, eventCb);
  }
  if (style) {
    btn.setAttribute('style', style);
  }

  return btn;
}
