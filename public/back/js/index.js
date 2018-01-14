/**
 * Created by Administrator on 2018/1/13 0013.
 */
;(function (){


  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pic-left'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '2017年注册人数'
    },
    tooltip: {},
    legend: {
      data:['人数']
    },
    xAxis: {
      data: ["1月","2月","3月","4月","5月","6月"]
    },
    yAxis: {
    },
    series: [{
      name: '人数',
      type: 'bar',
      data: [42334, 25435, 546, 5430, 14560, 2430]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);



})();
;(function (){
  // 基于准备好的dom，初始化echarts实例
  var myChart2 = echarts.init(document.getElementById('pic-right'));

  // 指定图表的配置项和数据
  var option2= {
    title : {
      text: '热门品牌销售',
      subtext: '2017年6月',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['阿迪王','狮子王','指环王','小霸王','大王']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:334, name:'阿迪王'},
          {value:30, name:'狮子王'},
          {value:324, name:'指环王'},
          {value:185, name:'小霸王'},
          {value:1691, name:'大王'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart2.setOption(option2);



})();

;(function (){

  //点击按钮实现侧边栏隐藏和缩放功能
  var flag=true
  $(".left-btn").on("click",function(){
      if(flag){
    $(".lt-aside").addClass(" now")
    $(".lt-main-h ").addClass(" now2")
    $(".lt-main").addClass(" now1")
        flag=false;
      }else{
        $(".lt-aside").removeClass("now")
        $(".lt-main-h ").removeClass("now2")
        $(".lt-main").removeClass("now1")
        flag=true;
      }
  })


$(".right-btn").on("click",function(){
  $('.modal').modal('show');
})

  $(".btn-out").on("click",function(){
    $('.modal').modal('hide');
    location.href="login.html";
  })
})();