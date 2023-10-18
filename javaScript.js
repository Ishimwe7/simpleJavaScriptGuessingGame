const answer = Math.floor(Math.random() * 10+1);
let guesses=0;
document.getElementById("submit").onclick= function(){
   let guess = document.getElementById("guessValue").value;
   guesses+=1;
   if(guess==answer){
    document.getElementById("ans").value=`Wow you made it! The answer is: ${answer} and you took ${guesses}`;
   }
   else if(guess < answer){
    document.getElementById("ans").value=`Your answer is too small`;
   }
   else{
    document.getElementById("ans").value=`Your answer is too large`;
   }
}