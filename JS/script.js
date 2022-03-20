$(document).ready(function () {
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

        class Order {
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


            var newOrder = new Order(pizzaSize, pizzaCrust, pizzaToppings, total, order);

            var newEntry = '<tr><th scope="row">' + newOrder.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newOrder.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newOrder.crust + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newOrder.toppings + '</td><td id="total">' + newOrder.total + '</td></tr>'

            $("#pizza").append(newEntry);
        });

        $(".btn.check-out").click(function () {
            $(".btn.more-pizza").hide();
            $(".btn.check-out").hide();
            $(".more-info").show();
            $("table").hide();
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

            if (location === '') {
                alert("Please Enter Delivery Location!");
            } else {
                $(".more-info h4 span").html(location); {
                    $(".more-info h4").show();
                    $(".location").hide();
                    $("table").show();
                    $(".reset-btn").show();
                }
            }


        });



    });
});

$("location").on("submit", function (e) {
    e.preventDefault();
});

function refreshPage() {
    window.location.reload();
}