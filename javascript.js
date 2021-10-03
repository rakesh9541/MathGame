var play=0;
var score;
var op;
var timeremaining;
document.getElementById("op1").onclick=function(){
    op = '+';
    document.getElementById("operator__main").style.display="none";
    document.getElementById("main__container").style.display="block";
}
document.getElementById("op2").onclick=function(){
    op = '-';
    document.getElementById("operator__main").style.display="none";
    document.getElementById("main__container").style.display="block";
}
document.getElementById("op3").onclick=function(){
    op = '*';
    document.getElementById("operator__main").style.display="none";
    document.getElementById("main__container").style.display="block";
}
document.getElementById("op4").onclick=function(){
    op = '/';
    document.getElementById("operator__main").style.display="none";
    document.getElementById("main__container").style.display="block";
}

document.getElementById("start__restart").onclick=function(){
     document.getElementById("start__game").style.display="none";
      if(play=0)
      {
         location.reload();
      }
      else{
          document.getElementById("game__over").style.display="none";
          document.getElementById("correct").style.display="none";
          document.getElementById("wrong").style.display="none";
          score=0;
          document.getElementById("start__restart").innerHTML="Restart";
          document.getElementById("score").innerHTML=score;
          play=1;
          generateQ();
      }
}

var n;
function generateQ(){
    var x = Math.floor(Math.random()*100);
    var y = Math.floor(Math.random()*100);
    if(op=='+')
    {correctans=x+y;
        document.getElementById("question__box").innerHTML=x+ '+'+y;}
    if(op=='-')
    {correctans=x-y;
        document.getElementById("question__box").innerHTML=x+ '-'+y;}
    if(op=='*')
    {
        x=Math.floor(Math.random()*20);
        y=Math.floor(Math.random()*20);
        correctans=x*y;
        document.getElementById("question__box").innerHTML=x+ '*'+y;}
    if(op=='/')
    {  if(x%y!=0)
        {
            while(x%y!=0)
            {x=Math.floor(Math.random()*100);
             y=Math.floor(Math.random()*100);}
        }
        correctans=x/y;
        document.getElementById("question__box").innerHTML=x+'/'+y;}
    var z = Math.round(Math.random()*4);
    while(z==0)
    {
        z=Math.round(Math.random()*4);
    }
    
    for(var i=1;i<=4;i++)
    {
        if(i==z)
        {document.getElementById("option"+z).innerHTML=correctans;
        n=correctans;
        }
        else
        {
            var r=Math.floor(Math.random()*100);
            while(r==correctans)
            var r=Math.floor(Math.random()*100);
            document.getElementById("option"+i).innerHTML=r;
        }
    
        }
      selectAns();
}

function selectAns(){
    for(var i=1;i<=4;i++){
        document.getElementById("option"+i).onclick=function(){
            if(this.innerHTML==n)
            {
              score++;
              document.getElementById("score").innerHTML=score;
              document.getElementById("wrong").style.display="none";
              document.getElementById("correct").style.display="block";
              generateQ();
            }
            else{
                document.getElementById("correct").style.display="none";
                    document.getElementById("wrong").style.display="block";
                    document.getElementById("game__over").style.display="block";
                    document.getElementById("your__score").innerHTML+=score;
                document.getElementById("start__restart").innerHTML="Select your operator";
                document.getElementById("start__restart").style.marginLeft = "260px";
                document.getElementById("start__restart").onclick=function(){
                    location.reload();
                }
            }
        }
    }
}
