//Accordion Option
var action = "click";
var speed = "500";

$(document).ready(function () {
    $("li.q").on(action, function () {
        $(this).next()
            // The below line to make the other question hide
            .slideToggle(speed)
            //select all other answers
            .siblings('li.a').slideUp();
        //slideToggle(speed);//this line makes all question can be open with together.
        //Grab the img
        var img = $(this).children('img');
        //Remove rotate class except the active
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate')
    });
});
