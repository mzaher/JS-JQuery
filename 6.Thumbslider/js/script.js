// Slider
$(document).ready(function () {
    // Declare vars
    var totalWidth = 0;
    var positions = new Array();

    $('#slides .slide').each(function (i) {
        // Get slider widths
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        // Check widths
        if (!$(this).width()) {
            alert('Please add a width to your images');
            return false;
        }
    });

    // Set width
    $('#slides').width(totalWidth);

    // Menu item click handler
    $('#menu ul li a').click(function (e, keepScroll) {
        // Remove active class and add inactive
        $('li.product').removeClass('active').addClass('inactive');
        // Add active class to parent
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({
            marginLeft: -positions[pos] + 'px'
        }, 450);

        // Prevent default
        e.preventDefault();

        // Stop autoscroll
        if (!autoScroll) clearInterval(itvl);
    });

    // Make first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    // Auto Scroll
    var current = 1;

    function autoScroll() {
        if (current == -1) return false;

        $('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]);
        current++;
    }

    // Duration for auto scroll
    var duration = 10;
    var itvl = setInterval(function () {
        autoScroll()
    }, duration * 1000);
});

// Dynamic Footer
$(window).bind("load", function () {

    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
    positionFooter();

    function positionFooter() {
        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";
        if (($(document.body).height() + footerHeight) < $(window).height()) {
            // Setting the Horizontal aligning, and animation
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            });
            // Setting the vertical aligning
            $('#footer').css("top", Math.max(0, (($(window).height() - $('#footer').outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
            $('#footer').css("left", Math.max(0, (($(window).width() - $('#footer').outerWidth()) / 2) +
                $(window).scrollLeft()) + "px");
            return this;
        } else {
            $footer.css({
                position: "static"
            })
        }
    }
    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)
});
