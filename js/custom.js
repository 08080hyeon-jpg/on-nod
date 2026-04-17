$(function () {
    $('.notice .tab_menu li').on('click', function () {
        let idx = $(this).index();

        $('.notice .tab_menu li').removeClass('on');
        $(this).addClass('on');

        $('.notice .tab_content li').removeClass('on');
        $('.notice .tab_content li').eq(idx).addClass('on');
    });
});