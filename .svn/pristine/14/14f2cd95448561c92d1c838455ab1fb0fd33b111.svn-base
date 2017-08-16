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
<title>register</title>
<script src="../js/html5.js"></script>
<script src="../js/us.js"></script>
<script type="text/javascript" src="../js/jquery-1.10.2.min.js"></script>
<script>
window.onload=function () {
	$("#inputs").change(function () {
var fil = this.files;
for (var i = 0; i < fil.length; i++) {
reads(fil[i]);
}
});
};
function reads(fil){
var reader = new FileReader();
var img=document.getElementById("touxiang").valueOf();
reader.readAsDataURL(fil);
reader.onload = function()
{
// document.getElementById("dd").innerHTML += "<img src='"+reader.result+"'>";
img.src=reader.result;
};
}

function checkname(){
	var name=document.getElementById("nickname").value;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	var url="nick?nickname="+name;
	xmlhttp.open("post",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//document.getElementById("errorAccount").innerHTML=xmlhttp.responseText;
			if(xmlhttp.responseText=="success"){
				document.getElementById("nick").innerHTML="";
			}else{
				document.getElementById("nick").innerHTML=xmlhttp.responseText;
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
					<h3 style="margin-left: 1%"> 注册</h3>
						<form action="register" name="f" method="post">
						<img src="../imgs/touxiang.jpg"  id="touxiang" style="width: 100px;height:100px;margin-left: 35%">
						<style>
                 input[type="file"] {
                        color: transparent;
                                      }
                       </style>
						<input type="file" id="inputs" style="margin-left: 38%" name="headImg"></br>
						用户名
							<div class="input_outer">
								<span class="u_user"></span>
								<input name="nickname" id="nickname" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入用户名" onblur="checkname()">
								 <div id="nick"></div>
							</div>
						密码	
							<div class="input_outer">
								<span class="us_uer"></span>
								<input name="password" id="password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
							</div>
						确认密码	
							<div class="input_outer">
								<span class="us_uer"></span>
								<input name="logpass" id="passworda" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码" onblur="checkpass()">
							</div><div id="checkpass"></div>
							<div class="mb2"><input id="btn" class="act-but submit" href="javascript:" style="color: #FFFFFF;margin-left: 1%" type="submit" value="注册"></div>
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