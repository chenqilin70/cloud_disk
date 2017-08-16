<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<c:if test="${loginedUserId==1 }">
	<input type="hidden" value="2" id="targetId"/>
</c:if>
<c:if test="${loginedUserId==2 }">
	<input type="hidden" value="1" id="targetId"/>
</c:if>
<table class="chatTable" border="0" cellspacing="0" cellspadding="0">
	<tbody>
		<tr>
			<td class="chatWinHead" align="center">
				陈麒麟
			</td>
		</tr>
		<tr>
			<td>
				
			</td>
		</tr>
		<tr>
			<td class="chatWinFoot">
			 <button type="button" class="custombtn shareFileInChat">分享文件</button>
			<div class="text-left emojiBox">
			    <p class="lead emoji-picker-container">
			      <input type="email" id="messageInput" class="form-control" placeholder="输入文字消息" data-emojiable="true">
			    </p>
		    </div>
		    <button type="button" class="custombtn sendMessage">发送</button>
			</td>
		</tr>
	</tbody>
</table>
