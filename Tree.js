class Tree{

    constructor(x, y){
        var options = {

            isStatic: true
        }

        this.body = Bodies. rectangle(x, y, 10, 10, options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
        


    }
    display(){
        
        
        image(this.image, this.body.position.x, this.body.position.y, 400, 400);
    }



}