// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

var oldway = function(p){
  var fireworks = [];
  var gravity;


  p.setup = function() {
    // var cnv_old = createCanvas(800, 600);
    // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
    // cnv.position(x, y);
    var cnv_old = p.createCanvas(800, 600);
    cnv_old.parent('sketch-holder-old');
    p.colorMode(p.HSB);
    gravity = p.createVector(0, 0.13);
    p.stroke(255);
    p.strokeWeight(4);
    p.background(0);
  };

  p.draw = function() {
    p.colorMode(p.RGB);
    p.background(0, 0, 0, 25);

    if (p.random(1) < 0.03) {
      fireworks.push(new OldFirework(p, gravity));
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();

      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  };
};

var newway = function(p){
  var fireworks = [];
  var gravity;

  p.setup = function() {
    var cnv = p.createCanvas(800, 600);
    // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
    // cnv.position(x, y);
    cnv.parent('sketch-holder');

    // p.colorMode(HSB);
    gravity = p.createVector(0, 0.15);
    p.stroke(255);
    p.strokeWeight(4);
    p.background(0);
  };

  p.draw = function() {
    p.colorMode(p.RGB);
    p.background(0, 0, 0, 25);

    if (p.random(1) < 0.03) {
      fireworks.push(new Firework(p, gravity));
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();

      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  };
};

var hisp5 = new p5(oldway);
var myp5 = new p5(newway);
