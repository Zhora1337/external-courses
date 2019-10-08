var Calculator = (function() {
    var result = 0;
    var _getResult = function() {
       console.log(result);
    }
    var _add = function(operand){
        if (arguments.length=== 0){
            return;
        }
        result+=operand;
    }
    var _subtract = function(operand){
        if (arguments.length=== 0){
            return;
        }
        result-=operand;
    }
    var _multiply = function(operand){
        if (arguments.length=== 0){
            return;
        }
        result*=operand;
    }
    var _divide = function(operand){
        if (arguments.length=== 0){
            return;
        }
        result/=operand;
    }
    var _reset = function(){
        result = 0;
    }
    return {
        getResult: function() {
           _getResult(result);
           return function(){
               _getResult(result);
           }
        },
        add: function(operand){
            _add(operand,result);
            return function(){
                _add(operand,result);
            }
        },
        subtract:function(operand){
            _subtract(operand,result);
            return function(){
                _subtract(operand,result);
            }
        },
        multiply:function(operand){
            _multiply(operand,result);
            return function(){
                _multiply(operand,result);
            }
        },
        divide:function(operand){
            _divide(operand,result);
            return function(){
                _divide(operand,result);
            }
        },
        reset:function(){
            _reset(result);
        }
    }
})();

Calculator.getResult();
Calculator.add(2);
Calculator.getResult();
Calculator.subtract(-1)();
Calculator.getResult();
Calculator.multiply(6)();
Calculator.getResult();
Calculator.divide(3);
Calculator.getResult();
Calculator.reset();
Calculator.getResult();