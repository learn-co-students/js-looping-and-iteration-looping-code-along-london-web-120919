// Code your solutions in this file


function writeCards( names, occasion ) {
    let thankYouCards = []
    for ( let i = 0; i < names.length; i++ ) {
      thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${occasion} gift!` )
    }
    return thankYouCards
  }


  function countDown (startingNumber) {
      while (startingNumber > 0) {
          console.log ( startingNumber );
          startingNumber -= 1;
      }
      console.log ( startingNumber );
  }

