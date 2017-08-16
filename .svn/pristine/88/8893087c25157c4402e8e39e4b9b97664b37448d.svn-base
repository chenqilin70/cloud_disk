<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
	<link rel="stylesheet" type="text/css" href="assets/js/layui/css/layui.css" >
</head>
<body>
<div id="wrapper">

	<jsp:include page="newtemplate.jsp" flush="true"></jsp:include>
	<div id="page-wrapper">
	
	<table class="table table-hover" style="font-size: 12px;" id="wenjian-hover">
  	<tr class="active" >
	  	<td width="1%" 	><input id="file"  type="checkbox"  onclick="selectall()" /></td>
	  	<td width="59%" colspan="1" ><span id="filename">文件名</span></td>
		<td width="10%">大小</td>
	 	<td width="30%">修改日期</td>
 	</tr>
    <c:forEach items="${file }" var="f">
    <tr id="box${f.fileId }"  class="active" onmouseover="xianshi(${f.fileId })" onmouseout="yincang(${f.fileId })">
	  <td width="1%"><input id="file${f.fileId }" name="file" type="checkbox"></td>
	  <td width="44%">
	  <c:if test="${f.type eq 0}">
	  	<i class="iconfont icon-xinjianwenjianjia" id="i_xinjianwenjianjia" style="padding-right: 5px;"></i>
	  </c:if>
	  <c:if test="${f.type eq 1}">
	  		<i class="iconfont icon-wenjian" id="i_wenjian" style="padding-right: 5px;"></i>
	  </c:if>
	  <span id="mysourse${f.fileId }"><a id="filename${f.fileId }" href="content/getsharedfile/${f.fileId}" style="text-decoration: none;">${f.fileName }</a></span>
	  </td>
	  <td width="15%">--</td>
	  <td width="25%">2017-8-9/14:06</td>
  	</tr>
    </c:forEach>
</table>
	
	
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

</body>
</html>