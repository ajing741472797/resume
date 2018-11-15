 //loading动画
 setTimeout(function(){
    siteWelcome.classList.remove('active')},2000)
  
  //添加offset类，使模块显示时从下往上跳出来
  let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
  for (let i = 0; i < specialTags.length; i++) {
      specialTags[i].classList.add('offset')
  }

  //使“关于”这一栏一打开页面就跳动
  setTimeout(function(){
      findClosest()
  },2000)

  //导航栏下拉变色动效
  window.onscroll = function(){
      if(window.scrollY > 0){
      topNavBar.classList.add('sticky')
      }else{
      topNavBar.classList.remove('sticky')
      }
      findClosest()
  }            
 

      //整个过程找元素找id通过id找元素，最后移除class
  function findClosest(){
       //到达指定模块，导航栏相应a高亮
       let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
      let minIndex = 0
      for(let i =1;i< specialTags.length;i++){  
          if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
              minIndex = i
          } //遍历标签，看哪个离当前滚动高度最近，获取其index
      }
      // minIndex 就是离窗口顶部最近的元素
      specialTags[minIndex].classList.remove('offset')

      let id = specialTags[minIndex].id
      let a = document.querySelector('a[href="#'+ id + '"]')//id == 'siteAbout'  'a[href="#siteAbout"]'
      let li = a.parentNode
      let brotherAndMe = li.parentNode.children
      for(let i=0;i<brotherAndMe.length;i++){
          brotherAndMe[i].classList.remove('highlight')
      }
          li.classList.add('highlight')
      }


  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0;i<liTags.length;i++){
      liTags[i].onmouseenter = function(x){
          x.currentTarget.classList.add('active')
      }
      liTags[i].onmouseleave = function(x){
          x.currentTarget.classList.remove('active')
      }
  }
  
  //点击导航栏转到指定位置（用Tween）
  let aTags = document.querySelectorAll('nav.menu > ul > li > a')
  function animate(time){
      requestAnimationFrame(animate)
      TWEEN.update(time)
  } 
  requestAnimationFrame(animate) //告诉tween 间隔多少秒动一次

  for(let i=0;i<aTags.length;i++){
      aTags[i].onclick = function(x){
          x.preventDefault() //阻止默认操作，a标签锚点跳转
          let a = x.currentTarget //获取a标签
          let href = a.getAttribute('href')//'#siteAbout' 拿到你写的herf值，不带http协议，不加getAttribute就是浏览器处理过的地址，带http协议
          let element = document.querySelector(href) //根据href得到元素
          let top = element.offsetTop //offsetTop 元素距离页面顶端的距离
          
    
          let currentTop = window.scrollY
          let targetTop = top - 80
          let s = targetTop - currentTop
          var coords = { y: currentTop}
          var t = Math.abs((s/100)*300)  //Math.abs求绝对值        
          if(t>500){ t = 500}
          var tween = new TWEEN.Tween(coords)
              .to({ y: targetTop},t)
              .easing(TWEEN.Easing.Quadratic.InOut)//选择函数类型
              .onUpdate(function(){
                  window.scrollTo(0,coords.y)
              })
              .start()
      }   
  }