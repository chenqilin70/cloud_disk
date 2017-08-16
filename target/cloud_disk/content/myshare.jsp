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
    <title>我的分享</title>
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
	<link rel="stylesheet" type="text/css" href="css/myshare.css">





</head>
<body>
<div id="wrapper">

	<jsp:include page="template.jsp" flush="true"></jsp:include>

	<div id="page-wrapper">
          <!-- 空白区域从此开始 -->
          <div class="myshare">
          	<div class="up" style="padding-top: 20px;">
          		<div class="up-left" style="float:left;padding-left: 10px;">链接分享</div>
       	  		<div class="up-right" style="float:right">已加载10个</div>
          	</div>
          <!-- 文件分享正文 -->
         <div class="down-text" style="padding-top: 30px;">
         
         	<div class="down">
       	    	<div class="fufA" style="float:left; width: 40%; padding-left: 10px;" >
       	    		<input id="all" type="checkbox" class="share-count" onclick="allselect()"><span id="change">分享文件</span></div>
       	    	<div class="fufA" style="float:left; width: 10%">浏览次数</div>
       	  		<div class="fufA" style="float:left; width: 10%">保存次数</div>
       	  		<div class="fufA" style="float:left; width: 10%">下载次数</div>
       	  		<div class="fufA" style="float:left; width: 20%">分享时间</div>
       	  		<div class="fufA" style="float:left; width: 9%">失效时间</div>
            </div> 
            
            
             <c:forEach items="${mysharefiles}" var="msf">
            <div class="down-share">
          	<table style="width:100%; padding-left: 10px;">
          		<!-- 测试数据 -->
          		<tr>
          			<td style="float:left; width: 40%; padding-left: 10px;">
          				<input type="checkbox" name="ids">${msf.fileName}</td>
          			<td style="float:left; width: 10%">${msf.scanCount}</td>
          			<td style="float:left; width: 10%">${msf.saveCount}</td>
          			<td style="float:left; width: 10%">${msf.downloadCount}</td>
          			<td style="float:left; width: 20%">${msf.shareTime}</td>
          			<td style="float:left; width: 9%">${msf.timeRange}</td>
          		</tr>
          		</c:forEach>
          		
          	
          		
          		
          	</table>
          	
          	</div>
          	
          </div>
         
      </div>
       	  
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
    
    <script src="js/myshare.js"></script>
    
    
</body>
</html>