/**
 * Created by pengxiang on 04/07 0007.
 */

;$(function () {

    var sidebar = $('#side-bar'),//xuanze
        mask = $('.mask'),
        backButton = $('#back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');

    function showSideBar() {
        mask.fadeIn();
        sidebar.animate({'right':0});
    }
    function hideSideBar() {
        mask.fadeOut();
        sidebar.animate({'right':-sidebar.width()});
    }
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        },600)
    }

    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    backButton.on('click',backToTop)

    $(window).on('scroll',function (){
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })


})

