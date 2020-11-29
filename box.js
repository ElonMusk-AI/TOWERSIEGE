class Box {
    constructor(x, y) {
      var options = {
          restitution:0.05,
          friction:1,
          density:1
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill(216, 156, 167);
      rect(pos.x, pos.y, 40, 50);
      pop();
    }
  };