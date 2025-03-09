const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;
let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGame");
let resetBtn = document.querySelector("#reset");

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
    count += 1;
    console.log(count);
    if (count == 9) {
      msg.innerText = `No Winner the Game is Draw.`;
      result.setAttribute("class", "output");
    }
  });
});
let checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText + "";
    let pos2 = boxes[pattern[1]].innerText + "";
    let pos3 = boxes[pattern[2]].innerText + "";
    if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
      count = 0;
      disableBtns();
      console.log(pos1);
      showWinner(pos1);
    }
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulations! Player ${winner} is the Winner.`;
  result.setAttribute("class", "output");
};
let disableBtns = () => {
  for (box of boxes) box.disabled = true;
};

let enableBtns = () => {
  count = 0;
  turnX = true;
  msg.innerText = "";
  result.setAttribute("class", "hide");
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetBtn.addEventListener("click", enableBtns);
newGameBtn.addEventListener("click", enableBtns);
