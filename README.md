# 1S-CifradoCesar
Inicializando función validNumbers que valida si el usuario ingresa numeros y no deja el espacio vacio.
Pide al usuario mediante un prompt que ingrese los numeros de su tarjeta.
Si ingresa los digitos se inicializa la función isValidCard, con los números que él a ingresado.
Si no le pedira nuevamente que ingrese los números de su tarjeta.

Cuando inicializa la función isValidCard se crea un array vacío llamado cardNumberInv. 
Este se va allenar con los numeros que rescate el for que comenzará en 0 e ingresará al array
los números invertidos mediante un unshift, el cuál se asegurará de que sean números mediante
un parseInt.

Al array se le agrega una letra "N", para que el for que valide las posiciones no colapse
tratando de clasificar la posición 0 en par o impar.

El for que válida los números los clasifica: si la posición en la que está un número es impar,
los suma en el resultado resultOdd. Si el resultado es par los multiplica por 2 y comprueba inmediatamente si
esa multiplicacion da como resultado un numero mayor a 10. Si es mayor a 10, le resta 10 para dejar solo la unidad y le suma 1 por el valor en unidad de la decena y lo suma en resultPair10. Si es menos a 10 lo suma en resultPair.

Por ultimo suma todos los result y si el modulo de 19 de ese gran resultado es = 0 retorna en un document.write "Felicidades, su tarjeta es válida", sino retorna "Lo sentimos, su tarjeta no es válida".
