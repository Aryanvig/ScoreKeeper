const p1b= document.querySelector('#p1b')
const p2b= document.querySelector('#p2b')
const reset= document.querySelector('#reset')
const p1= document.querySelector('#p1')
const p2= document.querySelector('#p2')
const scoreSelect= document.querySelector('#playTill')
let p1Score=0
let p2Score=0
let winningScore=7
let gameOver= false;
 
p1b.addEventListener('click',function(){
    if (!gameOver){
        p1Score+=1
        if(p1Score===winningScore){
            gameOver=true;
            p1.classList.add('winner')
            p2.classList.add('loser')
           }
        p1.textContent=p1Score
    }
})
p2b.addEventListener('click',function(){
    if (!gameOver){
        p2Score+=1
        if(p2Score===winningScore){
            gameOver=true;
            p2.classList.add('winner')
            p1.classList.add('loser')
           }
        p2.textContent=p2Score
    }
})
scoreSelect.addEventListener('change',function(){
    winningScore= parseInt(this.value)
    resetScore();
})
reset.addEventListener('click', resetScore)

function resetScore(){
    gameOver=false;
    p1Score=0
    p2Score=0
    p1.textContent=0;
    p2.textContent=0;
    p1.classList.remove('winner', 'loser')
    p2.classList.remove('winner', 'loser')

}