// * GLOBAL VARIABLES

// * CANVAS SETUP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let game;

// let canvas = document.querySelector("#my-canvas");

// * DOM ELEMENTS

let startScreen = document.querySelector("#start-screen");
let gameScreen = document.querySelector("#the-game-screen");
let startBtn = document.querySelector(".game-btn");
let walletMoney = document.querySelector(".btn-and-wallet > p");
let studingEuro = document.querySelector("#firstEuro-btn");
let theProgram = document.querySelector("#autocliker");
let youtubeBtn = document.querySelector(".youtube-btn");
let coffeeBtn = document.querySelector(".coffee-btn");
let btnIronhacker = document.querySelector(".ironhack-btn");
let btnPsychology = document.querySelector(".psycho-btn");
let btnFrontDev = document.querySelector(".front-end-btn");
let btnBackDev = document.querySelector(".back-end-btn");
let btnFullStack = document.querySelector(".full-stack-btn");
let btnDreamJob = document.querySelector(".dream-job-btn");
let btnCrypto = document.querySelector(".crypto-btn");

// * FUNCTIONS

gameLoop = () => {
  console.log("loop");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

  requestAnimationFrame(this.gameLoop);
};

// activating the the game screen
const startGame = () => {
  // show the canvas screen
  canvas.style.display = "flex";
  // show the buttons Again
  gameScreen.style.display = "block";

  // hide the start screen
  startScreen.style.display = "none";

  // * START THE GAME
  game = new Game();
  game.gameLoop();

  // * ADD EVENT LISTENERS

  canvas.addEventListener("click", game.addOneEuro);
  theProgram.addEventListener("click", game.buyFirstProgram);

  youtubeBtn.addEventListener("click", function () {
    game.buyClicks("youtube", youtubeBtn);
  });
  coffeeBtn.addEventListener("click", function () {
    game.buyClicks("coffee", coffeeBtn);
  });
  btnIronhacker.addEventListener("click", function () {
    game.buyClicks("ironhack", btnIronhacker);
  });
  btnPsychology.addEventListener("click", function () {
    game.buyClicks("psychology", btnPsychology);
  });
  btnFrontDev.addEventListener("click", function () {
    game.buyClicks("frontEnd", btnFrontDev);
  });
  btnBackDev.addEventListener("click", function () {
    game.buyClicks("backEnd", btnBackDev);
  });
  btnFullStack.addEventListener("click", function () {
    game.buyClicks("fullStack", btnFullStack);
  });
  btnDreamJob.addEventListener("click", function () {
    game.buyClicks("dreamJob", btnDreamJob);
  });
  btnCrypto.addEventListener("click", function () {
    game.buyClicks("crypto", btnCrypto);
  });
};

startBtn.addEventListener("click", startGame);

// let game2 = new Game();
// game2.gameLoop();
