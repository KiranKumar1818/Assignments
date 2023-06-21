function calculate() {
    // Get the input values
    var amount = parseFloat(document.getElementById("amount").value);
    var persons = parseInt(document.getElementById("persons").value);
  
    document.getElementById("Error").innerHTML = "Enter the input values";
    document.getElementById("Error1").innerHTML = "Enter the input values";
    document.getElementById("Error").style.color = "red";
    document.getElementById("Error1").style.color = "red";
  
  
  //  Get alert msg 
    if (amount<=0) {
      document.getElementById("Error").style.color = "red";
      document.getElementById("Error").innerHTML = "Enter a number greater than 0"
    }
  
    // if (amount >= 1) {
    //   document.getElementById("Error").style.backgroundColor = "green";
    //   document.getElementById("Error").innerHTML = ""
    // }
  
    if (persons<=1) {
      document.getElementById("Error1").style.color = "red";
      document.getElementById("Error1").innerHTML = "Enter a number greater than 0"
    }
  
    // if (persons >= 1) {
    //   document.getElementById("Error1").style.color = "green";
    //   document.getElementById("Error1").innerHTML = ""
    // }
  
    // Calculate the result
    var result = amount / persons;
  
 // Display the result with two decimal points
 document.getElementById("result").textContent = "Result: Rs. " + result.toFixed(2);

 // Clear the input values
 document.getElementById("amount").value = "";
 document.getElementById("persons").value = "";
}  
 