addEventListener('DOMContentLoaded', () => {
    const SLIDER = document.querySelector('.slider')
    const SLIDE = document.querySelectorAll('.feedback-card')
    const LEFT_BTN = document.querySelector('.arrow-left')
    const RIGHT_BTN = document.querySelector('.arrow-right');
    const SLIDER_LINE = document.querySelector('.feedbacks-slider');
    console.log(SLIDER, SLIDE, LEFT_BTN, RIGHT_BTN, SLIDER_LINE);
    let width = 0
    let page = SLIDER.offsetWidth
    let summ = width, razn = width
    let i = 0
    window.addEventListener('resize', () => {
        width = 0
        page = SLIDER.offsetWidth
        console.log('resize', width)
    });
    console.log(width);
    console.log(SLIDER.resize)
    console.log(SLIDER_LINE)
    function rollLeft() {
        if (page >= 341) {
            SLIDER_LINE.style.transform = "translate( -" + page + "px)";
            if (i == 2) {
                i = 0
                if (i == 0) {
                    width = 0;
                    // console.log('aye')
                    if (width == 0) {
                        width = SLIDER.offsetWidth
                        SLIDER_LINE.style.transform = "translate(0px)"
                    }
                }
            }
        } else if (page <= 340) {
            summ = width += page
            SLIDER_LINE.style.transform = "translate( -" + summ + "px)";
            if (i == 4) {
                i = 0
                summ = SLIDER.offsetWidth
                width = 0
                SLIDER_LINE.style.transform = "translate(0px)"
            }
            if (summ > 1000) {
                SLIDER_LINE.style.transform = "translate(0px)"
            }
        }
        console.log('width next =', width)
        console.log('summ next =', summ)
        i++
        console.log('i ++ =', i)


    }
    function rollRight() {
        if (page >= 341) {
            SLIDER_LINE.style.transform = "translate(0px)";
            i--
            if (i == 0) {
                i = 2
                // if(i == 2){
                //     // width = page;
                SLIDER_LINE.style.transform = "translate( -" + page + "px)";
                //     console.log('ldmflmeldm')
                //     // if (width == 0){
                //     //     width = SLIDER.offsetWidth
                //     //     SLIDER_LINE.style.transform = "translate(0px)"
                //     // }
                // }
            }
        } else if (page <= 340) {
            razn = width -= page
            SLIDER_LINE.style.transform = "translate( -" + razn + "px)";
            if (i == 0) {
                i = 4
                razn = page * 3
                width = page * 3
                SLIDER_LINE.style.transform = "translate( -" + razn + "px)";
            }
            i--
            console.log('i -- =', i)
            console.log('width back =', width)
            console.log('razn back =', razn)

        }
    }
    RIGHT_BTN.addEventListener('click', rollLeft)
    LEFT_BTN.addEventListener('click', rollRight)
})


































// let width = SLIDER.offsetWidth;
// let page = 0
// function rollSlide (){
//     SLIDER_LINE.style.transform = 'translate(-' + width * page + 'px)'
// }
// function size () {
//     SLIDER_LINE.getElementsByClassName.width = SLIDER*SLIDE.length + 'px';
//  SLIDE.forEach(element => {
//     element.style.width = width + 'px';
//     element.style.height = 'auto';
//  });
//  rollSlide ();
// }
// addEventListener('resize', size);
// RIGHT_BTN.addEventListener('click', function () {
//     page++;
//     if (page == 2) {
//         page = 0;
//     }
//     rollSlide();
// });
// LEFT_BTN.addEventListener('click', function () {
//     page--;
//     if (page <= 0) {
//         page = 1
//     }
//     rollSlide();
// });
