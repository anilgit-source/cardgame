var cards = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
var cardsRand =[];
var openedCards =[];
var cardsLst ="";
var i=0;
var checkClicked ="";
var secondClick="";
var match=0;
var miss=0;
console.log(checkClicked);

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
            cardsLst+= '<section class="container"><div id="'+i+'" class="card" onclick="flip('+i+','+cardsRand[i]+')"><div class="front"><img src="images/card.png" alt="Card"></div><div class="back">'+cardsRand[i]+'</div></div></section>'
            document.getElementById("cards").innerHTML= cardsLst; 
           
        }
        
    }
    
}
console.log(cardsRand)
displayRanrandomArray(cards);


function flip(id,value){
   
        if(document.getElementById(id).className=='card'){
            openedCards.push(cardsRand[id]);
                for(var j=0; j<openedCards.length; j++){
                    
                   
                    console.log(openedCards);
                    if(openedCards.length==2){
                       // var element=document.getElementsByClassName("card");
                        //element.classList.remove("flipped")
                        //console.log(openedCards[0])
                        //console.log(openedCards[1])
                        if(openedCards[0]==openedCards[1]){
                          alert("Match");
                         var match= document.getElementById("match").innerHTML=match+1;
                         
                          openedCards =[]
                        }else{
                            alert("Not Match");
                            var match= document.getElementById("miss").innerHTML=miss+1
                            
                            openedCards =[]
                        }
                    }
                    // element.classList.remove("flipped");
                }
                if(checkClicked==secondClick){
                    //console.log("current Value--"+checkClicked);
                    //console.log("Previous Value--"+secondClick);
                }else{
                   // console.log(openedCards[0],openedCards[1]);
                    // openedCards[0].classList.remove("flipped");
                    // openedCards[1].classList.remove("flipped");
                    // openedCards = [];
                }
                
            
            //console.log(openCards);
          



            var element = document.getElementById(id);
            element.classList.add("flipped");
        }else if(checkClicked!=null&&secondClick!=null){
            console.log("already Flipped");
        }else{
            console.log("Match Not found");
            var element = document.getElementById(id);
            element.classList.remove("flipped"); 
        }
}       




