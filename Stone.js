class Stone{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: false,
            restitution:0,
            frition:1,
            density:2
        }
     this.body=Bodies.rectangle(x,y, width, height, options);
     this.width=width; 
     this.hight=height;
     this.image=loadImage("stone.png");
     World.add(world, this.body);
}
display(){
 var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}

}