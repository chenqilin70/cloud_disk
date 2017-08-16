<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<li class="friendLi"  relationshipid="${relate.relationshipId }" userid="${relate.friendUser.userId }">
	<input type="hidden" value="${relate.remark }" name="remark"   relationshipid="${relate.relationshipId }"/>
	<input type="hidden" value="${relate.friendUser.nickname }" name="nickname"  relationshipid="${relate.relationshipId }"/>
	<input type="hidden" value="${relate.relationshipId }" name="relationshipid"/>
	<input type="hidden" value="${relate.friendUser.userId }" name="userid"  relationshipid="${relate.relationshipId }"/>
	<input type="hidden" value="${relate.friendUser.headImg }" name="headImg"  relationshipid="${relate.relationshipId }"/>
	<div class="friendInfo" align="left">
		<img class="friendHeadInPane"
		 src="imgs/user_head/${relate.friendUser.headImg }" 
		 relationshipid="${relate.relationshipId }" >
		<span class="friendCenterInfo" relationshipid="${relate.relationshipId }" > 
			${(empty relate.remark)?relate.friendUser.nickname:relate.remark} 
		</span>
	</div>
</li>
<script type="text/javascript">
(function(){
	var $friendLi=$(".friendLi[relationshipid='${relate.relationshipId}']");
	registerOverAndOut($friendLi, {
		"backgroundColor":"rgba(62,62,62,0.08)"
	}, {
		"backgroundColor":"#ffffff"
	});
	registerOverAndOut($friendLi.find(".friendHeadInPane"),function(e){headOver.call(this,e);},function(e){headOut.call(this,e)});
	$friendLi.click(function(){showFriendMain.call(this)});
})();
</script>