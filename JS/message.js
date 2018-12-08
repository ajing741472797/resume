!function () {
    var APP_ID = 'o8vzed3lpO8Nz3uXvbmjSiPA-gzGzoHsz';
    var APP_KEY = '5ml8Rgc8TNp8sjp2AduI0EF0';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    var query = new AV.Query('Message');
    query.find()
        .then(
            function (messages) {
                console.log(messages)
                console.log(messages[0].attributes)
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                })
            }
        )

    let myForm = document.querySelector('#postMessageForm')

    myForm.addEventListener('submit', function (e) {
        e.preventDefault()//阻止刷新页面
        let content = myForm.querySelector('input[name=content]').value;
        let name = myForm.querySelector('input[name=name]').value;
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
            'name': name,
            'content': content
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}:  ${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''

            console.log(object)
        })

    })
}.call()

//用MVC进行封装
// !function(){
//     var model = {
//       // 获取数据
//       init: function(){
//         var APP_ID = 'o8vzed3lpO8Nz3uXvbmjSiPA-gzGzoHsz'
//         var APP_KEY = '5ml8Rgc8TNp8sjp2AduI0EF0'
//         AV.init({ appId: APP_ID, appKey: APP_KEY })
//       },
//       fetch: function(){ 
//         var query = new AV.Query('Message');
//         return query.find() // Promise 对象
//       },
//       // 创建数据
//       save: function(name, content){
//         var Message = AV.Object.extend('Message');
//         var message = new Message();
//         return message.save({  // Promise 对象
//           'name': name,
//           'content': content
//         })
//       }
//     }
  
//     var view = document.querySelector('section.message')
  
  
//     var controller = {
//       view: null,
//       model: null,
//       messageList: null,
//       init: function(view, model){
//         this.view = view
//         this.model = model
  
//         this.messageList = view.querySelector('#messageList')
//         this.form = view.querySelector('form')
//         this.model.init()
//         this.loadMessages()
//         this.bindEvents()
//       },
//       loadMessages: function(){
//         this.model.fetch().then(
//           (messages) => {
//             let array = messages.map((item)=> item.attributes )
//             array.forEach((item)=>{
//               let li = document.createElement('li')
//               li.innerText = `${item.name}: ${item.content}`
//               this.messageList.appendChild(li)
//             })
//           } 
//         )
//       },
//       bindEvents: function(){
//         this.form.addEventListener('submit', (e) => {
//           e.preventDefault()
//           this.saveMessage()
//         })
//       },
//       saveMessage: function(){
//         let myForm = this.form
//         let content = myForm.querySelector('input[name=content]').value
//         let name = myForm.querySelector('input[name=name]').value
//         this.model.save(name, content).then(function(object) {
//           let li = document.createElement('li')
//           li.innerText = `${object.attributes.name}: ${object.attributes.content}`
//           let messageList = document.querySelector('#messageList')
//           messageList.appendChild(li)
//           myForm.querySelector('input[name=content]').value = ''
//           console.log(object)
//         })
//       }
  
//     }
  
//     controller.init(view, model)
  
  
//   }.call()

//leanCloud 数据库 数据存储开发指南
// // 创建 TestObject 表
// var TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据
// var testObject = new TestObject();
// // 数据内容是 words: 'Hello World!' 保存
// // 如果保存成功，则运行 alert('')
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })