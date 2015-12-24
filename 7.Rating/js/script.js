$(function () {
    $('.rating-circle').click(function () {
        $(this).prevAll().andSelf().addClass('rating-chosen');
        $(this).nextAll().removeClass('rating-chosen');
    });
    $('.rating-circle').hover(function () {
        $(this).prevAll().andSelf().addClass('rating-hover');
        $(this).nextAll().removeClass('rating-chosen');
    });
    $('.rating-circle').mouseleave(function () {
        $(this).nextAll().removeClass('rating-hover');
    })

});
