(function($) {
    $(function(){

        // $(document).ready(function() {
        //     $('[data-fancybox]').fancybox();
        // });

        // $(function(){
        //     AOS.init();
        // });

        //ナビ
        $('#btn-modal').on('click', function(){
            $('#overlay').fadeIn();
            $('#modal').fadeIn();
        });
        $('#close-btn').on('click', function(){
            $('#overlay').fadeOut();
            $('#modal').fadeOut();
        });
        $('#overlay').on('click', function(){
            $('#overlay').fadeOut();
            $('#modal').fadeOut();
        });

        //スムーズスクロール
        $('a[href^="#"]').click(function(){
            var speed = 600;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
        var url = $(location).attr('href');
        if (url.indexOf("?id=") == -1) {
        }else{
            var url_sp = url.split("?id=");
            var hash   = '#' + url_sp[url_sp.length - 1];
            var tgt    = $(hash);
            var pos    = tgt.offset().top;
            $("html, body").animate({scrollTop:pos}, 600, "swing");
        }



    });
})(jQuery);

