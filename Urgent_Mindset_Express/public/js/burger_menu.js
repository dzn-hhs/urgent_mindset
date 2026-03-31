$( function(){
var burger = $("#burger-menu")
var nav = $("#main-nav")
burger.on("click", function () {
    burger.toggleClass("open");
    nav.toggleClass("open")
    console.log("Clicked")
  });
  });