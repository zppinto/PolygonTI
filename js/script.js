
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isOdd(num) {
  return num % 2;
}

var array_pares = [];
var array_impares = [];
var array = [];
for(var i=0; i<10; i++){
	val = getRandomInt(1,50)
	if(isOdd(val)){
		array_impares.push(val);
	}
	else{
		array_pares.push(val);
	}
}

for(var i=0; i<array_pares.length; i++){
  $('<li>'+array_pares[i]+'</li>').appendTo('.pares ul');
}

for(var i=0; i<array_impares.length; i++){
  $('<li>'+array_impares[i]+'</li>').appendTo('.impares ul');
}
