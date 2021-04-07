class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 1
        }
        this.bodyA=bodyA
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            stroke("black")
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}