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

  slider() {
    this.sliderAlpha = createSlider(0, 255, random(0, 255));
    this.sliderAlpha.position(this.posX, this.posY + 40);
    this.sliderAlpha.style('width', '60px');

    this.sliderLoBeta = createSlider(0, 255, random(0, 255));
    this.sliderLoBeta.position(this.posX, this.posY + 40 + 20);
    this.sliderLoBeta.style('width', '60px');

    this.sliderHiBeta = createSlider(0, 255, random(0, 255));
    this.sliderHiBeta.position(this.posX, this.posY + 40 + 40);
    this.sliderHiBeta.style('width', '60px');

    this.sliderGamma = createSlider(0, 255, random(0, 255));
    this.sliderGamma.position(this.posX, this.posY + 40 + 60);
    this.sliderGamma.style('width', '60px');
  }

  sliderText() {
    stroke(255);
    strokeWeight(.8);
    text('Alpha', this.sliderAlpha.x - 60, this.sliderAlpha.y + 13);
    text('LoBeta', this.sliderLoBeta.x - 60, this.sliderLoBeta.y + 13);
    text('HiBeta', this.sliderHiBeta.x - 60, this.sliderHiBeta.y + 13);
    text('Gamma', this.sliderGamma.x - 60, this.sliderGamma.y + 13);
  }

  display() {
    this.alpha = 255 - 0.5 * dist(this.posX, this.posY, mouseX, mouseY);
    noFill();
    strokeWeight(2);
    stroke(this.r, this.g, this.b, this.alpha);
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
  }

  startSound() {
    this.soundAlpha = new p5.Oscillator('sine');
    this.soundAlpha.freq(this.freq);
    this.soundAlpha.amp(0.1);
    this.soundAlpha.start();

    this.soundLoBeta = new p5.Oscillator('sine');
    this.soundLoBeta.freq(2 * this.freq);
    this.soundLoBeta.amp(0.1);
    this.soundLoBeta.start();

    this.soundHiBeta = new p5.Oscillator('sine');
    this.soundHiBeta.freq(3 * this.freq);
    this.soundHiBeta.amp(0.1);
    this.soundHiBeta.start();

    this.soundGamma = new p5.Oscillator('sine');
    this.soundGamma.freq(4 * this.freq);
    this.soundGamma.amp(0.1);
    this.soundGamma.start();
  }
}
