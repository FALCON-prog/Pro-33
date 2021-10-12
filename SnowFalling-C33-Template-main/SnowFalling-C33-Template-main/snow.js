class Snow {
    constructor(x,y){
        var options = {
            'restitution' : 0.7,
            'friction' : 1.2,
            'density' : 1.5
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }

     display(){
         push();
         translate(this.body.position.x,this.body.position.y);  
         fill("white");
         ellipse(0,0,20,20);
         pop();
     }
}