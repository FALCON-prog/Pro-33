class mat {
    constructor(x,y){
        var options = {
            'restitution' : 0.7,
            'friction' : 1.2,
            'density' : 1.5,
            isStatic : true,
        }
        this.body = Bodies.circle(x,y,100,options);
        World.add(world,this.body);
    }

     display(){
         push();
         translate(this.body.position.x,this.body.position.y);  
         //fill("orange");
         //ellipse(0,0,100,100);
         pop();
     }
}