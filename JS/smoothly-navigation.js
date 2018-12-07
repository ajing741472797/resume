//点击导航栏转到指定位置（用Tween）
!function () {
    var view = document.querySelector('nav.menu')
    var controller = function(view){
        let aTags = view.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
    }
    requestAnimationFrame(animate) //告诉tween 间隔多少秒动一次

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault() //阻止默认操作，a标签锚点跳转
            let a = x.currentTarget //获取a标签
            let href = a.getAttribute('href')//'#siteAbout' 拿到你写的herf值，不带http协议，不加getAttribute就是浏览器处理过的地址，带http协议
            let element = document.querySelector(href) //根据href得到元素
            let top = element.offsetTop //offsetTop 元素距离页面顶端的距离


            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop
            var coords = { y: currentTop }
            var t = Math.abs((s / 100) * 300)  //Math.abs求绝对值        
            if (t > 500) { t = 500 }
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)//选择函数类型
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    }
    }
    controller(view)
}.call()


// 用MVC优化改写


// !function(){
//     var view = document.querySelector('nav.menu')
//     var controller = {
//       view: null,
//       aTags: null,
//       init: function(view){
//         this.view = view
//         this.initAnimation()
//         this.bindEvents()
//       },
//       initAnimation: function(){
//         function animate(time) {
//           requestAnimationFrame(animate);
//           TWEEN.update(time);
//         }
//         requestAnimationFrame(animate);
//       },
//       scrollToElement: function(element){
//         let top = element.offsetTop
//         let currentTop = window.scrollY
//         let targetTop = top - 80
//         let s = targetTop - currentTop // 路程
//         var coords = { y: currentTop}; // 起始位置
//         var t = Math.abs((s/100)*300) // 时间
//         if(t>500){ t = 500 }
//         var tween = new TWEEN.Tween(coords) // 起始位置
//           .to({ y: targetTop}, t) // 结束位置 和 时间
//           .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
//           .onUpdate(function() {
//             // coords.y 已经变了
//             window.scrollTo(0,coords.y) // 如何更新界面
//           })
//           .start(); // 开始缓动
//       },
//       bindEvents: function(){
//         let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
//         for(let i=0; i<aTags.length; i++){
//           aTags[i].onclick = (x)=>{
//             x.preventDefault()
//             let a = x.currentTarget
//             let href = a.getAttribute('href') //'#siteAbout'
//             let element = document.querySelector(href)
//             this.scrollToElement(element)
//           }
//         }
//       },
//     }
  
//     controller.init(view)
//   }.call()
 