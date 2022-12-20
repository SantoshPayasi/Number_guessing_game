const input = document.getElementById('number');
const submit = document.querySelector('.check')
const newGame = document.querySelector('.newgame')
let tries = document.querySelector('.value')
let score = document.querySelector('.values')
let hidden_number=Math.floor(Math.random()*100);
let highScore = document.getElementById('Highscore')
let trys =20
let Score =0
let Highscore = 0;
const newgame=()=>{
    hidden_number=Math.floor(Math.random()*100);
    tries.innerHTML = trys ;
    score.innerHTML = Score;
  }
newgame();
newGame.addEventListener('click', newgame)
const Check=()=>
{ if(trys!=0)
    {
    if(input.value===hidden_number){
        score = tries
    }
    else{
       trys--;
       tries.innerHTML = trys;
    }
}
else{
if(score<Highscore){
    highScore.innerHTML = score
}
}
}
submit.addEventListener('click', Check)
