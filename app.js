
function validNumbers(){
var cardNumber = "";
  do{ 
    cardNumber= prompt("Ingrese los números de su tarjeta de crédito a validar");
    if (cardNumber !== ""){
    	isValidCard(cardNumber);
    }else{
    	alert("Ingrese el número de su tarjeta de crédito");
    }   
  }while (cardNumber === "");
}

function isValidCard(cardNumber){
var cardNumberInv=[];
var result = 0;
for (var i=0; i<cardNumber.length; i++){
  cardNumberInv.unshift(parseInt(cardNumber[i]));
}
cardNumberInv.unshift("N");

for (var j=1; j<cardNumberInv.length; j++){
	var resultOdd= 0;
    var resultPair10=0;
    var resultPair=0;
    result=resultPair+resultOdd+resultPair10;
	if(j%2!==0){
		result += cardNumberInv[j];
	}
	else if(j%2===0){
		if(cardNumberInv[j]*2>10){
			(cardNumberInv[j]-10)+1;
			result += cardNumberInv[j];
		}
		else {
			result += (cardNumberInv[j]*2);
		}
	}
}
if(result%10===0){
	document.write("Felicidades, su tarjeta es válida");
}
else {
	document.write("Lo sentimos, su tarjeta no es válida");
}
}
validNumbers();