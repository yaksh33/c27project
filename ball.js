class Ball {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=constraint.create.create(options)
        World.add(world,this.rope)
    }
    Display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWieght(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.Y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}