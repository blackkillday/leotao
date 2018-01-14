/**
 * Created by Administrator on 2018/1/11 0011.
 */
$(function (){

  //获取表单，初始化表单
  var $form=$("form");
  //console.log($form);
  //传入对象，配置校验规则：1用户名不能为空，密码为6~12位
  //表单校验是在提交的时候做的，校验失败了，会阻止提交，成功了会继续提交 
  $form.bootstrapValidator({
    //配置校验时需要的图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
       fields:{
         username:{
           validators:{
             notEmpty: {
             message: '用户名不能为空'
            },
             callback:{
               message:"用户名错误"
             }

           },
         },

         password:{
           validators:{
             notEmpty: {
               message: '密码不能为空'
             },
             stringLength:{
               min:6,
               max:12,
               message:"密码长度为6~12位"
             },
             callback:{
               message:"喵喵或者汪汪错误"
             }
           }
         }
       }

  })

//  为了使客户在提交失败后，不需要再填入以前的信息，所以使用ajax提交，，表单提交会重新刷新页面所有的信息，客户需要重新填入

  $form.on("success.form.bv",function (e){
      //使用该方法阻止页面的跳转
      e.preventDefault();
      //console.log(99);
      $.ajax({
          type:"post",
          url:"/employee/employeeLogin",
          //dataType:"json",
        data:$form.serialize(),
        success:function(info){
             console.log(info);
           if(info.success){
             location.href="index.html"
           }
          if(info.error=="1000"){
                $form.data('bootstrapValidator').updateStatus("username","INVALID","callback")

          }
          if(info.error=="1001"){
             $form.data('bootstrapValidator').updateStatus("password","INVALID","callback")
          }
        }

      })
   //重置表单，并且会隐藏所有的错误提示和图标
  })

//  重置功能，重置样式
  $("[type='reset']").on("click",function (){
    $form.data("bootstrapValidator").resetForm();
  })

});




