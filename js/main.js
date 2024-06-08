jQuery(document).ready(function($) {
    function animateLevelBars() {
        return $('.level-bar-inner, .level-bar-inner-top').each(function() {
            let itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    }

    $('.level-bar-inner, .level-bar-inner-top').css('width', '0');
    $(window).on('load', animateLevelBars);
});