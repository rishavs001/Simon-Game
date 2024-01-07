

let gameSeqs=[];
let userSeqs=[];
let selected= false;
let levell=0;
let h2=document.querySelector("h2");
let buttons=["red","green","yellow","blue"];

document.addEventListener("keypress", function(){
    if(selected===false){
        console.log("Key was pressed");
        selected=true;
        levelIncrement();
    }
   
});

   let  allBtns=document.querySelectorAll(".btn");
    // if(gameSeqs.length!=0){
    for(btn of allBtns){
    btn.addEventListener("click",function(){
     btn=this;
    userFlashBtn(btn);
    userColor=btn.getAttribute("id");
    userSeqs.push('.'+userColor);
    // console.log("User Sequence: ");
    //  console.log(userSeqs);
      checkAns(userSeqs.length-1);                 
} );
} 


function levelIncrement(){
    userSeqs=[];
    
    levell++;
    h2.innerText='level '+levell;
    randomColor='.'+buttons[Math.floor(Math.random()*3)];
    gameSeqs.push(randomColor);
    randomBtn=document.querySelector(randomColor);
    flash_btn(randomBtn ); 
    console.log("Level "+ levell);
    console.log(gameSeqs);
    console.log(userSeqs);
  
}


function flash_btn(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },300);
   
}
function userFlashBtn(btn){
    btn.classList.add("userFlash");
        setTimeout(function(){
        btn.classList.remove("userFlash");
        },300); 
}


function checkAns(idx){
   
        if(gameSeqs[idx]===userSeqs[idx]){
            if(userSeqs.length===gameSeqs.length){
                setTimeout(levelIncrement(),1000);
             }
            }
            else{
            h2.innerHTML="<b>Game Over!! Your Score was "+levell+" <br>Press any key to restart</b>";
            console.log("Game Over!!");
            // console.log(userSeqs);
            reset();
        }
    
}
function reset (){
    gameSeqs=[];
    userSeqs=[];

    selected= false;
    levell=0;
}
