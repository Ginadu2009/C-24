class Ferro{
	constructor(x,y){
		var options={
			restitution:0.3,
			friction:2,
			density:40
		}
	// assign options to the rubber ball
		this.body=Bodies.rectangle(x,y,50,60, options)
		this.h=60
		this.w=50
		World.add(world, this.body);


	}
	display()
	{
			var pos=this.body.position;	
			var angle=this.body.angle;	
			push()
			translate(pos.x, pos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
			//draw the ellipse here to display the rubber ball
			rect(0.0,this.w, this.h);
			pop()
	}

}