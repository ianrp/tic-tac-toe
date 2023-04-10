const gameboard = (() => {
  let boardArray = [null, null, null, null, null, null, null, null, null];
  const getTile = (i) => boardArray[i];
  const setTile = (i, symbol) => boardArray[i] = symbol;
  return { getTile, setTile, boardArray };
})();

const Player = (s) => {
  let symbol = s;

  return { symbol };
}

const gameManager = (() => {

  const player1 = Player('x');
  const player2 = Player('o');
  let activePlayer = player1;

  const switchPlayer = () => {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  }

  const selectTile = (e) => {
    if (gameboard.getTile(e.currentTarget.num) === null) {
      gameboard.setTile(e.currentTarget.num, activePlayer.symbol)
      switchPlayer();
    }
  }

  return { selectTile};
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

  for (let i = 0; i < 9; i++) {
    const tileNode = document.querySelector(`.board div:nth-child(${i+1})`);
    tileNode.num = i;
    tileNode.addEventListener('click', gameManager.selectTile);
    tileNode.addEventListener('click', update);
  }

  return { update };
})();