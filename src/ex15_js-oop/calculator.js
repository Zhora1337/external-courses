function Calculator(type) {
    this.type = type;
    this.result = 0;
}


Calculator.prototype.showType = function(){
    console.log("This is a " + this.getType());
}

Calculator.prototype.showResult = function() {
    console.log("Result = " + this.getResult());
}

Calculator.prototype.getType = function() {
    return this.type;
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
    return this.result;
}

Calculator.prototype.reset = function() {
    this.result = 0;
}


var calculator = new Calculator("Simple Calculator");

calculator.showType();
calculator.showResult();
calculator.add(5);
calculator.showResult();
calculator.subtract(3);
calculator.showResult();
calculator.multiply(5);
calculator.showResult();
calculator.divide(2);
calculator.showResult();
calculator.reset();
calculator.showResult();

function EngeneeringCalculator(type, result){
    Calculator.apply(this, arguments);
}

EngeneeringCalculator.prototype = Object.create(Calculator.prototype);
EngeneeringCalculator.prototype.constructor = EngeneeringCalculator;


EngeneeringCalculator.prototype.sqrt = function() {
    this.result = Math.sqrt(this.result);
}

calculator = new EngeneeringCalculator("Engeneering Calculator", 0);

calculator.showType();
calculator.showResult();
calculator.add(5);
calculator.getResult();
calculator.subtract(3);
calculator.showResult();
calculator.multiply(8);
calculator.showResult();
calculator.sqrt()
calculator.showResult();
calculator.reset();
calculator.showResult();

function TriganometricCalculator () {
    Calculator.apply(this, arguments);
}

TriganometricCalculator.prototype = Object.create(Calculator.prototype);
TriganometricCalculator.prototype.constructor = TriganometricCalculator;

TriganometricCalculator.prototype.getCos = function() {
    return Math.cos(this.result * 180 / Math.PI);
}

TriganometricCalculator.prototype.getSin = function() {
    return Math.sin(this.result * 180 / Math.PI);
}

TriganometricCalculator.prototype.getTan = function() {
    return Math.tan(this.result * 180 / Math.PI);
}

TriganometricCalculator.prototype.getCot = function() {
    return Math.pow(Math.tan(this.result * 180 / Math.PI), -1);
}

calculator = new TriganometricCalculator("Triganometric Calculator", 0);

calculator.showType();
calculator.add(5);
console.log("cos = " + calculator.getCos());
console.log("sin = " + calculator.getSin());
console.log("tan = " + calculator.getTan());
console.log("ctg = " + calculator.getCot());
calculator.reset();