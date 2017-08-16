<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta content="" name="description" />
    <meta content="webthemez" name="author" />
    <base href="<%=(request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/") %>" />
    <title>BRILLIANT Free Bootstrap Admin Template</title>
    <!-- Bootstrap Styles-->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FontAwesome Styles-->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <!-- Morris Chart Styles-->
    <link href="assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
    <!-- Custom Styles-->
    <link href="assets/css/custom-styles.css" rel="stylesheet" />
    <!-- Google Fonts-->
    <link href='assets/css/googleapis.css' rel='stylesheet' type='text/css' />
    <link rel="stylesheet" href="assets/js/Lightweight-Chart/cssCharts.css"> 
	<!-- 阿里巴巴图标素材库 -->
	<link rel="stylesheet" type="text/css" href="css/iconfont.css">
	<!-- 自定义样式 -->
	<link rel="stylesheet" type="text/css" href="css/template.css">
<link rel="stylesheet" type="text/css" href="css/recycle.css">

</head>
<body>
<div id="wrapper">

	<jsp:include page="template.jsp" flush="true"></jsp:include>

	<div id="page-wrapper">
          <!-- 空白区域从此开始 -->
           <c:if test="${empty files}">
	          <div class="empty">
	          <img src="imgs/recycle.png"></img>
	          	<p class="empty-word">您的回收站为空噢~</p>
	          	<p class="text">
					回收站为你保存10天内删除的文件，想要延长保存时间？
					<br>
					开通会员
					<a title="开通会员" href="#"> 延长至15天</a>
					开通超级会员
					<a title="开通超级会员" href="#"> 延长至30天</a>
	          	</p>
	          </div>
         </c:if>
          
          <!-- <br><br>
          <a href="recycle-return.jsp">确认删除</a> --> -->
          
           <c:if test="${not empty files}">
			 <div class="head" style="padding-top: 15px;">
				<div class="head-left">
					<span class="text" style="float: left;">
					提示：回收站不占用网盘空间，文件保存10天后将被自动清除。
					</span>
				</div>
				
				<div class="head-right" style="float: right;">
				<em class="icon icon-delete" title="删除"></em>
				<span class="val">清空回收站</span>
				</div>
			 </div> 
			 
			 
			 <div class="myshare">
          	<div class="up" style="padding-top: 24px;">
          		<div class="up-left" style="float:left;padding-left: 10px;">回收站</div>
       	  		<div class="up-right" style="float:right" >已加载<span id="recycle-count">recycleCount</span>个文件</div>
          	</div>
        
         <div class="down-text" style="padding-top: 30px;">
         
         	<div class="down">
       	    	<div class="fufA" style="float:left; width: 50%; padding-left: 10px;" >
       	    		<input id="all" type="checkbox" class="share-count" onclick="allselect()"><span id="change">分享文件</span></div>
       	    	<div class="fufA" style="float:left; width: 15%">大小</div>
       	  		<div class="fufA" style="float:left; width: 20%">删除时间</div>
       	  		<div class="fufA" style="float:left; width: 13%">有效时间</div>
            </div> 
            
            <div class="down-share">
            <c:forEach items="${files}" var="f">
          	<table style="width:100%; padding-left: 10px;">
          		<!-- 测试数据 -->
          		<tr>
          			<td style="float:left; width: 50%; padding-left: 10px;">
          				<input type="checkbox" name="ids" class="checkfile">${f.fileName }</td>
          			<td style="float:left; width: 15%">1.36G</td>
          			<td style="float:left; width: 20%">2017-08-09 16:45</td>
          			<td style="float:left; width: 13%">7天</td>
          		</tr>
          		
          	</c:forEach>
        
          	</table>
          	
          	</div>
          	
          </div>
         
      </div> 
      </c:if>
          <!-- 空白区域从此结束 -->
    </div>
</div>

	<!-- JS Scripts-->
    <!-- jQuery Js -->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!-- Bootstrap Js -->
    <script src="assets/js/bootstrap.min.js"></script>
	 
    <!-- Metis Menu Js -->
    <script src="assets/js/jquery.metisMenu.js"></script>
    <!-- Morris Chart Js -->
    <script src="assets/js/morris/raphael-2.1.0.min.js"></script>
    <script src="assets/js/morris/morris.js"></script>
	
	
	<script src="assets/js/easypiechart.js"></script>
	<script src="assets/js/easypiechart-data.js"></script>
	
	 <script src="assets/js/Lightweight-Chart/jquery.chart.js"></script>
	
    <!-- Custom Js -->
    <script src="assets/js/custom-scripts.js"></script>
    <script src="js/recycle.js"></script>
    
    <script type="text/javascript">
    $(function() {
		var ids = document.getElementsByName("ids");
		var recycleCount = ids.length;
	})
    
    </script>
</body>
</html>