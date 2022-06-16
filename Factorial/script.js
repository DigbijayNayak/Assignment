function Factorial(){
  var number = document.getElementById("number").value;
  var i, fact;
  fact = 1;
  if(number == ""){
    alert("Please Enter The Number: ");
    return false;
  }else{
    for (i = 1; i <= number; i++) {
      fact = fact * i;    
    }
    document.getElementById("output").innerHTML = `<b>The factorial of ${number} is ${fact} .</b>`;
    return false;
  }  
}