class Box{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'restitution':0.4,
            isStatic:false
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        //console.log(this.body.speed);
        if(this.body.speed<10)
        {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          strokeWeight(2);
          stroke("black");
          fill ("white");
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
        }else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-1;
          tint(255,this.visibility);
          pop();
        }
       
      }
}