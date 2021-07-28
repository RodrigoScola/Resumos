const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "O";
const availablePath = "░";
const characterPath = "*";

var lost = false;
const endGame = (message) => {
  lost = true;
  console.log(message);
};
class Field {
  constructor(field) {
    this.field = field;
    this.playerY = 0;
    this.playerX = 0;
  }
  print() {
    this.field.map((element) => {
      console.log(element);
    });
  }
  inRange() {
    if (
      this.playerX >= 0 &&
      this.playerY >= 0 &&
      this.playerX <= this.field[0].length &&
      this.playerY <= this.field.length
    ) {
      return true;
    }
  }
  move() {
    const direction = prompt(`Where do you want to move to?`);
    switch (direction) {
      case "a":
        this.playerX -= 1;
        break;
      case "d":
        this.playerX += 1;
        break;
      case "w":
        this.playerY -= 1;
        break;
      case "s":
        this.playerY += 1;
        break;
      default:
        console.log("invalid Movement, try again");
        this.move();
        break;
    }
    // move to a tile
    if (this.inRange()) {
      if (this.field[this.playerY][this.playerX] == hat) endGame("You Won!");
      else if (this.field[this.playerY][this.playerX] == hole) {
        endGame("You fell into the hole");
      } else {
        this.field[this.playerY][this.playerX] = characterPath;
      }
    } else {
      endGame("You are out of bounds");
    }
  }
  static generateField(x, y) {
    let newField = [];
    let tempfield = [];
    for (let i = 0; i < y; i++) {
      for (let k = 0; k < x; k++) {
        if (Math.random() * 10 <= 1.75) {
          tempfield[k] = hole;
        } else {
          tempfield[k] = availablePath;
        }
      }
      newField.push([...tempfield]);
    }
    newField[0][0] = characterPath;
    newField[Math.floor(Math.random() * y)][Math.floor(Math.random() * x)] =
      hat;
    return newField;
  }
}
const myField = new Field(Field.generateField(5, 12));
while (!lost) {
  console.log(myField.field);
  myField.move();
}
