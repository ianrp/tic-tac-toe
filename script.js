const gameboard = (() => {
  let boardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
  const getTile = (i) => boardArray[i];
  return { getTile };
})();

const displayController = (() => {

  const update = () => {
    for (let i = 0; i < 9; i++) {
      const tile = gameboard.getTile(i);
      if (tile === 'x') {
        const symbol = document.createElement('img');
        symbol.src = 'images/x.svg';
        const tileNode = document.querySelector(`.board div:nth-child(${i+1})`);
        tileNode.textContent = '';
        tileNode.appendChild(symbol);
      } else if (tile ==='o') {
        const symbol = document.createElement('img');
        symbol.src = 'images/circle.svg';
        const tileNode = document.querySelector(`.board div:nth-child(${i+1})`);
        tileNode.textContent = '';
        tileNode.appendChild(symbol);
      }
    }
  }

  return { update };
})();

displayController.update();