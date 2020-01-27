// Code your solutions in this file
let array = [];
function writeCards(names) {
	for (let index = 0; index < names.length; index++) {
		array.push(`Thank you, ${names[index]}, for the wonderful surprise gift!`);
	}
	return array;
}

function countDown(number) {
	for (let index = number; index >= 0; index--) {
		console.log(index);
	}
}
