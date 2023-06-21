function calculate() {
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);

    var result = num1 + num2;

    document.getElementById("output").innerText = "Result: " + result;
    
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

function generateRandomNumbers() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);

    document.getElementById("input1").value = num1;
    document.getElementById("input2").value = num2;
}