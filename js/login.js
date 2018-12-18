$(function() {
    let csrf = $.cookie('csrfToken');
    let $username = $('#username');
    let $pwd = $('#pwd');

    //登录
    $('.login').on('click', function(){ 
      if($username.val().length<1) {
        $("#resultMsg").text("账号不能为空");
      }else if($pwd.val().length<1){
        $("#resultMsg").text("密码不能为空");
      }else {
        $.ajax({
          type: 'post',
          url: '/login',
          headers: {"X-CSRFToken": csrf}, 
          data: {
            username: $username.val(),
            password: $pwd.val()
          },
          dataType: 'json',
          success: function (result) {
            $("#resultMsg").text(result.msg);
            if(result.code == 1){
              setTimeout(function(){
                window.location.href = result.url;
                // window.location.href = "http://127.0.0.1:7001/public/system/operate/html/index.html";
              }, 1000);
            }
          },
          error: function(){
            console.log("失败");
          }
        });
      }
    });

    $(document).keyup(function(event){
      if(event.keyCode ==13){
        $(".login").click();
      }
    });

});