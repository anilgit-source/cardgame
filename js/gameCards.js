var cards = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
var cardsRand =[];
var openedCards =[];
var cardsLst ="";
var i=0;
var firstClick ="";
var secondClick="";
var firstClickVal ="";
var secondClickVal="";
var match=0;
var miss=0; 
var attempt=0;


function displayRanrandomArray(cardsPera){
    var cardsLength = cardsPera.length;
    var cardsIndex= Math.floor(Math.random()* cardsLength);
    
    if(cardsLength > 0){
        cardsRand.push(cards[cardsIndex]);
        cards.splice(cardsIndex,1);
        displayRanrandomArray(cardsPera);
    }
    else {
        for (i=0; i<cardsRand.length;i++){
            cardsLst+= '<section class="container"><div id="'+i+'" class="card" onclick="startGame('+i+','+cardsRand[i]+')"><div class="front"></div><div class="back">'+cardsRand[i]+'</div></div></section>'
            document.getElementById("cards").innerHTML= cardsLst;
        }
    }
}
console.log(cardsRand)
displayRanrandomArray(cards);

function startGame(id,value){
    attempt++;
    if(openedCards.length>0){
      var index=  openedCards.findIndex(element => element==id);
        if(index!=-1){
           
        }else{
            cardOperation(id, value);  
        }
    }else{
        cardOperation(id, value);
    }
    
} 
function cardOperation(id, value){
    if(firstClick==""){
        firstClick=String(id);
        firstClickVal=value;
        rotateCards(id);
    }else{
        if(firstClick!=id){
            rotateCards(id);
            secondClick=String(id);
            secondClickVal=value;
            if(firstClickVal==secondClickVal){
                updateMatch();
                openedCards.push(firstClick);
                openedCards.push(secondClick);
                resetClicks();
                if(openedCards.length==cardsRand.length){
                    alert("Game Over");
                    

                }
                
            }else{
               updateMiss();
               setTimeout(function(){
               rotateCards(Number(firstClick));
                rotateCards(Number(secondClick));
                resetClicks();
               },1000);
              
              
            }

        }
    }

}

function updateMiss(){
   miss++; 
   document.getElementById("miss").innerHTML=miss;
}
function updateMatch(){
    match++; 
    document.getElementById("match").innerHTML=match;
 }
 function resetClicks(){
    firstClick="";
    secondClick="";
 }
function rotateCards(id){
    if(document.getElementById(id).className=='card'){
        var element = document.getElementById(id);
        element.classList.add("flipped");
    }else{
     var element = document.getElementById(id);
        element.classList.remove("flipped"); 
    }
}