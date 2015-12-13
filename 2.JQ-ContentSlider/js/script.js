$(document).ready(function () {
    //Set Options
    var speed = 500; //transition speed
    var autoswitch = true; //auto slider option
    var autoswitch_speed = 4000; //auto slider speed

    //Add initial active class
    $(".slide").first().addClass("active");

    //Hide all slides
    $(".slide").hide();

    //Show first slide
    $(".active").show();

    //Switch to next slide function
    function nextSlide() {
        $(".active").removeClass("active").addClass("oldActive");
        if ($(".oldActive").is(":last-child")) {
            $(".slide").first().addClass("active");
        } else {
            $(".oldActive").next().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }

    //Switch to previous slide function
    function prevSlide() {
        $(".active").removeClass("active").addClass("oldActive");
        if ($(".oldActive").is(":first-child")) {
            $(".slide").last().addClass("active");
        } else {
            $(".oldActive").prev().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }

    //Next Slider Handdler
    $("#next").on('click', nextSlide);

    //Previous Slider Handdler
    $("#prev").on('click', prevSlide);

    //Auto Slider Handeler
    if (autoswitch == true) {
        setInterval(nextSlide, autoswitch_speed);
    }
});
