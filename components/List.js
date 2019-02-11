function List(listItems) {
  const el = document.createElement('div');
  const btn = document.createElement('button');

  el.setAttribute(
    'style',
    `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;`
  );

  btn.innerText = 'Back';

  btn.addEventListener('click', () => {
    const rootNode = document.getElementById('root');
    const btnGrp = BtnGrp();
    const child = rootNode.firstChild;

    rootNode.replaceChild(btnGrp, child);
  });

  const items = listItems.map(ListItem);

  items.forEach(item => el.appendChild(item));
  el.appendChild(btn);

  return el;
}
