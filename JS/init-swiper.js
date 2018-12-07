!function () {//为了避免声明全局变量，我们使用立即执行函数
  var view = document.querySelector('#mySlides')
  var controller = function(view){
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    portfolio1.onclick = function () {
      portfolioBar.className = 'bar state-1'
    }
    portfolio2.onclick = function () {
      portfolioBar.className = 'bar state-2'
    }
    portfolio3.onclick = function () {
      portfolioBar.className = 'bar state-3'
    }
  }
  controller(view)
  
}.call()

// MVC改写

// !function(){
//   var view = document.querySelector('#mySlides')
//   var controller = {
//     view: null, 
//     swiper: null,
//     swiperOptions: { loop: true, pagination: { el: '.swiper-pagination', }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, },
//     init: function(view){
//       this.view = view
//       this.initSwiper()
//     },
//     initSwiper: function(){
//       this.swiper = new Swiper (
//         this.view.querySelector('.swiper-container'), 
//         this.swiperOptions
//       )
//     }
//   }

//   controller.init(view)

// }.call()