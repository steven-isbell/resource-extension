function BackBtn() {
  const btn = document.createElement('button');

  btn.innerText = 'Back';

  btn.addEventListener('click', () => {
    const rootNode = document.getElementById('root');
    const btnGrp = BtnGrp();
    const child = rootNode.firstChild;

    rootNode.replaceChild(btnGrp, child);
  });

  return btn;
}
