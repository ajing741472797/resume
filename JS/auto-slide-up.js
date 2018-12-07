//添加offset类，使模块显示时从下往上跳出来

!function () {//为了避免声明全局变量，我们使用立即执行函数
    let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    //使“关于”这一栏一打开页面就跳动
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 2000)

    //导航栏下拉变色动效
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset()
    })


    /*下面不用看*/



    function findClosestAndRemoveOffset() {
        //到达指定模块，导航栏相应a高亮
        let specialTags = document.querySelectorAll('[data-x]')//获取页面关键标签，用data-x标记
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            } //遍历标签，看哪个离当前滚动高度最近，获取其index
        }
        // minIndex 就是离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')

        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')//id == 'siteAbout'  'a[href="#siteAbout"]'
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }

    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()

