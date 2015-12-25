$(function () {
    var selectedCircle;
    //Hover Handler
    $(".rating-circle").hover(function () {
        $("#rating-container").children().removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-hover');
    });

    $(".rating-circle").mouseleave(function () {
        $(this).removeClass('rating-hover');
    });

    //Click Handler
    $(".rating-circle").click(function () {
        selectedCircle = $(this);
        $("#rating-container").trigger("mouseleave");
    });

    $("#rating-container").mouseleave(function () {
        $("#rating-container").children().removeClass('rating-hover');
        $(selectedCircle).prevAll().andSelf().addClass('rating-chosen');
    });
});
