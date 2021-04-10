/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // Put setup code here
}

function draw() {
  // Put dr
  var m;
  for (m = 1; m < 80; m++) {
    push();
    boxspray();
    pop();
  }
  //
}
function boxspray() {
  noStroke();
  //stroke(255);
  var i;
  var j;
  var hspace = 1.1;
  var l = 0;
  var col = 0;
  var sqrsz = 30;
  function rand() {
    return Math.random() * 0.05;
  }
  function rand2() {
    return Math.random() * 128;
  }
  for (j = 1; j < 19; j++) {
    push();
    for (i = 1; i < 29; i++) {
      fill(255 - col / rand2(), 192 - col / rand2(), 0 + col / rand2(), 8);
      rect(sqrsz, sqrsz, sqrsz, sqrsz);
      translate(sqrsz * hspace, 0);
      col = col + 16;
      l = sqrsz * hspace + l;
      hspace = hspace + rand();
      //k = k + Math.random();
    }
    pop();
    translate(0, sqrsz + 2);
    hspace = 1.1;
    l = 0;
  }
}

//This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
