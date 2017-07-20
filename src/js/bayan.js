$(document).ready(function () {

    $(".bayan__box").click(function () {
        $(".bayan").toggleClass("boom");

        $(".ul-menu").slideToggle(500);
        if ($(".ul-menu").hasClass("show")) {
            $(".ul-menu").removeClass("show")
        } else {
            $(".ul-menu").addClass("show")
        }
    });
});


