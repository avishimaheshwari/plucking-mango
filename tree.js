class Tree{
    constructor(x,y,width,height){
        var options={
        isStatic:true,
        restitution:0,
        friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;  
        this.image=loadImage("Plucking mangoes/tree.png")
    }

    display(){
   var Boypos=this.body.position.x;
   translate(Boypos.x,Boypos.y);
   rectMode(CENTER);
   image(this.image,790,700,-300,-300);
    
    }
}