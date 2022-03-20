$(document).ready(function () {
    $("table").hide();

    $('.btn.order').click(function () {
        var pizzaSize = $(".size option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var pizzaToppings = $(".toppings option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaToppings);
        var order = 1;
        var finalTotal = 0;


        $("table").show();
        $(".pizza-buttons").show();
        $(".btn.order").hide();

        $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
        $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
        $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
        $("#total").html(total);

        class Pizza {
            constructor(size, crust, toppings, total, orderNo) {
                this.size = size;
                this.crust = crust;
                this.toppings = toppings;
                this.total = total;
                this.orderNo = orderNo;
            }
        }


        $('.btn.more-pizza').click(function () {
            var pizzaSize = $(".size option:selected").val();
            var pizzaCrust = $(".crust option:selected").val();
            var pizzaToppings = $(".toppings option:selected").val();
            var total = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaToppings);
            order = order + 1;
            finalTotal = finalTotal + total;


            var newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaToppings, total, order);

            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="total">' + newPizza.total + '</td></tr>'

            $("#pizza").append(newRow);
        });

        $(".btn.check-out").click(function () {
            $(".btn.more-pizza").hide();
            $(".btn.check-out").hide();
            $(".more-info").show();
            $("#store").hide()
            $(".btn.deliver").show();
            $(".btn.pickup").show();
            $(".more-info .location").hide();
            finalTotal = finalTotal + total;

            $(".more-info h3 span").html(finalTotal);
        });

        $(".btn.deliver").click(function () {
            $(".more-info h5").hide();
            $(".btn.deliver").hide();
            $(".btn.pickup").hide();
            $(".more-info .location").show();
            $(".more-info h3 span").html(finalTotal + 300);
        });

        $(".btn.pickup").click(function () {
            $(".more-info h5").hide();
            $(".btn.deliver").hide();
            $(".btn.pickup").hide();
            $("#store").show()
            $(".reset-btn").show();
        });

        $(".btn.dispatch").click(function () {

            var location = $(".more-info .location input").val();
            $(".more-info h4").show();
            $(".more-info h4 span").html(location);
            $(".more-info .location").show();
            $(".reset-btn").show();
        });



    });
});

$("location").on("submit", function (e) {
    e.preventDefault();
});

function refreshPage(){
    window.location.reload();
} 