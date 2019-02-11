function ListItem(link) {
  const wrapper = document.createElement('a');
  const el = document.createElement('div');

  el.innerText = link;

  wrapper.appendChild(el);
  wrapper.href = link;

  wrapper.setAttribute(
    'style',
    `width: 100%;
     height: 50px;
     border: 1px solid black;
     border-bottom: none;
     text-decoration: none;
    `
  );
  el.setAttribute(
    'style',
    `height: 100%; display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;`
  );

  return wrapper;
}
