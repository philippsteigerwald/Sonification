class Elektrode{
  constructor(posX, posY, diameter, r, g, b, freq) {
    this.posX = posX;
    this.posY = posY;
    this.diameter = diameter;
    this.r = r;
    this.g = g;
    this.b = b;
    this.freq = freq;
  }

  display() {
    this.alpha = 255 - 0.5 * dist(this.posX, this.posY, mouseX, mouseY);
    noFill();
    strokeWeight(2);
    stroke(this.r, this.g, this.b, this.alpha);
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
  }

  startSound() {
    this.sound = new p5.Oscillator('triangle');
    this.sound.freq(this.freq);
    this.sound.amp(0.1);
    this.sound.start();
  }

  // modSound() {
  //   let modAmp = map(dist(e1.posX, e1.posY, mouseX, mouseY), 0, width, 0.08, 0);
  //   this.sound.amp(modAmp, 0.1);
  // }
}
