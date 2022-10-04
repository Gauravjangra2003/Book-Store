searchForm = document.querySelector('.search-form');

document.querySelector('#search-box').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');   // login form place on front of home 

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
  } // scroll krte hue navbar uper hee rehta hai

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut(); 
} 

function loader(){  // load time k liye
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut() { // set time out (4000) site ko 4 second baad open hone k liye
    setTimeout(loader,4000);
}

var swiper = new Swiper(".books-slider", {  // home ki books ko swipe krane ka kam krta hai 
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {  // featured ki books ko swipe krane ka kam krta hai 
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation:{
        nextEl : '.swiper-button-next' ,
        prevEl : '.swiper-button-prev' , 
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {  // reviews ko swipe krane ka kam krta hai 
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {  // blogs ko swipe krane ka kam krta hai 
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });