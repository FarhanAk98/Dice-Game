var P1 = Math.floor(Math.random()*6) + 1;
var P2 = Math.floor(Math.random()*6) + 1;

var src1 = "./images/dice"+P1+".png"
var src2 = "./images/dice"+P2+".png"

document.getElementById("img1").setAttribute("src", src1)
document.getElementById("img2").setAttribute("src", src2)

img = "<img id='flag' src='./images/flag.png'/>"

Heading = ""

if(P1 > P2){
    Heading = img + "Player 1 Wins!"
}
else if(P1 < P2){
    Heading = "Player 2 Wins!" + img
}
else{
    Heading = "Its a Draw!"
}

document.querySelector("h1").innerHTML = Heading