console.log("CONNECT!");

//Check off event when done
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Delete event when X is clicked
$("ul").on("click", "li span",function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Add new events when entered
$("input[type=text]").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append('<li><span><i class="fa fa-trash"></i></span> '+ todoText +'</li>');
  }
});

//Toggling form on click
$(".fa-plus").on("click", function(){
  $("input[type='text']").slideToggle();
});
