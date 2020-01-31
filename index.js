// Code your solutions in this file
function writeCards(arrayName, eventName) {
    const cardarr = []
    for (let i = 0; i < arrayName.length; i++ ) {
        cardarr.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`)
    }
    return cardarr;
}

function countDown(posInt) {
    let i = posInt
    while (i >= 0) {
        console.log(i)
        i--
    }
}