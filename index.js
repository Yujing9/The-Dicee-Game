var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png") ;

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "Player1 Wins!";
}else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerText = "Player2 Wins!";
}else {
    document.querySelector("h1").innerText = "Draw!";
      }
