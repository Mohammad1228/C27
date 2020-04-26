class Chain{
constructor(Body1, Body2){
    var option = {
        bodyA:Body1, 
        bodyB:Body2,
        stiffness:0.04,
        length:10
    }
   this.Chain = Matter.Constraint.create(option);
   World.add(world,this.Chain)
}
display(){
    strokeWeight(5)
    line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)



}




    
}
