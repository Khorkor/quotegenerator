$(document).ready(function(){
  var randomQ,randomN,randomA;
  function QuoteMachine(){
    
    var quotes = ["Help me, Obi-Wan Kenobi. You’re my only hope.","I find your lack of faith disturbing.","The Force will be with you. Always.","Never tell me the odds!","Do. Or do not. There is no try."];
    var author =["Leia Organa","Darth Vader","Obi-Wan Kenobi","Han Solo","Yoda"];
    
     randomN = Math.floor((Math.random()*quotes.length));
     randomQ = quotes[randomN];
    randomA = author[randomN];
    
    $(".quote").text(randomQ);
    $(".author").text(randomA);
  }
    $("#qbut").on("click", function(){
      QuoteMachine();
      
    });
  $('#tweet').on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQ + "-" + randomA);
  });
});