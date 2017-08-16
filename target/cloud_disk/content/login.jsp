<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="../css/normalize.css" />
<link rel="stylesheet" type="text/css" href="../css/demo.css" />
<!--必要样式-->
<link rel="stylesheet" type="text/css" href="../css/component.css" />
<title>login</title>
<script src="../js/html5.js"></script>
<script type="text/javascript">
function reImg(){    
    var img = document.getElementById("codeImage").valueOf();    
    img.src = "code?rnd=" + Math.random();    
} 
function checkcode(){
	var inputcode=document.getElementById("inputcode").value;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	var url="code1?inputcode="+inputcode;
	xmlhttp.open("post",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//document.getElementById("errorAccount").innerHTML=xmlhttp.responseText;
			if(xmlhttp.responseText=="success"){
				document.getElementById("btn").disabled=false;
				document.getElementById("errorAccount").innerHTML="";
			}else{
				document.getElementById("btn").disabled=true;
				document.getElementById("errorAccount").innerHTML=xmlhttp.responseText;
			}
		}
	}
}
</script>
</head>
<body>
<div class="container demo-1">
			<div class="content">
				<div id="large-header" class="large-header">
					<canvas id="demo-canvas"></canvas>
					<div class="logo_box">
						<h3>登录</h3>
						<form action="login" name="f" method="post">
						<div><font id="st" style="color:red;text-align: center;">${st}</font></div>
							<div class="input_outer">
								<span class="u_user"></span>
								<input name="nickname" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
							</div>
							<div class="input_outer">
								<span class="us_uer"></span>
								<input name="password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
							</div>
							<div class="input_outer">
								<input name="logcode" class="text" style="color: #FFFFFF !important;padding-top: 5px" type="text" placeholder="请输入验证码" id="inputcode" onblur="checkcode()">
							    <img src="code" style="padding-left: 20px;padding-top: 5px" id="codeImage" onclick="reImg()"><div id="errorAccount"></div>
							</div>
							<div class="mb2"><input id="btn" class="act-but submit" href="javascript:" style="color: #FFFFFF;margin-left: 1%" type="submit" value="登录"></div>
							<div><img src="../imgs/qq3.png" style="width: 70px;height: 100px">&nbsp;<a href="regist.jsp"><font style="padding-left: 50%;color:white" >免费注册</font></a></div>
						</form>
					</div>
				</div>
			</div>
		</div><!-- /container -->
		<script src="../js/TweenLite.min.js"></script>
		<script src="../js/EasePack.min.js"></script>
		<script src="../js/rAF.js"></script>
		<script src="../js/demo-1.js"></script>
		<div style="text-align:center;">
</div>
</body>
</html>