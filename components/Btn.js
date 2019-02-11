function Btn(innerText = 'click', eventType, eventCb, style = null) {
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
