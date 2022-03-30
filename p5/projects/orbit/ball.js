let G  = 100;
let dt = 0.1;

class Ball {
  constructor(_x, _y, _x_t, _y_t, _m) {
    this.x   = _x;
    this.y   = _y;
    this.x_t = _x_t;
    this.y_t = _y_t;
    this.m   = _m;
    this.F_m   = [0,0]
  }

  calc_all_forces(all_balls) {
    let f;
    for (let i = 0; i < all_balls.length; i++) {
      console.log(i);
      if (all_balls[i] === this) {
        continue;
      }
      f = this.calc_force(all_balls[i]);
      this.F_m[0] += f[0];
      this.F_m[1] += f[1];
    }
    this.F_m = [this.F_m[0]/this.m, this.F_m[1]/this.m];
    console.log(this.F_m);
  }


  update(all_balls) {
    this.update_u();
    this.update_v();
    stroke(255);
    fill(0);
    circle(this.x,this.y,10);
  }

  update_u() {
    this.x = this.x + dt*this.x_t + Math.pow(dt,2)/2*this.F_m[0];
    this.y = this.y + dt*this.y_t + Math.pow(dt,2)/2*this.F_m[1];
  }

  update_v() {
    this.x_t = this.x_t + dt*this.F_m[0];
    this.y_t = this.y_t + dt*this.F_m[1];
  }

  calc_force(ball_b) {
    let r    = this.radius(ball_b);
    let dist = Math.pow(Math.pow(r[0],2) + Math.pow(r[1],2), 0.5);
    let temp = G*this.m*ball_b.m/Math.pow(dist,3);
    return [r[0]*temp,r[1]*temp];
  }

  radius(ball_b) {
    return [ball_b.x-this.x,ball_b.y-this.y];
  }
}
