class Stone{

    constructor(x, y){
        var options = {

            isStatic: false,
            resitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies. rectangle(x, y, 10, 10, options);
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
        


    }
    display(){
        
        
        image(this.image, this.body.position.x, this.body.position.y,50, 50);
    }



}