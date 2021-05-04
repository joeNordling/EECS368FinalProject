let canvas;
let context;
let t = 0;
let i = 0;
var next = "red";
var board = [[],[],[],[],[],[],[]];


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
      context.arc((70+i*110), (70+j*110), 50, 0, 2 * Math.PI);
      context.stroke();
      context.fillStyle = board[i][j];
      context.fill();
    }
  }
  /*
  context.font = "28pt Calibri"
  context.fillStyle = "blue";  

  for(let i = 0; i <= 2; i++) {
    for(let j = 0; j <= 2; j++) {
      let me = model.board.charAt(i + j * 4);
      if (me != '.') {
	context.fillText(me, 50 + i * 120, 50 + j * 120);
      }
    }
  }
  context.font = "20pt Calibri"
  context.fillStyle = "green";

  context.fillText(JSON.stringify(model), 10, 350);
  */
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
  if(87 < x && x < 184){
    return 0;
  } else if(197 < x && x < 293){
    return 1;
  } else if(306 < x && x < 402){
    return 2;
  } else if(416 < x && x < 512){
    return 3;
  } else if(525 < x && x < 621){
    return 4;
  } else if(635 < x && x < 735){
    return 5;
  } else if(746 < x && x < 842){
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
  console.log(i);
  board[i] = board[i].concat([next]);
  console.log(board[i]);
  if (next == "red") {
    next = "yellow";
  } else if (next == "yellow") {
    next = "red";
  }
  
  
  
})