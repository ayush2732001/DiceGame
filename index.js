var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6)+1);

var x=document.getElementsByClassName('img1')[0];
var y=document.getElementsByClassName('img2')[0];

x.src="images/dice"+randomNumber1+".png";
y.src="images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";

}
