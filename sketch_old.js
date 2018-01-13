// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function oldway(){
  var fireworks = [];
  var gravity;


  function setup() {
    // var cnv_old = createCanvas(800, 600);
    // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
    // cnv.position(x, y);
    var cnv_old = createCanvas(800, 600);
    cnv_old.parent('sketch-holder-old');
    colorMode(HSB);
    gravity = createVector(0, 0.15);
    stroke(255);
    strokeWeight(4);
    background(0);
  }

  function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);

    if (random(1) < 0.03) {
      fireworks.push(new OldFirework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();

      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
}

function newway(){
  var fireworks = [];
  var gravity;

  function setup() {
    var cnv = createCanvas(800, 600);
    // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
    // cnv.position(x, y);
    cnv.parent('sketch-holder');

    colorMode(HSB);
    gravity = createVector(0, 0.15);
    stroke(255);
    strokeWeight(4);
    background(0);
  }

  function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);

    if (random(1) < 0.03) {
      fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();

      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
}
