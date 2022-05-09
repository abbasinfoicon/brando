$(document).ready(function () {

    /*=====================================================================
           ========================== 02- Hamburger Menu =========================
     ========================================================================*/

    $(function () {
        $('.hamburger').on("click", function (event) {
            event.preventDefault();

            $(this).toggleClass("is-active");

            //$(".main-menu").toggleClass("show-menu");
            $(".right-section").toggleClass("navebar-show");

            $(".left-section").toggleClass("navebar-show");

            setTimeout(function () {
                $('body').toggleClass("hiddenOverflow");
            }, 300);

        });
    });


    /*=====================================================================
    ========================== 02- Equal-Height =========================
    ========================================================================*/
    $(document).ready(function(){
        resizeContent();

        $(window).resize(function() {
            resizeContent();
        });
    });

    function resizeContent() {
        var pageWidth = $(window).width();

        if (pageWidth > 992) {
            var maxHeight = 0;

            $(".eq_height").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $(".manufacturer-top .eq_hg-big").height(maxHeight);


            $(".full_height").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height()/2 - 10;
                }
            });
            $(".rightBig-img").height(maxHeight);


            $(".direct-produit").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $(".prod-img").height(maxHeight);

        }
    }



});
