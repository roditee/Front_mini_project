$(document).ready(function() {
$(window).scroll(function() {
    if($(window).scrollTop() > $("#mainLogo").offset().top) {
        $(".white_content").css("position", "fixed");
    }
    else if(($(window).scrollTop() < $("#mainLogo").offset().top)) {
        $(".white_content").css("position", "static");
    }
});
});