//Business Logic
var pizza = {small: 650, medium:850, regular:1200 };
var toppings = {pepperoni:80 ,pineapples:60, cheese:100}
var crust = {italianThin:70, americanHandTossed:60 ,panPizza:50}

$(document).ready(function() {
    $(".billing").submit(function(event) {
        var pizzaName = $("#size").val(); 
        $(".nameEnt").text(pizzaName);
        var pizzaTopping = $("#topping").val();
        $(".nameTop").text(pizzaTopping);
        var pizzaCrust = $("#crust").val(); 
        $(".nameCru").text(pizzaCrust);
        var pizzaTotal = $("#total").val();
        $()
        $(".alert").show();
        event.preventDefault();
    }); 
  });