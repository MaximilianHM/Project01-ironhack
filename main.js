// * CANVAS SETUP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// * GLOBAL VARIABLES
let game;

// * DOM ELEMENTS
//
let startScreen = document.querySelector("#start-screen");
let instructionScreen = document.querySelector("#instruction");
let gameScreen = document.querySelector("#the-game-screen");
let startBtn = document.querySelector(".game-btn");
let instructionBtn = document.querySelector(".instruction-img > button");
let walletMoney = document.querySelector(".btn-and-wallet > p");
let studingEuro = document.querySelector("#firstEuro-btn");
let theProgram = document.querySelector("#autocliker");
console.log(theProgram);
let btnYoutube = document.querySelector(".youtube-btn");
let btnCoffee = document.querySelector(".coffee-btn");
let btnIronhacker = document.querySelector(".ironhack-btn");
let btnPsychology = document.querySelector(".psycho-btn");
let btnFrontDev = document.querySelector(".front-end-btn");
let btnBackDev = document.querySelector(".back-end-btn");
let btnFullStack = document.querySelector(".full-stack-btn");
let btnDreamJob = document.querySelector(".dream-job-btn");
let btnCrypto = document.querySelector(".crypto-btn");
//
let costYoutube = document.querySelector("#youtube > span");
let costCoffee = document.querySelector("#coffee > span");
let costIronhack = document.querySelector("#ironhack > span");
let costPsychology = document.querySelector("#psycho > span");
let costFrontDev = document.querySelector("#front-dev > span");
let costBackDev = document.querySelector("#back-dev > span");
let costFullStack = document.querySelector("#full-stack > span");
let costDreamJob = document.querySelector("#dream-job > span");
let costCrypto = document.querySelector("#crypto > span");

// * FUNCTIONS

gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

  requestAnimationFrame(this.gameLoop);
};

const startGame = () => {
  canvas.style.display = "flex";
  gameScreen.style.display = "block";
  startScreen.style.display = "none";
  instructionScreen.style.display = "none";
};

const gameInstruction = () => {
  canvas.style.display = "none";
  gameScreen.style.display = "none";
  startScreen.style.display = "none";
  instructionScreen.style.display = "flex";

  // * START THE GAME
  game = new Game();
  game.gameLoop();

  // * ADD EVENT LISTENERS

  canvas.addEventListener("click", game.addOneEuro);
  theProgram.addEventListener("click", game.buyFirstProgram);

  btnYoutube.addEventListener("click", function () {
    game.buyClicks("youtube", btnYoutube, costYoutube);
  });
  btnCoffee.addEventListener("click", function () {
    game.buyClicks("coffee", btnCoffee, costCoffee);
  });
  btnIronhacker.addEventListener("click", function () {
    game.buyClicks("ironhack", btnIronhacker, costIronhack);
  });
  btnPsychology.addEventListener("click", function () {
    game.buyClicks("psychology", btnPsychology, costPsychology);
  });
  btnFrontDev.addEventListener("click", function () {
    game.buyClicks("frontEnd", btnFrontDev, costFrontDev);
  });
  btnBackDev.addEventListener("click", function () {
    game.buyClicks("backEnd", btnBackDev, costBackDev);
  });
  btnFullStack.addEventListener("click", function () {
    game.buyClicks("fullStack", btnFullStack, costFullStack);
  });
  btnDreamJob.addEventListener("click", function () {
    game.buyClicks("dreamJob", btnDreamJob, costDreamJob);
  });
  btnCrypto.addEventListener("click", function () {
    game.buyClicks("crypto", btnCrypto, costCrypto);
  });
};

startBtn.addEventListener("click", gameInstruction);
instructionBtn.addEventListener("click", startGame);
