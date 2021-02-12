var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

// let ValorIntermedio = dollarToEuro (137);

// let ValorSolicitado = euroToYen (ValorIntermedio);

// otra forma de hacerlo es --->

let ValorSolicitado = euroToYen (dollarToEuro (137));

console.log(ValorSolicitado);
