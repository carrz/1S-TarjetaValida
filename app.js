
function validNumbers() {
	var cardNumber = '';
	do {
		cardNumber = prompt('Ingrese los números de su tarjeta de crédito a validar');
		if (cardNumber !== '') {
			isValidCard(cardNumber);
		} else {
			alert('Ingrese el número de su tarjeta de crédito');
		}
	} while (cardNumber === '');
}

function isValidCard(cardNumber) {
	var cardNumberInv = [];
	var result = 0;
	for (var i = 0; i < cardNumber.length; i++) {
		cardNumberInv.unshift(parseInt(cardNumber[i]));
	}

	for (var j = 0; j < cardNumberInv.length; j++) {
		if (j % 2 === 0) {
			result += cardNumberInv[j];
		}	else {
			if (cardNumberInv[j] * 2 > 10) {
				result += (cardNumberInv[j] * 2 - 10) + 1;
			}	else {
				result += (cardNumberInv[j] * 2);
			}
		}
	}
	if (result % 10 === 0) {
		alert('Felicidades, su tarjeta es válida');
	} else {
		alert('Lo sentimos, su tarjeta no es válida');
	}
}
validNumbers();