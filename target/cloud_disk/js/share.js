var contextPath=$("#contextPath").val();
$(".tabContent , .createGroupDiv").mCustomScrollbar({
	theme:"dark"
});
(function(){
	var $tabContent=$(".tabContent");
	var $leftBox=$(".leftBox");
	window.onresize = function(){
		$tabContent.css("height",($leftBox[0].offsetHeight-76)+"px");
	};
	$tabContent.css("height",($leftBox[0].offsetHeight-76)+"px");
})();
/*判断是否为最外面的元素被移出了*/
function isWrapElement(e, thisElement) {
    $relatedElement = e.relatedTarget;
    if ($relatedElement == null) {
        return true;
    }
    var flag = thisElement.compareDocumentPosition($relatedElement);
    return !(flag == 0 || flag == 20);
}
/*注册鼠标移入移出样式*/
function registerOverAndOut(selector,over,out){
	var overFun=null,outFun=null;
	if(over!=null){
		if(typeof over=="object"){
			overFun=function(e){
				if(isWrapElement(e,this)){
					$(this).css(over);
				}
			};
		}else if(typeof over=="function"){
			overFun=over;
		};
	}
	if(out!=null){
		if(typeof out=="object"){
			outFun=function(e){
				if(isWrapElement(e,this)){
					$(this).css(out);
				}
			};
		}else if(typeof out=="function"){
			outFun=out;
		}
	}
	if(overFun!=null){
		$(selector).mouseover(overFun);
	}
	if(outFun!=null){
		$(selector).mouseout(outFun);
	}
}
$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: contextPath+'/emoji_picker/img/',
      popupButtonClasses: 'fa fa-smile-o'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });


//websocket初始化
(function(){
    try{  
        socket = new WebSocket('ws://localhost:8080/cloud_disk/ChatWebSocketServlet');   
    }catch(e){  
        alert("抱歉，您的浏览器不支持html5，请使用IE10或者最新版本的谷歌、火狐等浏览器！")
    }  
    //打开Socket   
    socket.onopen = function(event) {  
        console.log("onopen-->连接成功");
        console.log(event)
         
    };  
    socket.onmessage = function(event) {  
    	console.log("onmessage-->有消息了");
        console.log(event) 
    };  

    socket.onclose = function(event) {  
    	console.log("onclose-->关闭了");
        console.log(event) 
    }; 
    $(".sendMessage").click(function(){
    	socket.send(JSON.stringify({"targetId":$("#targetId").val(),"content":$("#messageInput").val()}));
    });
   
})();



$("#sessionBtn").click(function(){
	$("#session").css("display","block");
	$("#friends").css("display","none");
});
$("#friendBtn").click(function(){
	$("#friends").css("display","block");
	$("#session").css("display","none");
});



registerOverAndOut(".custombtn", {
	"backgroundColor":"#F35341",
	"borderColor":"#F35341"
}, {
	"backgroundColor":"#F36A5A",
	"borderColor":"#F36A5A"
});
registerOverAndOut(".sessionLi , .friendLi", {
	"backgroundColor":"rgba(62,62,62,0.08)"
}, {
	"backgroundColor":"#ffffff"
});
$(".createGroupBtn").click(function(){
	
	$("#createGroupModal").modal('show');
	
});
$(".createGroupLi").click(function(){
	$(this).find(".createGroupCheckbox").iCheck('toggle'); 
});
$(".createGroupCheckbox").on('ifChecked', function(event){
	var userid=$(this).attr("userid");
	$(".selectedUl").find("li[userid="+userid+"]").css("display","block");
});
$(".createGroupCheckbox").on('ifUnchecked', function(event){
	var userid=$(this).attr("userid");
	$(".selectedUl").find("li[userid="+userid+"]").css("display","none");
});
$(".icon-shanchu").click(function(){
	var userid=$(this).attr("userid");
	$(".selectedUl").find("li[userid="+userid+"]").css("display","none");
	$(".createGroupCheckbox[userid='"+userid+"']").iCheck('uncheck');
});
registerOverAndOut(".icon-shanchu", {
	"color":"#CA3F2F"
}, {
	"color":"#F34733"
});
$('.addFriendBtn').click(function(){
	var $addFriendModal=$("#addFriendModal");
	$addFriendModal.find(".searchResult").css("display","none");
	$addFriendModal.find(".copyPersonLinkBox").css("display","block");
	$(".searchFriendInput").val("")
	$addFriendModal.modal('show');
});
$('#addFriendModal').on('shown.bs.modal', function (e) {
	
});
var clipboard = new Clipboard('.custombtn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});

registerOverAndOut(".sessionHead , .friendHeadInPane", function(){
	var $userTipBox=$(".userTipBox");
	var nickname=$(this).attr("nickname");
	var remark=$(this).attr("remark");
	var headImg=$(this).attr("src");
	var relationshipid=$(this).attr("relationshipid");
	$userTipBox.find(".userHeadInTip").attr("src",headImg);
	$userTipBox.find(".remarkInTip").find("span").text(remark==""?nickname:remark);
	$userTipBox.find(".nicknameInTip").find("span").text(nickname);
	$userTipBox.find(".accountInTip").find("span").text(nickname);
	$userTipBox.find(".icon-combinedshape").attr("relationshipid",relationshipid);
	var $sessionLi=$(this).parent().parent();
	var offsetTop=($sessionLi[0].offsetTop);
	var redundantTop=Number($("#mCSB_1_container").css("top").replace(/px/,""));
	var offset=offsetTop+redundantTop;
	$userTipBox.stop(true,true).css("display","block").css("top",(offset-25)+"px").css("left","75px");
	$userTipBox.animate({
		"opacity":"1"
	},'fast');
}, function(e){
	if(isWrapElement(e, $(".userTipBox")[0])){
		var index=Number($(this).attr("index"));
		var $userTipBox=$(".userTipBox");
		$userTipBox.stop(true,true).animate({
			"opacity":"0"
		},'fast',function(){
			$userTipBox.css("display","none").css("top","0").css("left","0");
		});
	}
});
registerOverAndOut(".userTipBox", null, {
	"display":"none"
});
registerOverAndOut(".icon-combinedshape",{
	"color":"#F36A5A"
},{
	"color":"rgb(102, 102, 102)"
});
$(".icon-combinedshape").click(function(){
	var $addRemarkModal=$("#addRemarkModal");
	$addRemarkModal.find(".saveRemarkBtn").attr("relationshipid",$(this).attr("relationshipid"))
	$addRemarkModal.modal('show');
});
$('#addRemarkModal').on('show.bs.modal', function (e) {
  $(".remarkInput").val("");
});
var $searchFriendBody=$(".searchFriendBody");
var t1;
$searchFriendBody.find(".searchFriend").click(function(){
	var keyStr=$searchFriendBody.find(".searchFriendInput").val();
	var $inputSearchKeyTip=$searchFriendBody.find(".inputSearchKeyTip");
	$inputSearchKeyTip.css("color","");
	window.clearInterval(t1);
	var $loading=$(".loading");
	
	$searchFriendBody.find(".copyPersonLinkBox").css("display","none");
	$searchFriendBody.find(".searchResult").css("display","none");
	$loading.css("display","block");
	
	if(keyStr!=""){
		$.ajax({
			url:contextPath+"/searchFriend",
			type:"post",
			dataType:"json",
			data:{
				"nickname":keyStr
			},
			error:function(){
				$loading.css("display","block");
				var $addFriendModal=$("#addFriendModal");
				$addFriendModal.find(".searchResult").css("display","none");
				$addFriendModal.find(".copyPersonLinkBox").css("display","block");
				alert("请检查网络！");
			},
			success:function(data){
				$loading.css("display","none")
				$(".copyPersonLinkBox").css("display","none");
				var $searchResult=$(".searchResult");
				$searchResult.css("display","block");
				if(data.userId==null){
					$searchResult.find(".noResult").css("display","block");
					$searchResult.find(".haveResult").css("display","none");
				}else{
					$searchResult.find(".noResult").css("display","none");
					$searchResult.find(".resultHead").attr("src",contextPath+"/imgs/user_head/"+data.headImg);
					$searchResult.find(".resultNickname").text(data.nickname);
					var $launchSession=$searchResult.find(".launchSession");
					var $addFriendBtn=$searchResult.find(".addFriendBtnInModel");
					var $resultHr=$searchResult.find(".resultHr");
					if(data.who=="FRIEND"){
						$launchSession.css("display","block").attr("userid",data.userId);
						$addFriendBtn.css("display","none").attr("userid","");
						$resultHr.css("display","");
					}else if(data.who=="STRANGER"){
						$launchSession.css("display","none").attr("userid","");
						$addFriendBtn.css("display","block").attr("userid",data.userId);
						$resultHr.css("display","");
					}else if(data.who=="ME"){
						$launchSession.css("display","none").attr("userid","");
						$addFriendBtn.css("display","none").attr("userid","");
						$searchResult.find(".resultNickname").append("(自己)");
						$resultHr.css("display","none");
					}
					$searchResult.find(".haveResult").css("display","block");
				}
			}
		});
	}else{
		var flag=1;
		t1=window.setInterval(function(){
			if(flag%2!=0){
				$inputSearchKeyTip.css("color","#F35341");
			}else{
				$inputSearchKeyTip.css("color","");
			}
			flag++;
			if(flag>=12){
				$inputSearchKeyTip.css("color","");
				window.clearInterval(t1);
			}
		}, 300);
	}
	
});
$(".addFriendBtnInModel").click(function(){
	var userid=$(this).attr("userid");
	$.ajax({
		url:contextPath+"/addRelationship",
		type:"post",
		dataType:"json",
		data:{
			"friendUser.userId":userid
		},
		error:function(){
			alert("请检查网络！");
		},
		success:function(data){
			$("#addFriendModal").modal('hide');
			if(data.relationshipId!=null){
				showTips("添加好友成功！");
			}else{
				showTips("添加好友失败！");
			}
		}
	});
});
function showTips(str){
	var $tips=$(".tips");
	$tips.text(str).css("display","block");
	var offsetLeft=(1-(Number($tips[0].offsetWidth)/Number($("html")[0].offsetWidth)))/2.0;
	$tips.css("left",offsetLeft*100+"%");
	$tips.stop(true,true).animate({
		"opacity":"1"
	},'slow',function(){
		window.setTimeout(function(){
			$tips.stop(true,true).animate({
				"opacity":"0"
			},'slow',function(){
				$tips.css("display","none");
			});
		}, 5000);
	});
	
}
$("#copyPersonalLinkBtn").click(function(){
	showTips("复制到剪切板了，粘贴给您的朋友吧。");
});
var t2;
$(".saveRemarkBtn").click(function(){
	var $addRemarkModal=$("#addRemarkModal");
	var inputRemark=$addRemarkModal.find(".remarkInput").val();
	var $remarkTextTip=$addRemarkModal.find(".remarkTextTip");
	var relationshipid=$(this).attr("relationshipid");
	window.clearInterval(t2);
	if(inputRemark.length<=10){
		$.ajax({
			url:contextPath+"/addRemark",
			type:"post",
			data:{
				"relationshipId":relationshipid,
				"remark":inputRemark
			},
			error:function(){
				alert("请检查网络！")
			},
			success:function(data){
				if(data=="true"){
					var text="";
					if(inputRemark.length==0){
						text=$(".friendHeadInPane[relationshipid="+relationshipid+"]").attr("nickname");
					}else{
						text=inputRemark;
					}
					$(".friendCenterInfo[relationshipid="+relationshipid+"]").text(text);
				}else{
					showTips("备注失败！");
				}
			}
		});
		$("#addRemarkModal").modal('hide');
	}else{
		var flag=1;
		t2=window.setInterval(function(){
			if(flag%2!=0){
				$remarkTextTip.css("color","#F35341");
			}else{
				$remarkTextTip.css("color","");
			}
			flag++;
			if(flag>=12){
				$remarkTextTip.css("color","");
				window.clearInterval(t2);
			}
		}, 300);
	}
});
$(".friendLi").click(function(){
	console.log(1231);
})























