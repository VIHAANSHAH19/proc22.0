
class Red {
    constructor(x, y, height,angle) {
      var options = {
      isStatic:true
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width =20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
     //var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill(234,50,0);
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  