$("[role=navigation] a, .scroll").click(function(){var o;return o=$("body").find($(this).attr("href").split("/").pop()),$("html, body").animate({scrollTop:o.offset().top-65},500),!1});