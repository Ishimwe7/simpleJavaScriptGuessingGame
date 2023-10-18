const answer = Math.floor(Math.random() * 10+1);
let guesses=0;
document.getElementById("submit").onclick = function(){
   let guess = document.getElementById("guessValue").value;
   if(guess!=0){
    guesses+=1;
     if(guess==answer){
        document.getElementById("ans").innerHTML=`Hat's off! The answer is: ${answer} and you took ${guesses} guesses`;
        document.getElementById("wrong").innerHTML="";
     }
    else if(guess < answer){
       document.getElementById("wrong").innerHTML="Your answer is too small! Try again!";
       document.getElementById("ans").innerHTML="";
    }
    else{
       document.getElementById("wrong").innerHTML="Your answer is too large! Try again!";
       document.getElementById("ans").innerHTML="";
   }
}
else{
    document.getElementById("wrong").innerHTML="Ooops! No guess made!";
    document.getElementById("ans").innerHTML="";
}
}