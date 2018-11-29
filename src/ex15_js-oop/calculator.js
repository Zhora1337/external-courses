function Calculator() {
    this.type = "Simple Calculator";
    this.result = 0;
}

Calculator.prototype.getType = function() {
    console.log(this.type);
}

Calculator.prototype.add = function(operand) {
    this.result += operand;
}

Calculator.prototype.subtract = function(operand) {
    this.result -= operand;
}

Calculator.prototype.multiply = function(operand) {
    this.result *= operand;
}

Calculator.prototype.divide = function(operand) {
    this.result /= operand;
}

Calculator.prototype.getResult = function() {
    console.log(this.result);
}

Calculator.prototype.reset = function() {
    this.result = 0;
}


var calculator = new Calculator;

calculator.getType();
calculator.getResult();
calculator.add(5);
calculator.getResult();
calculator.subtract(3);
calculator.getResult();
calculator.multiply(5);
calculator.getResult();
calculator.divide(2);
calculator.getResult();
calculator.reset();
calculator.getResult();

function EngeneeringCalculator(){
    this.type = "Engeneering Calculator";
    this.result = 0;
}

EngeneeringCalculator.prototype = Object.create(Calculator.prototype);


EngeneeringCalculator.prototype.sqrt = function() {
    this.result = Math.sqrt(this.result);
}

calculator = new EngeneeringCalculator;

calculator.getType();
calculator.getResult();
calculator.add(5);
calculator.getResult();
calculator.subtract(3);
calculator.getResult();
calculator.multiply(8);
calculator.getResult();
calculator.sqrt()
calculator.getResult();
calculator.reset();
calculator.getResult();

function TriganometricCalculator () {
    this.type = "Triganometric Calculator";
    this.result = 0;
}

TriganometricCalculator.prototype = Object.create(Calculator.prototype);

TriganometricCalculator.prototype.getCos = function() {
    console.log (Math.cos(this.result * 180 / Math.PI));
}

TriganometricCalculator.prototype.getSin = function() {
    console.log (Math.sin(this.result * 180 / Math.PI));
}

TriganometricCalculator.prototype.getTan = function() {
    console.log (Math.tan(this.result * 180 / Math.PI));
}

TriganometricCalculator.prototype.getCot = function() {
    console.log (Math.pow(Math.tan(this.result * 180 / Math.PI), -1));
}

calculator = new TriganometricCalculator;

calculator.getType();
calculator.add(5);
calculator.getCos();
calculator.getSin();
calculator.getTan();
calculator.getCot();
calculator.reset();