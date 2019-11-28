$(document).on("click", ".products .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".products .menu div").removeClass("active");
        $(".products ul li").removeClass("active");

        $(this).addClass("active");
        $(".products ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".nacproductscs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".oroducts ul").height(listItemHeight + "px");
    }
});