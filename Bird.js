class Bird{
    //Declaring all of the properties of box
       constructor(x,y){
              
           var options={
               restitution:0.5,
               density:1.5,
               friction:1.0
           }
   
           //"this" represents something to replace and is replaced with the name
           this.body=Bodies.rectangle(x,y,50,50,options);
           this.height=50;
           this.width=50;
           World.add(myWorld,this.body);
       }
       display(){
   
           var pos=this.body.position;
           var angle=this.body.angle;
            pos.x=mouseX;
            pos.y=mouseY;
            push();
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER);
            strokeWeight(4);
            stroke("green");
            fill("red");
            rect(0,0,this.width,this.height);
            pop();
   
       }
   
   
   
   
   
   
   
   
           
       
       
   
   
   
   
   
   
   
   
   
   
   }