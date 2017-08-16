<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<base href="<%=(request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/") %>" />
<title>Insert title here</title>
</head>
<body>
<div>
<c:choose>  

        <c:when test="${sonfile.realPath ne null }">  
        <!-- 图片 -->  
        <c:if test="${sonfile.type == 3 }">  
            <img style="width: 200px;height: 200px" src="${sonfile.realPath }/${sonfile.fileName}"/>  
        </c:if>  
        <!-- 视频 -->  
        <c:if test="${sonfile.type== 2 }">  
            <video autoplay="autoplay" controls="controls" src="${sonfile.realPath }/${sonfile.fileName}" loop="-1"></video>  
        </c:if>  
        <!-- 文档 -->  
        <c:if test="${sonfile.type == 5 }">  
            <object classid="clsid:CA8A9780-280D-11CF-A24D-444553540000" border="0">       
                <param name="_Version" value="65539">       
                <param name="_ExtentX" value="20108">       
                <param name="_ExtentY" value="10866">       
                <param name="_StockProps" value="0">       
                <param name="SRC" value="${sonfile.realPath }/${sonfile.fileName}">       
                <object data="${sonfile.realPath }/${sonfile.fileName}" type="application/pdf" width="99%" height="630" class="hiddenObjectForIE">        
                </object>       
            </object>    
        </c:if>  
        </c:when>  
        <c:otherwise>  
            <div style="margin: auto; padding-top: 20px;">文件找不到了！</div>  
        </c:otherwise>  
    </c:choose>  
   </div>
</body>
</html>