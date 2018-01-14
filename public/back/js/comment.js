/**
 * Created by Administrator on 2018/1/14 0014.
 */;(function(){
    //禁用进度环
   NProgress.configure({ showSpinner:false});


  //在请求开始时触发，进度条开始工作
  $(document).ajaxStart(function () {
    NProgress.start();
  });
  //利用定时器，结束进度条事件
  $(document).ajaxStop(function () {
    setTimeout(function(){
      NProgress.done();
    },1000)
  });


    })();