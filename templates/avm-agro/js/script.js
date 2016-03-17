// check and define $ as jQuery
if (typeof jQuery != "undefined") jQuery(function ($) {

    /********** Mobile ***********/
    function getMobileVerstka() {
        var deviceWidth = $(window).width();
        if (deviceWidth < 768) {
            $.cookie('grid', null, {
                expires: -10,
                path: '/'
            });

            $(".combain-parts-tb table tr td").children().unwrap().unwrap().unwrap().unwrap();
            $(".zhivarka-parts-tb table tr td").children().unwrap().unwrap().unwrap().unwrap();

            $(".combain-parts-tb a:not(.main-cat-a-img, .main-cat-a-bold)").wrap("<option></option>");
            $(".combain-parts-tb option").wrapAll("<select class='catalogSel form-control'></select>");

            $(".zhivarka-parts-tb a:not(.main-cat-a-img, .main-cat-a-bold)").wrap("<option></option>");
            $(".zhivarka-parts-tb option").wrapAll("<select class='catalogSel form-control'></select>");
        }
    }
    getMobileVerstka();

    $(".catalogSel").change(function() {
        var selectLink = $(".combain-parts-tb select option:selected a").attr('href');
        window.location.href = selectLink;
    });

    $(".navbar-toggle").click(function(event) {
        $(".navbar-collapse").toggle();
    });
    /********** End Mobile ***********/

	function changeSliderWidth() {
		var screenWidth = $(window).width();

        if (screenWidth < 1620) {
            $("#slider90>li>img").css("width", screenWidth + 300);

            var imgHeight = $("#slider90>li>img").height();

            $(".slider-wrap").height(imgHeight);
            $(".slider").height(imgHeight);
            $("#cust-navigation90").css("top", imgHeight - 30);
        } else {
            $(".slider-wrap").height(390);
            $(".slider").height(390);
        }
	}
	
    function doMarginForSlider() {
        var windowWidth = $(document).width();
        var innerWidth = 1920;
        var marginLeft = (windowWidth - innerWidth) / 2;

        $(".slider>div").css("margin-left", marginLeft);
    }

    $("#slider90>li>img").load(function() {
        changeSliderWidth();
        doMarginForSlider()
    });

    $(window).resize(function(){
        doMarginForSlider();
		changeSliderWidth();
        //getMobileVerstka();
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
        $(this).children("span.readmore").detach().appendTo($(this).children("p:last"));
    });

    // Add readmore img to news on main
    $(".newsflash .single-news .news-into-block").each(function() {
        $(this).children(".readmore").html("<img src='/images/avm/news-readmore.png'>");
        $(this).children("a.readmore").detach().appendTo($(this).children("p:last"));
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

    /********* jCarousel News **********/
    jQuery('.jcarousel').jcarousel({
        scroll: 1, //листать по 1 элементу
        wrap: "circular" //после последнего показывать первый слайд
    });

    jQuery('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
    });

    jQuery('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
    });

    // Автопрокрутка слайдера
    jQuery('.jcarousel').jcarouselAutoscroll({
        interval: 10000,
        target: '+=1',
        autostart: true
    });


    /************ Grid and line goods show **********************/
    var grid = $.cookie('grid');
    if (grid === undefined) {
        $(".row-products").children(".clear").detach();
        var divsDel = $(".list_product .sblock3");
        for(var i = 0; i < divsDel.length; i+=3) {
            divsDel.slice(i, i+3).unwrap();
        }

        $(".change-view-type #line").addClass("line-active").removeClass("line");
        $(".list_product .sblock3").addClass("sblock1").removeClass("sblock3");

        $(".row-products").children(".clear").detach();

    } else {
        $(".change-view-type #grid").addClass("grid-active").removeClass("grid");
        $(".list_product .sblock1").addClass("sblock3").removeClass("sblock1");

        var divs = $(".list_product>div");
        for(var i = 0; i < divs.length; i+=3) {
            divs.slice(i, i+3).wrapAll("<div class='row-products'></div>");
        }
        $("<div class='clear'></div>").appendTo($(".row-products"));
    }

    $(".change-view-type a").click(function() {
        var show = $(this).attr('id');
        if (show == 'grid') {
            $(this).addClass("grid-active").removeClass("grid");
            $(this).parent().find("#line").addClass("line").removeClass("line-active");

            $(".list_product .sblock1").addClass("sblock3").removeClass("sblock1");

            var divs = $(".list_product .sblock3");
            for(var i = 0; i < divs.length; i+=3) {
                divs.slice(i, i+3).wrapAll("<div class='row-products'></div>");
            }
            $("<div class='clear'></div>").appendTo($(".row-products"));

            $.cookie('grid', '1', {
                expires: 10,
                path: '/'
            });
        } else if (show == 'line') {
            $(".row-products").children(".clear").detach();
            var divsDel = $(".list_product .sblock3");
            for(var i = 0; i < divsDel.length; i+=3) {
                divsDel.slice(i, i+3).unwrap();
            }

            $(this).addClass("line-active").removeClass("line");
            $(this).parent().find("#grid").addClass("grid").removeClass("grid-active");

            $(".list_product>div").addClass("sblock1").removeClass("sblock3");

            $.cookie('grid', null, {
                expires: -10,
                path: '/'
            });
        }
    });

    /********** End Grid show ************/

    $(".productfull .jshop_prod_description .description span.attr-size").detach().prependTo(".productfull .jshop_prod_description .description p:first-child");

});
