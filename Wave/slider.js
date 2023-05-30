
const buttons = document.querySelectorAll('.slider_buuton-label');
const sliderLine = document.querySelector('.slider-line');
let ind = 0;
let set = 0;
console.log(buttons, sliderLine)


function slideRight() {
    ind++
    if (ind == 9) {
        set = 0;
        ind = 0;
        sliderLine.style.right = set + 'px';
    }
    if (ind != 0) {
        set += 1920
        sliderLine.style.right = set + 'px';
    }
    clearTimeout(times);
    switch (ind) {
        case 0:
            buttons[0].classList.add('slider_buuton-label-active');
            buttons[8].classList.remove('slider_buuton-label-active');
            break;
        case 1:
            buttons[1].classList.add('slider_buuton-label-active');
            buttons[0].classList.remove('slider_buuton-label-active');
            break;
        case 2:
            buttons[2].classList.add('slider_buuton-label-active');
            buttons[1].classList.remove('slider_buuton-label-active');
            break;
        case 3:
            buttons[3].classList.add('slider_buuton-label-active');
            buttons[2].classList.remove('slider_buuton-label-active');
            break;
        case 4:
            buttons[4].classList.add('slider_buuton-label-active');
            buttons[3].classList.remove('slider_buuton-label-active');
            break;
        case 5:
            buttons[5].classList.add('slider_buuton-label-active');
            buttons[4].classList.remove('slider_buuton-label-active');
            break;
        case 6:
            buttons[6].classList.add('slider_buuton-label-active');
            buttons[5].classList.remove('slider_buuton-label-active');
            break;
        case 7:
            buttons[7].classList.add('slider_buuton-label-active');
            buttons[6].classList.remove('slider_buuton-label-active');
            break;
        case 8:
            buttons[8].classList.add('slider_buuton-label-active');
            buttons[7].classList.remove('slider_buuton-label-active');
            break;
    }
}


let interval = setInterval(slideRight, 5000)
let times
function clearInter() {
    console.log(clearInterval(interval));
    clearInterval(interval)
    clearTimeout(interval)

}
function goInter() {
    clearTimeout(times)
    times = setTimeout(() => {
        interval = setInterval(slideRight, 5000)
    }, 4000)
}
function buttonsClear() {
    buttons.forEach((el) => {
        el.classList.remove('slider_buuton-label-active');
    })
}

buttons.forEach((el) => {
    el.addEventListener('click', (el) => {
        console.log(el)
        clearInter()
        buttonsClear()
        let val = el.target.attributes[0].nodeValue
        switch (+val) {
            case 1:
                buttons[0].classList.add('slider_buuton-label-active');
                set = 0;
                ind = 0
                sliderLine.style.right = set + 'px'
                console.log('fggf')
                break;
            case 2:
                buttons[1].classList.add('slider_buuton-label-active')
                set = 3840;
                ind = 1
                sliderLine.style.right = set + 'px'
                break;
            case 3:
                buttons[2].classList.add('slider_buuton-label-active');
                set = 5670;
                ind = 2
                sliderLine.style.right = set + 'px'
                break;
            case 4:
                buttons[3].classList.add('slider_buuton-label-active');
                set = 7680;
                ind = 3
                sliderLine.style.right = set + 'px'
                break;
            case 5:
                buttons[4].classList.add('slider_buuton-label-active');
                set = 9600;
                ind = 4
                sliderLine.style.right = set + 'px'
                break;
            case 6:
                buttons[5].classList.add('slider_buuton-label-active');
                set = 11520;
                ind = 5
                sliderLine.style.right = set + 'px'
                break;
            case 7:
                buttons[6].classList.add('slider_buuton-label-active');
                set = 13440;
                ind = 6
                sliderLine.style.right = set + 'px'
                break;
            case 8:
                buttons[7].classList.add('slider_buuton-label-active');
                set = 15360;
                ind = 7
                sliderLine.style.right = set + 'px'
                break;
        }
        goInter()
    })
})








