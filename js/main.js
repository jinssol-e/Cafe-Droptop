// main.js

$(function(){
    var img_num = 0;
    var duration = 4500;
    var slider;

    //초기화
    $('.sliders > img').fadeOut();
    $('.sliders > img').eq(img_num).fadeIn();

    //
    function changeSlider() {
        //전체 이미지 fadeOut
        $('.sliders > img').fadeOut();
        //전체 이미지 fadeIn
        $('.sliders > img').eq(img_num).fadeIn();
        //pager UI
        $('.pager > a').removeClass('active');
        $('.pager > a').eq(img_num).addClass('active');
    }

    // 슬라이더 재생
    function sliderStart() {
        slider = setInterval(function () {
            // 마지막 번호면 끝으로
            if (img_num >= 2) { img_num = 0} else {
                // 다음 이미지 번호로
                img_num = img_num +1;
            }
            changeSlider(img_num);
        }, duration)
    }

    // 슬라이더 정지
    function sliderStop() {
        clearInterval(slider);
        console.log('stop');
    }

    sliderStart();

    // hover시 정지
    $('.sliders, .1st, .2nd, .3rd').hover(
        function () {
            sliderStop();
        },
        function() {
            sliderStart();
            console.log('start');
        }
    )

    $('.pager > .1st').click(function(){
        img_num = 0;
        changeSlider();
    })
    $('.pager > .2nd').click(function(){
        img_num = 1;
        changeSlider();
    })
    $('.pager > .3rd').click(function(){
        img_num = 2;
        changeSlider();
    })
})

// lnb
// $(function () {
//     $('#lnb li').click(function(){
//         $(this).addClass('active')
//         $(this).siblings().removeClass('active')
//     })
// })

// lnb hover
// $(function(){
//     $('#lnb li').hover(function(){
//         $(this).addClass('active')
//         $(this).siblings().removeClass('active')
//     })
// })

$(function(){
    $('#lnb li').hover(
        function(){
            $(this).addClass('effect')
            $(this).siblings().removeClass('effect')
        },
        function(){
            $(this).removeClass('effect')
        }
    )
})
   
