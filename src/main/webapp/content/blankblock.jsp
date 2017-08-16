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
	<script type="text/javascript">
		function surecopyto(){
			var i="";
			var select=document.getElementsByName("check");
			alert(select);
			for(var x in select)
				{
					if(select[x].checked==true&&select[x].type=='checkbox')
						{
							i=i+select[x].value;
						}
				}
					alert(i);
			 window.location.href="file/surecopyto?fileid="+i;
		}
	</script>
</head>
<body>
<div id="wrapper">
	<p><a href="file/fatherfilename">点击选择复制到：</a><p>
<table class="table table-hover" style="font-size: 12px;" id="wenjian-hover">
    <c:forEach items="${files }" var="f">
      <tr id="box${f.fileId }"   class="active" >
	  <td width="44%" >
	  	<input  name=check value=${f.fileId }  type="checkbox"  /><a><i class="iconfont icon-xinjianwenjianjia" id="i_xinjianwenjianjia" style="padding-right: 5px;"></i></a>
	  	<span id="mysourse${f.fileId }" >${f.fileName }</span>
	  </td>
  </tr>
    </c:forEach>
</table>
<button type="button" onclick="surecopyto()" >确定</button>
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