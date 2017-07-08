/**
 * Created by pengxiang on 04/07 0007.
 */



function drag() {
    oLogin.onmousedown = fnDown();
}

function fnDown(event) {

    event = event || window.event;
    //document.title = event.clientX+','+event.clientY;

    var oDrag = $('#login');
    disX = event.clientX - oDrag.offsetLeft;
    disY = event.clientY - oDrag.offsetTop;

    document.onmousemove = function (event) {
        event = event || window.event;
        fnMove(event,disX,disY);
    }
}
function fnMove(ee,posX,posY) {
    var oDrag = $('#login');
        l = e.clientX-posX;
        t = e.clientY-posY;
    oDrag.style.left = l + 'px';
    oDrag.style.top = t + 'px';
}

window.onload = drag;


;$(function () {

    //input元素的选择器使用


    var sidebar = $('#side-bar'),//xuanze
        mask = $('.mask'),
        backButton = $('#back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');
        butt = $('#me');

    var oBtn = $('#btnLogin');
        oMask = $('.mask2');
        oLogin = $('#login');
        oClose = $('#close');



    function login() {
        oMask.fadeIn();
        oLogin.fadeIn();
    }
    function reLogin() {
        oMask.fadeOut();
        oLogin.fadeOut();
    }

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
    oBtn.on('click',login);
    oClose.on('click',reLogin);

    $(window).on('scroll',function (){
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })

    window.onload = drag();

});

