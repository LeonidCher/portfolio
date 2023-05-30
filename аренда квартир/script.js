document.addEventListener('DOMContentLoaded', (e)=>{
    const overlay = document.querySelector('.overlay')
    const tabOverlayClose = document.querySelector('.order-call')
   const crossClose = document.getElementById('close-cross')
   const orderBtn = document.getElementById('order-call-client')
   const arrowLeft = document.querySelector('.arrow-left')
   const arrowRight = document.querySelector('.arrow-right')
   const cardsFeedback = document.querySelectorAll('.feedback-card')
//    overlay

    orderBtn.addEventListener('click', ()=>{
        overlay.classList.add('active-order-call')
        tabOverlayClose.classList.add('active-order-call')
    })
        overlay.addEventListener('click', ()=> {
            overlay.classList.remove('active-order-call')
            tabOverlayClose.classList.remove('active-order-call')
        })
        crossClose.addEventListener('click', ()=>{
            overlay.classList.remove('active-order-call')
            tabOverlayClose.classList.remove('active-order-call')
        })

        // cards
        const card1 = document.getElementById('flat-card1')
        const card2 = document.getElementById('flat-card2')
        const card3 = document.getElementById('flat-card3')
        const card4 = document.getElementById('flat-card4')
    card1.addEventListener('mouseover', (e)=>{
    card1.classList.add('active-hover-flat')
    addEventListener('mouseout',()=>{
        card1.classList.remove('active-hover-flat')
    })
   })
   card2.addEventListener('mouseover', (e)=>{
    card2.classList.add('active-hover-flat')
    addEventListener('mouseout',()=>{
        card2.classList.remove('active-hover-flat')
    })
   })
   card3.addEventListener('mouseover', (e)=>{
    card3.classList.add('active-hover-flat')
    addEventListener('mouseout',()=>{
        card3.classList.remove('active-hover-flat')
    })
   })
   card4.addEventListener('mouseover', (e)=>{
    card4.classList.add('active-hover-flat')
    addEventListener('mouseout',()=>{
        card4.classList.remove('active-hover-flat')
    })
   })
   // slider
//    const dottOne = document.getElementById('dottOne')
//    const dottTwo = document.getElementById('dottTwo')
//    const dottActive = document.querySelector('.dott-active')
//    function dispNone(el){
//     el.style.display="none"
//    }
//    function nextSlide (){
//     dottActive.style.right="725px"
//     cardsFeedback.forEach((item)=>{
//         item.style.right="1459px"  
//     })
//    }
//    function backSlide(){
//     dottActive.style.right="745px"
//     cardsFeedback.forEach((item)=>{
//         item.style.right="0px"
//     })
//     }
//     dottTwo.addEventListener('click', ()=> {
//         nextSlide()
//     })
//     dottOne.addEventListener('click', ()=> {
//         backSlide()
//     })
//     arrowRight.addEventListener('click', ()=>{
//         nextSlide()
//     })
//     arrowLeft.addEventListener('click', ()=>{
//         backSlide()
//     })

    const menu = document.getElementById('menu')
    const menuBtn = document.querySelector('.menu')
    menuBtn.addEventListener('click', ()=>{
     console.log(menu)
     menu.classList.toggle('menu-open-active')
    }) 
   })
   const background = document.querySelector('.blue-color')
   console.log(background)
   function show (){
    for(let c = 0 ; c <=100; c++){
        background.style.width = c + "%" 
    }
   }
   window.document.addEventListener('DOMContentLoaded',()=> {
    setTimeout(show(), 1000)
   })



