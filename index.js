// Code your solutions in this file
function writeCards(array, occasion){
  let speech = []
  for(let i = 0; i < array.length; i++)
  speech.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
  return speech
};

function countDown(number){
  while(number > -1){
    console.log(number--)
  }
}