let kitten;
var input, button, greeting, cnv, buttonwidth;
var padding = 25;
var cnv;

// function submit(){
//
//   var imageURL = document.getElementById('imgurl').value;
//
// }

function preload() {
  kitten = loadImage("data/kitten.jpg");
}

function setup() {

  cnv = createCanvas(kitten.width, 2*kitten.height);
  cnv.parent('sketch-holder');

  // input = createInput();
  // input.position(cnv.elt.offsetLeft, cnv.elt.offsetTop);
  // input.parent('sketch-holder');
  // button = createButton('submit');
  //
  // input.size(kitten.width - button.width);
  //
  // button.position(input.x + input.width, input.y + (input.height-button.height)/2);
  // button.parent('sketch-holder');
  // button.mousePressed(pressMe);
  //
  // cnv.translate(0,input.height);
  // cnv.dragOver(highlight);
  // cnv.dragLeave(unhighlight);
  cnv.drop(pressMe);

  image(kitten, 0, padding);
  makeDithered(kitten, 1);
  image(kitten, 0, kitten.height + padding);
  // Apply gray filter to the whole canvas
  // filter(GRAY);
}

function imageIndex(img, x, y) {
  return 4 * (x + y * img.width);
}

function getColorAtindex(img, x, y) {
  let idx = imageIndex(img, x, y);
  let pix = img.pixels;
  let red = pix[idx];
  let green = pix[idx + 1];
  let blue = pix[idx + 2];
  let alpha = pix[idx + 3];
  return color(red, green, blue, alpha);
}

function setColorAtIndex(img, x, y, clr) {
  let idx = imageIndex(img, x, y);

  let pix = img.pixels;
  pix[idx] = red(clr);
  pix[idx + 1] = green(clr);
  pix[idx + 2] = blue(clr);
  pix[idx + 3] = alpha(clr);
}

// Finds the closest step for a given value
// The step 0 is always included, so the number of steps
// is actually steps + 1
function closestStep(max, steps, value) {
  return round(steps * value / 255) * floor(255 / steps);
}

function makeDithered(img, steps) {
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let clr = getColorAtindex(img, x, y);
      let oldR = red(clr);
      let oldG = green(clr);
      let oldB = blue(clr);
      let newR = closestStep(255, steps, oldR);
      let newG = closestStep(255, steps, oldG);
      let newB = closestStep(255, steps, oldB);

      let newClr = color(newR, newG, newB);
      setColorAtIndex(img, x, y, newClr);

      let errR = oldR - newR;
      let errG = oldG - newG;
      let errB = oldB - newB;

      distributeError(img, x, y, errR, errG, errB);
    }
  }

  img.updatePixels();
}

function distributeError(img, x, y, errR, errG, errB) {
  addError(img, 7 / 16.0, x + 1, y, errR, errG, errB);
  addError(img, 3 / 16.0, x - 1, y + 1, errR, errG, errB);
  addError(img, 5 / 16.0, x, y + 1, errR, errG, errB);
  addError(img, 1 / 16.0, x + 1, y + 1, errR, errG, errB);
}

function addError(img, factor, x, y, errR, errG, errB) {
  if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
  let clr = getColorAtindex(img, x, y);
  let r = red(clr);
  let g = green(clr);
  let b = blue(clr);
  clr.setRed(r + errR * factor);
  clr.setGreen(g + errG * factor);
  clr.setBlue(b + errB * factor);

  setColorAtIndex(img, x, y, clr);
}

function pressMe(file){
  // kitten = loadImage(file.data);
  kitten = createImg(file.data);
  kitten.hide();

  kitten = loadImage(kitten);

  cnv.clear();
  cnv.elt.width = kitten.width;
  cnv.elt.height = 2*kitten.height;
  cnv.parent('sketch-holder');
  // input.size(kitten.width - button.width);
  // button.position(input.x + input.width, input.y + (input.height-button.height)/2);
  //
  // cnv.translate(0,input.height);

  image(kitten, 0, padding);
  makeDithered(kitten, 1);
  image(kitten, 0, kitten.height + padding);
}

// function highlight(){
//   cnv.parent.style('background-color','#ccc');
//   text('Drop here', width/2, height/4);
// }
// function unhighlight(){
//   background(0,0,0,0);
// }
