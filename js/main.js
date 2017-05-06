/**
 * Created by pengxiang on 04/07 0007.
 */

;$(function () {

    var sidebar = $('#side-bar'),//xuanze
        mask = $('.mask'),
        backButton = $('#back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');
        butt = $('#me');

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

    function butme() {

        var mess = confirm("你觉得我帅吗？");

        if (mess == true){
            alert("来的都是客");
            butt.innerHTML = 'HELLO';
        }
        else {
            //document.write("get away")
            alert('再见,我要关窗口了');
            timerid = setTimeout(function(){
                window.close();
            },1000);
        }
    }


    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    backButton.on('click',backToTop);
    butt.on('click',butme);

    $(window).on('scroll',function (){
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })


})

