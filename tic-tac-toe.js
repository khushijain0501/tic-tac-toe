const buttonEle=document.querySelectorAll('.game-space');
const restartEle=document.querySelector('.restart-button');
const resultMsg=document.querySelector('.msg');
var musicplayer= new Audio("music.mp3");
var tingmove=new Audio("ting.mp3");
const musicButton=document.querySelector('.music-button');
const score=document.querySelector('.scorecard');
const newgameButton=document.querySelector('.newgame');
const input1=document.querySelector('.name1');
const input2=document.querySelector('.name2');
const About= document.querySelector('.about-game');
const start=document.querySelector('.start');
const scorecardHead=document.querySelector('.scorecard-head');
const turnmsg=document.querySelector('.turn');
//let value1=input1.value;
//let value2=input2.value;

const winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xturn=true;
let count=0;
let xwon=0;
let owon=0;

musicButton.addEventListener('click',()=>{
    musicplayer.play();
    
});

//disable all buttons
const disableButtons=()=>{
    buttonEle.forEach(element,()=>{
        element.disabled=true;
    });
   
};

//new game
newgameButton.addEventListener('click',()=>{
    let value1=input1.value;
    let value2=input2.value;
    score.innerHTML=`<p class="player1"></p>
    <p class="player2"></p>`;
    About.innerHTML=``;
    scorecardHead.innerHTML=``;
    resultMsg.innerHTML=`Start again.`;
    turnmsg.innerHTML=``;
    xwon=0;
    owon=0;
    buttonEle.forEach((element)=>{
        element.innerText=" ";
        element.disabled=false;
       
    });
})

restartEle.addEventListener('click',()=>{
    
    buttonEle.forEach((element)=>{
        element.innerText=" ";
        element.disabled=false;
        
    });
    resultMsg.innerHTML="";
});

start.addEventListener('click',()=>{
   
    let value1=input1.value;
    let value2=input2.value;
    resultMsg.innerHTML= ``;
   turnmsg.innerHTML=`Start the Game.${value1}'s turn`;
    scorecardHead.innerHTML=`<p>${value1}</p>
    <p>${value2}</p>`;
    about();
});
const about=()=>{
    let value1=input1.value;
    let value2=input2.value;
    About.innerHTML=`<p>${value1} - "X"</p>
    <p>${value2} - "O"</p>`;
   
};
const winCheck=()=>{
    let value1=input1.value;
    let value2=input2.value;
    let boxtxt=document.getElementsByClassName('game-space');
       winningPattern.forEach((i)=>{
        if(buttonEle[i[0]].innerText===buttonEle[i[1]].innerText 
            && buttonEle[i[2]].innerText===buttonEle[i[1]].innerText 
            && buttonEle[i[0]].innerText!=""){
        const winner=buttonEle[i[0]].innerText;
        if(winner==='X'){
            turnmsg.innerHTML=``;
            resultMsg.innerHTML=`Congratulations! ${value1} won`;
            xwon++;
        }
        
        if(winner==='O'){
            turnmsg.innerHTML=``;
            resultMsg.innerHTML=`Congratulations! ${value2} won`;
            owon++;
        }
       

        printScore();
        disableButtons();
       }
        
        
    });
}

const printScore=()=>{
    score.innerHTML=`<p class="player1">${xwon}</p>
    <p class="player2">${owon}</p>`;
    
    
}
const drawCheck=()=>{
   // disableButtons();
   // console.log("draw");
    turnmsg.innerHTML=` `;
    resultMsg.innerHTML=`Draw.`;
    printScore();
}
//on click display
let value1=input1.value;
       let value2=input2.value;

    buttonEle.forEach((element)=>{
      
        element.addEventListener('click',()=>{
        if(xturn){
            xturn=false;
            element.innerHTML="X";
            //console.log(`${value1}`);
            
            turnmsg.innerHTML=`${input2.value} 's turn.`;
            element.disabled=true;
            tingmove.play();
        }
        else{
            xturn=true;
            element.innerHTML="O";
            
            turnmsg.innerHTML=`${input1.value} 's turn.`;
            element.disabled=true;
            tingmove.play();
        }
        winCheck();
        count+=1;
        console.log(count);
       if(count===9){
       drawCheck();
       count=0;
       }
    });
   
    });
   
