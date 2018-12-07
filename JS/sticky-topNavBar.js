!function(){
    var view = document.querySelector('#topNavBar')
    // view.style.border = '1px solid red'
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.blindEvents()//绑定事件,等价于 this.blindEvents.call(this)
        },
        blindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',(x) => {
                if(window.scrollY > 0){
                this.active()
                }else{
                this.deactive()
                }
            }) //箭头函数没有this
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            view.classList.remove('sticky')
        }
    }
    controller.init(view) //相当于controller.init.call(controller,view)
}.call()
