// check and define $ as jQuery
if (typeof jQuery != "undefined") jQuery(function ($) {

    function doMarginForSlider() {
        var windowWidth = $(document).width();
        var innerWidth = 1920;
        var marginLeft = (windowWidth - innerWidth) / 2;

        $(".slider>div").css("margin-left", marginLeft);
    }
    doMarginForSlider();

    $(window).resize(function(){
        doMarginForSlider();
    });


	// Change langs text
	var ua = $(".lang-inline li:first-child a").text("Укр");
	var ru = $(".lang-inline li:last-child a").text("Рус");
	
	$(".lang-inline li:first-child").after("<div class='langs-separator'></div>");


	// Change breadcrumbs home text
	$(".breadcrumbs li:nth-child(2) a").html("<img src='/images/avm/breadcrumbs-home.png' style='margin-top: -4px;'>");


    // Get active pagination
    var pageTextEl = $(".pagination ul li:not([class]) span");
    var pageText = pageTextEl.text();
    var page = parseInt(pageText);
    if (!isNaN(page)) {
        pageTextEl.addClass('active');
    } else {
        $(".pagination ul li:nth-child(3) span").addClass('active');
    }


    // Change places img and header for news page
    $(".blog .items-leading div.news").each(function() {
        $(this).children(".item-image").detach().prependTo($(this));
    });

    // Add readmore img to news page
    $(".blog .items-leading div.news").each(function() {
        $(this).children("span.readmore").children("a").html("<img src='/images/avm/news-readmore.png'>");
        $(this).children("span.readmore").detach().appendTo($(this).children("p:last-child"));
    });

    // Add clear for left-menu li
    $(".left-menu .menu-tech-doc>li>a").append("<div class='clear'></div>");

    // add margit-top for image and span in left menu li
    $(".left-menu .menu-tech-doc>li>a").each(function() {
        $(this).children("img").on('load', function(){
            var menuImgHeight = $(this).height();
            var imgMarginTop = ($(this).parent("a").height() - menuImgHeight) / 2;
            $(this).css("margin-top", imgMarginTop + "px");

            var leftMenuSpanHeight = $(this).next("span.image-title").height();
            var leftMenuSpanMarginTop = (($(this).parent("a").height() - leftMenuSpanHeight) / 2) - 3;
            $(this).next("span").css("margin-top", leftMenuSpanMarginTop + "px");
        });
    });

});
