var favoriteFlavors = ["chocolate","strawberry","vanilla","bubblegum"];


$(document).ready(function(){
  
  for(var i = 0; i < favoriteFlavors.length; i++){
    $("ul").append("<li>" + favoriteFlavors[i] + "</li>")
  }
    
  


});