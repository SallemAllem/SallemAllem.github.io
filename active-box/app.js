$(function() {  //такая запись позволяет дождаться загрузки всего документа. и только тогда выполнять какие-то действия с DOM элементами
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    })
    
});

/* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    console.log(elementId);
    let elementOffset = $(elementId).offset().top;
    
    //nav.removeClass("show");
    
    $("html, body").animate({
        scrollTop: elementOffset -70
    }, 700);
})