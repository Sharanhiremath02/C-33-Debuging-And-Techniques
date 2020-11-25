class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    if(this.body.position.y < 360){
      super.display();
     }
     else{
       World.remove(world, this.body);
     }
  }
}