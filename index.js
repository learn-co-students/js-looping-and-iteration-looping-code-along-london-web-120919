// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for(i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }

//     retur gifts;
// }

// wrapGifts(gifts);

// function wrapGifts(gifts){
//     let i = 0;
//     while (i < gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         i++;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(array){
   const array1 = []
    for(let i = 0; i < array.length; i++){
        array1.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }

    return array1
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    return console.log(startingNumber);
  }