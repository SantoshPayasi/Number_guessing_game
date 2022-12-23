const input = document.getElementById('number');
const submit = document.querySelector('.check')
const newGame = document.querySelector('.newgame')
let shownumber = document.querySelector('.gussing-num')
let tries = document.querySelector('.value')
let score = document.querySelector('.values')
let hidden_number=Math.floor(Math.random()*100);
let highScore = document.querySelector('#Highscore')
let trys =10
let Score =0
let Highscore = 0;

const newgame=()=>{
    shownumber.innerHTML='?'
    trys=10
    input.disabled=false;
    input.innerHTML=''
    hidden_number=Math.floor(Math.random()*100);
    tries.innerHTML = trys;
    score.innerHTML = Score;
    console.log(hidden_number)
    highScore.innerHTML=Highscore
  }
  const sethigh =( High, Sc)=>{
    if(High==0){
        highScore.innerHTML = Sc
        Highscore=Sc
     } 
     else{
     if(Sc<High){
        highScore.innerHTML = 0
     }
  }
}
newgame();
newGame.addEventListener('click', newgame)
const Check=()=>
{ if(trys>0)
    {
    if(input.value==hidden_number){
        --trys;
        Score=10-trys
        shownumber.innerHTML=hidden_number
        tries.innerHTML = trys;
        score.innerHTML= Score;
        sethigh(Highscore, Score)
        input.disabled=true; 
    }
    else{
       --trys;
       tries.innerHTML = trys;
       if(input.value<hidden_number){
        alert("number is smaller then hidden number")
       }
       else{
        alert("number is higher then hidden number")
       }
    }
    
}
else{
     input.disabled=true;
     sethigh(Highscore, Score)
    }
}

submit.addEventListener('click', Check)
