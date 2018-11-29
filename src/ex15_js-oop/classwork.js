function Shape(type) {
    this.type = type;
}

Shape.prototype.getType = function() {
    console.log(this.type);
}

Shape.prototype.getPerimetr = function() {
    console.log("Sides are not defined");
}

Shape.prototype.draw = function(){
    console.log(this.type + " is drawn");
}

function Triangle(a,b,c) {
    this.type = "Triangle";
    this.a = a;
    this.b = b;
    this.c = c;
}

function Square(a) {
    this.type = "Square";
    this.a = a;
}

function Diamond(a, firstAngle){
    this.type = "Diamond";
    this.a = a;
    this.firstAngle = firstAngle;
    this.secondAngle = 180 - firstAngle;
}


Diamond.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.getPerimetr = function(){
    this.perimetr = this.a + this.b + this.c;
    console.log("Perimetr = " + this.perimetr);
}
Square.prototype.getPerimetr = function(){
    this.perimetr = 4 * this.a;
    console.log("Perimetr = " + this.perimetr);
}
Diamond.prototype.getPerimetr = function(){
    this.perimetr = 4 * this.a;
    console.log("Perimetr = " + this.perimetr);
}
Diamond.prototype.getArea = function(){
    this.area = this.a * (Math.sqrt(this.a*this.a-(this.a*this.a)/4));
    console.log("Area = " + this.area);
}
Diamond.prototype.getAngles = function(){
    console.log("First angle = " + this.firstAngle + " Second angle = " + this.secondAngle);
}

var triangle = new Triangle(3,5,4);

triangle.getType();
triangle.getPerimetr();
triangle.draw();

var square = new Square(4);

square.getType();
square.getPerimetr();
square.draw();

var diamond = new Diamond(5,65);

diamond.getType();
diamond.getAngles();
diamond.getArea();
diamond.getPerimetr();
diamond.draw();