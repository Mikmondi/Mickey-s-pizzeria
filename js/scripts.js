//Business Logic
var small = 650;
var medium = 850;
var large = 1200;
function Pizza(small,medium,regular){
    this.small = 650;
    this.medium = 850;
    this.large = 1200;
}
function Toppings(pepperoni,pineapples,cheese){
    this.pepperoni = 80;
    this.pineapples = 60;
    this.cheese = 100;
}
function Crust(italianThin,americanHandTossed,panPizza){
    this.italianThin = 70;
    this.americanHandTossed = 60;
    this.panPizza = 50;
}

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