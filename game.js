let canvas;
let context;
let t = 0;
let i = 0;
let model = {
  board: "......./......./......./......./......./....../.......",
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
  return Math.ceil((x-20)/120)-1 
}

document.addEventListener("click", e => {
  console.log(e.x, e.y);
  const [i,j] = [e.x,e.y].map(roundMe);
  if (i < 0 || i > 2) return;
  if (j < 0 || j > 2) return;

  const ix = i + j * 4;
  if (model.board.charAt(ix) != '.') {
    return;
  }
//  console.log(i,j,ix)
  model.board =
    model.board.slice(0,ix) +
    model.next +
    model.board.slice(ix+1,15)

  if (model.next == 'X') {
    model.next = 'O'
  } else if (model.next == 'O') {
    model.next = 'X'
  }
  
  
  
})