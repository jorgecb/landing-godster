/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var storage;
try {

    if (localStorage.getItem)
    {
        storage = localStorage;
    }
}
catch (e) {
    storage = {};

}


if (typeof storage.session != "undefined") {
    var session = JSON.parse(storage.session);
    if (session.isloged == true)
    {
        location.href = "http://godster.mx:9090/godster/";

    }

}



$(document).ready(function () {





    $('.sliderflow').slideme({
        arrows: false,
        autoslide: true,
        css3: true,
        loop: true,
        interval: 2000,
        swipe: true,
        resizable: {
            width: '990',
            height: '520',
        }
    });
    $('.sliderflow2').slideme({
        arrows: false,
        autoslide: true,
        css3: true,
        loop: true,
        interval: 1000,
        swipe: true,
        resizable: {
            width: '990',
            height: 400,
        }
    });

    $(".btnsend").click(function () {
        location.href = "http://godster.mx:9090/godster/";
    });

    $('#playvideo').click(function () {
        $('#sinl').hide();
        $('#conl').show();
        document.getElementById("playa").play();
    });
    setTimeout(
            function () {
                $('.prer').hide('fast');
                $('#bodi').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);

            }, 2000
            );

});
