registerOverAndOut(".shareFileInFriendMain", {
	"backgroundColor":"#F35341",
	"borderColor":"#F35341"
}, {
	"backgroundColor":"#F36A5A",
	"borderColor":"#F36A5A"
});
$(".deleteFriendInFriendMain").click(function(){
	deleteFriendHint.call(this);
});
$(".shareFileInFriendMain").click(function(){
	var userid=$(this).attr("userid");
	var flag=false;
	$(".sessionUl").each(function(){
		if($(this).attr("userid")==userid){
			flag=true;
			return false;
		}
	});
	if(flag){
		
	}else{
		
	}
	
	$.ajax({
		url:contextPath+"/getDialogueByFirendId",
		type:"post",
		data:{
			"userId":userid
		},
		error:function(){
			showTips("请检查网络");
		},
		success:function(data){
			showTips(data)
		}
	})
});