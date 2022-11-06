let timeOff;
let orbitOffset;

let timeRate;
let orbitRate;

new p5();

function setup() {
  createCanvas(innerWidth, innerHeight);

  timeOff = 0;
  timeRate = 0.000001;
  orbitOffset = 1000;
  orbitRate = 0.000003;

  background(23);
}

function draw() {
  translate(innerWidth / 2, innerHeight / 2);
  background(0, 5);
  // background(0);

  noFill();

  beginShape();

  aOffset = 0;
  for (let orbit = 0; orbit < 40; orbit++) {
    for (let a = 0; a < TWO_PI; a += radians(10)) {
      const travRadius = 10;

      const xOff = map(cos(a), -1, 1, 0, travRadius);
      const yOff = map(sin(a), -1, 1, 0, travRadius);
      const perlin = noise(xOff + orbit * 100, yOff, timeOff);
      const perlin2 = (noise(xOff + orbit * 100, yOff + 1000, timeOff) * 2) % 1;

      const r = map(perlin, 0, 1, 100, 300);

      const x = r * cos(a + orbitOffset + orbit);
      const y = r * sin(a + orbitOffset + orbit);

      colorMode(HSB);
      stroke(map(perlin2, 0, 1, 0, 360), 255, 255);
      // stroke(255);

      point(x, y);
      colorMode(RGB);

      timeOff += timeRate;
      orbitOffset += orbitRate;
    }
  }
  endShape();
  // noLoop();
}
