$(document).ready(function(){
  var favoriteFlavors = ["chocolate","strawberry","vanilla","bubblegum"];
  favoriteFlavors.forEach(function(favoriteFlavor){
    $("ul").append("<li>" + favoriteFlavor + "</li>")
  })


});