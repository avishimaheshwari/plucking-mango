class STONE{
    constructor(x,y,width,height){
        var options={
        isStatic:false,
        restitution:0,
        friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;  
        this.image=loadImage("Plucking mangoes/stone.png")
    }

    display(){
   var Boypos=this.body.position.x;
   translate(Boypos.x,Boypos.y);
   rectMode(CENTER);
   image(this.image,80,660,-30,-30);
    
    }
}