function writeCards(nameArray, eventName) {
    let test = []
	for (let index = 0; index < nameArray.length; index++) {
		console.log(
			`Thank you, ${nameArray[index]}, for the wonderful ${eventName} gift!`
        );
        test.push(
					`Thank you, ${nameArray[index]}, for the wonderful ${eventName} gift!`
				);
    }
    return test;

}


function countDown(number) {
    for (let index = number; index >= 0; index--) {
        console.log(index)
        
        
    }
}