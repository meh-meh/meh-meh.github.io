// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function OldParticle(p, x, y, hu, firework) {
  this.pos = p.createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = p.createVector(0, 0);

  if (this.firework) {
    this.vel = p.createVector(0, p.random(-12, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(p.random(2, 10));
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    p.colorMode(p.HSB);

    if (!this.firework) {
      p.strokeWeight(2);
      p.stroke(hu, 255, 255, this.lifespan);
    } else {
      p.strokeWeight(4);
      p.stroke(hu, 255, 255);
    }

    p.point(this.pos.x, this.pos.y);
  }
}
