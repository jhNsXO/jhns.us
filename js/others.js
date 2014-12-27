function updateInputBackground() {
    $("input").css("background-position", ($("input").width() + 10) + "px center");
}

$(document).ready(function() {
    updateInputBackground();
    $("#searchIcon")
    .hover(function() {
        $(".hover-block").slideToggle(250);
    })
    .mousemove(function(event) {
        $(".hover-block").css("top", event.pageY + 15 + "px");
        $(".hover-block").css("left", event.pageX + 15 + "px");
    });
});

$(window).resize(function() {
    updateInputBackground();
});