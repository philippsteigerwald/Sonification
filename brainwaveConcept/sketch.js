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
let freqs = [1220, 1223, 880, 874, 438, 442];

let elektroden = [];
let diameter = 20;

function setup() {
  fullscreen(true);
  createCanvas(1280, 720);
  for (let i = 0; i < number; i++) {
    elektroden[i] = new Elektrode(width * coordinates[i][0], height * coordinates[i][1], diameter, colors[i][0], colors[i][1], colors[i][2], freqs[i]);
    elektroden[i].startSound();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < number; i++) {
    elektroden[i].display();
    let modAmp = map(dist(elektroden[i].posX, elektroden[i].posY, mouseX, mouseY), 0, width, 0.008, 0);
    elektroden[i].sound.amp(modAmp, 0.1);
  }
}
