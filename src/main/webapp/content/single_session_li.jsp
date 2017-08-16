<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<li class="sessionLi" userid="${dialogue.toUser.userId}">
	<div class="sessionInfo" align="left" >
		<img class="sessionHead" src="imgs/user_head/${dialogue.toUser.headImg }"
			dialogueid="${dialogue.dialogueId}"> 
		<span class="sessionCenterInfo">
			<div>${(empty dialogue.remark)?dialogue.toUser.nickname:dialogue.remark}</div>
			<div class="latelyRecord">分享文件java笔试面试</div>
		</span> <span class="sessionTime">08-05&nbsp;12:12</span>
	</div>
</li>