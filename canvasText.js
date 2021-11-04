function ironHacker(please, help) {
  let clickForMoney = please + help;

  return clickForMoney;
}

ironHacker();

class Text {
  constructor(xPos, yPos, text, font, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.text = text;
    this.font = font;
    this.color = color;
  }

  writing(ctx) {
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.fillText(this.text, this.xPos, this.yPos);
  }
}

let firstText1 = new Text(10, 100, "function", "16px JetBrains Mono", "purple");
let firstText2 = new Text(
  100,
  100,
  "ironHacker",
  "16px JetBrains Mono",
  "green"
);
let firstText3 = new Text(
  200,
  100,
  "(            ) {",
  "16px JetBrains Mono",
  "yellow"
);
let firstText4 = new Text(
  210,
  100,
  "please, help",
  "16px JetBrains Mono",
  "white"
);
let firstText5 = new Text(
  40,
  122,
  "let                =        +",
  "16px JetBrains Mono",
  "purple"
);
let firstText6 = new Text(
  90,
  122,
  "clickForMoney",
  "16px JetBrains Mono",
  "white"
);
let firstText7 = new Text(
  240,
  122,
  "please   help",
  "16px JetBrains Mono",
  "white"
);
let firstText8 = new Text(40, 170, "return", "16px JetBrains Mono", "purple");
let firstText9 = new Text(
  140,
  170,
  "clickForMoney;",
  "16px JetBrains Mono",
  "white"
);

function ironHacker(please, help) {
  let clickForMoney = please + help;

  return clickForMoney;
}

firstText1.writing(ctx);
firstText2.writing(ctx);
firstText3.writing(ctx);
firstText4.writing(ctx);
firstText5.writing(ctx);
firstText6.writing(ctx);
firstText7.writing(ctx);
firstText8.writing(ctx);
firstText9.writing(ctx);
