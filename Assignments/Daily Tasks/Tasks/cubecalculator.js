function calculation(){

    var number1 = parseInt(document.getElementById('inputText1').value);
    var number2 = parseInt(document.getElementById('inputText2').value);
    
    var operator = document.getElementById('operands').value;
    // console.log(n1+n2);
    
    if(operator === '+'){
        document.getElementById('result').value = `${number1+number2}`;
    }
    if(operator === '-'){
        document.getElementById('result').value = `${number1-number2}`;
    }
    if(operator === '*'){
        document.getElementById('result').value = `${number1*number2}`;
    }
    if(operator === '/'){
        document.getElementById('result').value = `${number1/number2}`;
    }
    
    
    }
    function cubecal(){
        var inputval = document.getElementById('numinput').value;
        var cubevalue = inputval*inputval*inputval;
        document.getElementById('numoutput').value = cubevalue.toFixed(2);
    }