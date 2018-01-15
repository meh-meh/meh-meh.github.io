
var clock = function(p){

  p.setup = function(){
    var cnv = p.createCanvas(600, 600);
    cnv.parent('sketch-holder');
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB);
  };

  p.draw = function(){
    p.clear();
    p.background(0,0,0,0);
    p.translate(300, 300);
    p.rotate(-90);

    let h = p.hour();
    let m = p.minute();
    let s = p.second();
    let mil = p.millis();

    let hourangle = p.map(h % 12, 0, 12, 0, 360);
    let minuteangle = p.map(m, 0, 60, 0, 360);
    let secondangle = p.map(s, 0, 60, 0, 360);
    let milsize = p.map(mil % 1000, 0, 1000, 0, 420)

    p.noFill();
    p.strokeWeight(18);
    p.stroke(0, 0, 25, 2);
    p.arc(0, 0, 500, 500, 0, hourangle);
    p.strokeWeight(16);
    p.stroke(356, 73, 79);
    p.noFill();
    p.arc(0, 0, 500, 500, 0, hourangle);

    p.strokeWeight(10);
    p.stroke(0, 0, 25, 2);
    p.arc(0, 0, 465, 465, 0, minuteangle);
    p.strokeWeight(8);
    p.stroke(85, 74, 52);
    p.arc(0, 0, 465, 465, 0, minuteangle);

    p.strokeWeight(6);
    p.stroke(0, 0, 25, 2);
    p.arc(0, 0, 440, 440, 0, secondangle);
    p.strokeWeight(4);
    p.stroke(215, 79, 71);
    p.arc(0, 0, 440, 440, 0, secondangle);

    p.strokeWeight(6);
    p.stroke(0, 0, 25, 2);
    p.ellipse(0, 0, milsize, milsize);
    p.strokeWeight(4);
    p.stroke(215, 79, 71);
    p.ellipse(0, 0, milsize, milsize);
  };
}

var myp5 = new p5(clock);
