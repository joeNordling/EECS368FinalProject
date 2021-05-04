let canvas;
let context;
let t = 0;
let i = 0;
var next = "red";
var board = [[],[],[],[],[],[],[]];
var win = false;

function checkForWin(){
  console.log(win);
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      // Check Vertically
      try {
        if(board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2]  && board[i][j] == board[i][j+3]){
          return board[i][j];
        }
      } catch (err) {

      }
      
      // Check Horizonally
      try {
        if(board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j]  && board[i][j] == board[i+3][j]){
          return board[i][j];
        }
      } catch (err) {

      }
      // Check Vertically Right
      try {
        if(board[i][j] == board[i+1][j+1] && board[i][j] == board[i+2][j+2]  && board[i][j] == board[i+3][j+3]){
          return board[i][j];
        }
      } catch (err) {

      }

      // Check Vertically Left
      try {
        if(board[i][j] == board[i-1][j+1] && board[i][j] == board[i-2][j+2]  && board[i][j] == board[i-3][j+3]){
          return board[i][j];
        }
      } catch (err) {

      }
    }
  }
  return false;
}


function tick() {
  window.requestAnimationFrame(splat);
}

function splat(n) {
  let d = n - t;
  t = n;

  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "blue";
  context.fill();

  for(let j = 0; j < 6; j++){
    for(let i = 0; i < 7; i++){
      context.beginPath();
      context.arc((70+i*110), (70+j*110), 50, 0, 2 * Math.PI);
      context.stroke();
      context.fillStyle = "white";
      context.fill();
    }
  }
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      context.beginPath();
      context.arc((70+i*110), (70+(5-j)*110), 50, 0, 2 * Math.PI);
      context.stroke();
      context.fillStyle = board[i][j];
      context.fill();
    }
  }

  if(win != false){
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(255, 255, 255, 0.5)";

    context.fill();
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText(win, 350, 300);
    context.fillText("is the winner", 300, 350);
  }

  tick();
}

document.addEventListener("DOMContentLoaded", () => { 
  canvas = document.querySelector("#myCanvas");
  console.log("Got here");
  context = canvas.getContext("2d");
  console.log(context);
  splat();
})

function roundMe(x){ 
  if(31< x && x < 131){
    return 0;
  } else if(139 < x && x < 239){
    return 1;
  } else if(247 < x && x < 347){
    return 2;
  } else if(355 < x && x < 455){
    return 3;
  } else if(463 < x && x < 563){
    return 4;
  } else if(571 < x && x < 671){
    return 5;
  } else if(679 < x && x < 779){
    return 6;
  }
}

document.addEventListener("click", e => {
  
  const i = roundMe(e.x);
  if (board[i] != undefined ) {
    if(board[i].length > 5){
      return ;
    }
  }
  console.log(e.x);
  console.log(i);
  board[i] = board[i].concat([next]);
  console.log(board[i]);
  win = checkForWin(); 

  if (next == "red") {
    next = "yellow";
  } else if (next == "yellow") {
    next = "red";
  } 
})