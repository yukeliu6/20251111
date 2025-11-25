class doubleBall {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;

    this.xDir = random(-1, 1);
    this.yDir = random(-1, 1);

    // default color
    this.r = 242;
    this.g = 193;
    this.b = 58;

    this.d = 40;
  }

  display(r, g, b, d) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.d = d;

    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.d);

    fill(this.r - 30, this.g - 50, this.b + 10);
    circle(this.x + 30, this.y, this.d);

    circle(this.x + 20, this.y, this.d);
  }

  update(speed) {
    this.x += this.xDir * speed;
    this.y += this.yDir * speed;
  }

  keepInCanvas() {
    if (this.x > width || this.x < 0) {
      this.xDir *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yDir *= -1;
    }
  }
}
