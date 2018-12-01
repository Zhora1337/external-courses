function Shape(type) {
    this.type = type;
    this.FOUR = 4;
}

Shape.prototype.showPerimetr = function() {
    console.log("Perimetr = " + this.getPerimetr())
}

Shape.prototype.showType = function(){
    console.log("This is a " + this.getType());
}

Shape.prototype.getType = function() {
    return this.type;
}

Shape.prototype.getPerimetr = function() {
    return"Sides are not defined";
}

Shape.prototype.draw = function(){
    console.log(this.type + " is drawn");
}

function Triangle(type,a,b,c) {
    Shape.apply(this, arguments);
    this.a = a;
    this.b = b;
    this.c = c;
}

function Square(type, a) {
    Shape.apply(this, arguments);
    this.a = a; 
}

function Diamond(type, a, firstAngle){
    Shape.apply(this, arguments);
    this.a = a;
    this.firstAngle = firstAngle;
    this.secondAngle = 180 - firstAngle;
}


Diamond.prototype = Object.create(Shape.prototype);
Diamond.prototype.constructor = Diamond;

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;




Triangle.prototype.getPerimetr = function(){
    return this.a + this.b + this.c;
}
Square.prototype.getPerimetr = function(){
    return this.FOUR * this.a;
}
Diamond.prototype.getPerimetr = function(){
    return this.FOUR * this.a;
}
Diamond.prototype.getArea = function(){
    return this.a * (Math.sqrt(this.a*this.a-(this.a*this.a)/4));
}
Diamond.prototype.showArea = function(){
    console.log("Area of " + this.getType() + " = " + this.getArea());
}

Diamond.prototype.showAngles = function(){
    console.log("First angle = " + this.firstAngle + " Second angle = " + this.secondAngle);
}

var triangle = new Triangle("Triangle",3,5,4);

triangle.showType();
triangle.showPerimetr();
triangle.draw();

var square = new Square("Square", 4);

square.showType();
square.showPerimetr();
square.draw();

var diamond = new Diamond("Diamond",5,60);

diamond.showType();
diamond.showAngles();
diamond.showArea();
diamond.showPerimetr();
diamond.draw();


