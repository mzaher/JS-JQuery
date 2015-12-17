//Search_bar handler
$(function () {
    var searchField = $("#query");
    var icon = $("#search-btn");

    //focus event handler
    $(searchField).on("focus", function () {
        $(this).animate({
            width: "100%"
        }, 400);
        $(icon).animate({
            right: "10px"
        }, 400);
    });

    //Blur Event Handler
    $(searchField).on("blur", function () {
        if (searchField.val() == "") {
            $(searchField).animate({
                width: "45%"
            }, 400, function () {});
            $(icon).animate({
                right: "360px"
            }, 400, function () {});
        };
    });

    $('#search-form').submit(function (e) {
        e.preventDefault();
    });
});

//Search Function
function search() {
    //Clear Results
    $("#results").html("");
    $("buttons").html("");

    //Get form input
    var q = $("#query").val();

    //Run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: q,
            type: "video",
            maxResults: 10,
            key: "AIzaSyAXDUVnD7XMslWKOFB1aZ594z34jbtt46c"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            console.log(data);

            $.each(data.items, function (i, item) {
                //Get Output
                var output = getOutput(item);

                //Display results
                $("#results").append(output);
            });
        }
    );
}

//Build output
function getOutput(item) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.puplishedAt;

    //Build output string
    var output = '<li>' +
        '<div class="list-left">' +
        '<img src="' + thumb + '">' +
        '</div>' +
        '<div class="list-right">' +
        '<h3>' + title + '</h3>' +
        '<small>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>' +
        '<p>' + description + '</p>' +
        '</div>' +
        '</li>' +
        '<div class="clearfix"></div>'
    '';
    return output;
}
