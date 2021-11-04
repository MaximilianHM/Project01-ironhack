class Game {
  constructor() {
    // ctx = canvas.getContext("2d");
    this.bg = new Image();
    this.bg.src = "./images/bg-test.png";
    this.initialEuros = 0; // must se by 0
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
      // set the value of clicks
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
    console.log("clicking");
    this.initialEuros = this.initialEuros + 1;
    walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
  };

  // Developing your first web page
  buyFirstProgram = () => {
    if (this.initialEuros >= this.programCost) {
      this.initialEuros = this.initialEuros - this.programCost;
      theProgram.style.visibility = "hidden";
      walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      this.initialEuros = this.initialEuros + 1;
      setInterval(() => {
        walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
        this.initialEuros = this.initialEuros + 1;
      }, 1000);
    }
  };

  // ! SOLVE THE BTNDOM ISSUE
  buyClicks(buttonName, DOMText) {
    console.log("this.initialEuros", this.initialEuros);

    let multiplier = this.multipliers[buttonName];
    let cost = this.costs[buttonName];
    let lvl = this.levels[buttonName];

    // console.log("multiplier", multiplier);
    // console.log("cost", cost);
    // console.log("lvl", lvl);
    if (lvl < 1) {
      lvl = 1;
    }

    if (this.initialEuros >= cost * lvl) {
      // count clicks
      // if ai have euros > cost * lvl
      this.levels[buttonName] = lvl + 1;
      console.log(this.levels[buttonName]);
      // increase cost per clicks
      let clickValue = this.initialEuros - cost * (lvl - 1);
      console.log("lvl:", lvl);
      console.log("click value: ", clickValue);

      // console.log("click reward: ", clickReward);

      this.initialEuros = this.initialEuros - clickValue;

      // refresh the wallet after first click
      walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      //
      // set a max number of buy button
      if (lvl === 1) {
        DOMText.innerHTML = `
          <button type="button" disabled>
            You reach ${lvl} is the Max level
          </button>
        `;
      }
      // autocliker buy per second
      setInterval(() => {
        // add euros to wallet after 1 sec
        this.initialEuros = this.initialEuros + 1 * multiplier;
        // refresh the wallet
        walletMoney.innerText = `My wallet: ${Number(this.initialEuros)}€`;
      }, 1000);
    }
  }
}
