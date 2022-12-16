
let scoreH = document.getElementById("scoreH-el")
 let scoreG=document.getElementById("scoreG-el")
 let home=0;
 let guest=0;
 function activeClass(){
    if(home > guest){
        scoreH.classList.add("score-active")
        scoreG.classList.remove("score-active")
    }
    else if(home == guest) {
        scoreH.classList.remove("score-active")
        scoreG.classList.remove("score-active")
    }
    else{
        scoreH.classList.remove("score-active")
        scoreG.classList.add("score-active")
    }
 }
function increaseH(score) {
   home += score 
    scoreH.textContent = home;
    activeClass()
     }
     
function increaseG(score) {
    guest += score 
    scoreG.textContent = guest;
    activeClass()
}

function newGame() {
    home = 0
    scoreH.textContent = 0
    guest = 0
    scoreG.textContent = 0
}
