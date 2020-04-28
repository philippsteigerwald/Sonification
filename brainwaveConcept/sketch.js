let number = 6;
let coordinates = [
                     [1/3, 1/5],
                     [2/3, 1/5],
                     [1/4, 1/2],
                     [3/4, 1/2],
                     [1/3, 4/5],
                     [2/3, 4/5]
                   ];
let colors = [
                [255, 0, 0],
                [0, 255, 0],
                [0, 0, 255],
                [255, 255, 0],
                [0, 255, 255],
                [255, 0, 255]
              ];
let freqs = [261.626, 258, 391.995, 393, 587.330, 590];

let elektroden = [];
let diameter = 20;

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < number; i++) {
    elektroden[i] = new Elektrode(width * coordinates[i][0], height * coordinates[i][1], diameter, colors[i][0], colors[i][1], colors[i][2], freqs[i]);
    elektroden[i].startSound();
    elektroden[i].slider();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < number; i++) {
    elektroden[i].sliderText();
    elektroden[i].display();

    let inverseDistance = width/2 - dist(elektroden[i].posX, elektroden[i].posY, mouseX, mouseY);
    if (inverseDistance < 0) {inverseDistance = 0}
    let modAmp = map(inverseDistance, 0, width/2, 0, 0.1);
    elektroden[i].soundAlpha.amp(modAmp, 0.1);
    elektroden[i].soundLoBeta.amp(modAmp, 0.1);
    elektroden[i].soundHiBeta.amp(modAmp, 0.1);
    elektroden[i].soundGamma.amp(modAmp, 0.1);
  }
}
