function List(listItems) {
  const el = document.createElement('div');
  el.setAttribute(
    'style',
    `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;`
  );

  const items = listItems.map(ListItem);

  items.forEach(item => el.appendChild(item));

  return el;
}
