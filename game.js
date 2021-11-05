class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg-canvas1.png";
    this.initialEuros = 0;
    this.programCost = 10;

    this.costs = {
      youtube: 20,
      coffee: 200,
      ironhack: 300,
      psychology: 400,
      frontEnd: 500,
      backEnd: 600,
      fullStack: 700,
      dreamJob: 900,
      crypto: 1000,
    };

    this.levels = {
      youtube: 0,
      coffee: 0,
      ironhack: 0,
      psychology: 0,
      frontEnd: 0,
      backEnd: 0,
      fullStack: 0,
      dreamJob: 0,
      crypto: 0,
    };

    this.multipliers = {
      youtube: 2,
      coffee: 3,
      ironhack: 4,
      psychology: 5,
      frontEnd: 6,
      backEnd: 7,
      fullStack: 8,
      dreamJob: 9,
      crypto: 15,
    };
  }

  // * METHODS

  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(this.gameLoop);
  };

  addOneEuro = () => {
    this.initialEuros = this.initialEuros + 1;
    walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
  };

  buyFirstProgram = () => {
    if (this.initialEuros >= this.programCost) {
      this.initialEuros = this.initialEuros - this.programCost;
      theProgram.innerHTML = `<button type="button" disabled>
          <h2 style="font-size:20px">
            Your program is already working for you
          </h2>
        </button>`;
      walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      this.initialEuros = this.initialEuros + 1;
      setInterval(() => {
        walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
        this.initialEuros = this.initialEuros + 1;
      }, 1000);
    }
  };

  buyClicks(buttonName, maxLvlDisplay, DOMCost) {
    let multiplier = this.multipliers[buttonName];
    let cost = this.costs[buttonName];
    let lvl = this.levels[buttonName];

    if (lvl <= 0) {
      lvl = 1;
    }

    if (this.initialEuros >= cost * lvl) {
      let clickValue = cost * lvl;
      this.levels[buttonName] = lvl + 1;
      this.initialEuros - clickValue;
      this.initialEuros = this.initialEuros - clickValue;

      walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      DOMCost.innerText = ` - Cost ${clickValue + cost}€ - LVL${lvl}`;
      if (lvl === 10) {
        maxLvlDisplay.innerHTML = `
          <button type="button" disabled><h2 style="font-size:20px">You reach level ${lvl} you got the Max level</h2></button>
        `;
      }

      setInterval(() => {
        this.initialEuros = this.initialEuros + 1 * multiplier;

        walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      }, 1000);
    }
  }
}
