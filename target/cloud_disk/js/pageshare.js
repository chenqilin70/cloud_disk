var url;
var fileid;
function creatsharefirst(f) {
	fileid=f;
	$("#sharelink")[0].style.display="block";
	$("#share1")[0].style.display="block";
	$("#share2")[0].style.display="none";
	$("#share3")[0].style.display="none";
	$("#successinfo")[0].style.display="none";
	$("#successtext")[0].style.display="none";
	$("#sharefriend")[0].style.display="none";
	$("#sharesina")[0].style.display="none";
	$("#radio1").prop("checked",true);
}

function creatshare() {
	$("#sharelink")[0].style.display="block";
	$("#share1")[0].style.display="block";
	$("#share2")[0].style.display="none";
	$("#share3")[0].style.display="none";
	$("#successinfo")[0].style.display="none";
	$("#successtext")[0].style.display="none";
	$("#sharefriend")[0].style.display="none";
	$("#sharesina")[0].style.display="none";
	$("#radio1").prop("checked",true);
}
function sendtofriend() {
	$("#sharelink")[0].style.display="none";
	$("#share1")[0].style.display="none";
	$("#share2")[0].style.display="none";
	$("#share3")[0].style.display="none";
	$("#successinfo")[0].style.display="none";
	$("#successtext")[0].style.display="none";
	$("#sharefriend")[0].style.display="block";
	$("#sharesina")[0].style.display="none";
	$("#radio1").prop("checked",true);
}
function sendtosina() {
	$("#sharelink")[0].style.display="none";
	$("#share1")[0].style.display="none";
	$("#share2")[0].style.display="none";
	$("#share3")[0].style.display="none";
	$("#successinfo")[0].style.display="none";
	$("#successtext")[0].style.display="none";
	$("#sharefriend")[0].style.display="none";
	$("#sharesina")[0].style.display="block";
	$("#radio1").prop("checked",true);
	$("#links").val(url);
}

function createlinks() {
	if($("#radio1").prop("checked")){
			$("#share1")[0].style.display="none";
			$("#share2")[0].style.display="block";
			$("#share3")[0].style.display="none";
			$("#successinfo")[0].style.display="none";
			$("#successtext")[0].style.display="none";
			var pw=""+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
			var rand=""+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
			url="http://localhost:8077/cloud_disk/content/sharedpage/"+fileid+"/"+rand;
			$.ajax({url:"content/createshare/privately/"+$("#radio1").val()+"/"+pw+"/"+$("#timerange").val()+"/"+fileid+"/"+rand+""});
			$("#linksprivate").val(url);
			$("#passwd").val(pw);
	}else{
		$("#share1")[0].style.display="none";
		$("#share2")[0].style.display="none";
		$("#share3")[0].style.display="block";
		$("#successinfo")[0].style.display="none";
		$("#successtext")[0].style.display="none";
		var rand=""+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
		url="http://localhost:8077/cloud_disk/content/sharedpage/"+fileid+"/"+rand;
		$.ajax({url:"content/createshare/common/"+$("#radio2").val()+"/"+$("#timerange").val()+"/"+fileid+"/"+rand+""});
		$("#linkscommon").val(url);
		
	}
}

function chagecolor(t) {
	t.style.color="#ff4444";
}
function recolor(t) {
	t.style.color="#808080";
}

function pictureoversina(t) {
	t.src="imgs/sinac.jpg";
}

function pictureoutsina(t) {
	t.src="imgs/sina.jpg";
}

function pictureoverqq(t) {
	t.src="imgs/qqzonec.jpg";
}

function pictureoutqq(t) {
	t.src="imgs/qqzone.jpg";
}
function sharesina() {
	window.open("http://service.weibo.com/share/share.php?appkey=&title="+$("#links").val()+"&url=&pic=&searchPic=false&style=simple");
}

function shareqqzone() {
	window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=文件名&url="+$("#links").val()+"&title=我的网分享&site=");
}

function copylinkandpass() {
	$("#successtext")[0].style.display="block";
	$("#successinfo")[0].style.display="block";
	$("#successtext").val("链接: "+$("#linksprivate").val()+" 密码: "+$("#passwd").val());
	$("#successtext").select();
	document.execCommand("Copy");
}

function copylinkcommon() {
	$("#linkscommon").select();
	document.execCommand("Copy");
}

var rec=1;
$("#retitle").click(function() {
	if(rec==1){
		$("#robj")[0].style.display="table-row";
		$("#frontimg").remove();
		$("#frontinfo").append("<span id='frontimg' class='glyphicon glyphicon-chevron-down' aria-hidden='true' ></span>");
		rec=0;
	}else{
		$("#robj")[0].style.display="none";
		$("#frontimg").remove();
		$("#frontinfo").append("<span id='frontimg' class='glyphicon glyphicon-chevron-right' aria-hidden='true' ></span>");
		rec=1;
	}
});

var gro=1;
$("#grouptitle").click(function() {
	if(gro==1){
		$("#gobj")[0].style.display="table-row";
		$("#gfrontimg").remove();
		$("#gfrontinfo").append("<span id='gfrontimg' class='glyphicon glyphicon-chevron-down' aria-hidden='true' ></span>");
		gro=0;
	}else{
		$("#gobj")[0].style.display="none";
		$("#gfrontimg").remove();
		$("#gfrontinfo").append("<span id='gfrontimg' class='glyphicon glyphicon-chevron-right' aria-hidden='true' ></span>");
		gro=1;
	}
});

var fri=1;
$("#friendtitle").click(function() {
	if(gro==1){
		$("#frobj")[0].style.display="table-row";
		$("#frfrontimg").remove();
		$("#frfrontinfo").append("<span id='frfrontimg' class='glyphicon glyphicon-chevron-down' aria-hidden='true' ></span>");
		gro=0;
	}else{
		$("#frobj")[0].style.display="none";
		$("#frfrontimg").remove();
		$("#frfrontinfo").append("<span id='frfrontimg' class='glyphicon glyphicon-chevron-right' aria-hidden='true' ></span>");
		gro=1;
	}
});

var reselect=1;
function reselectone() {
	if(reselect==1){
		$("#reselectrecent").css("background-color","#438600");
		$("#reselectrecent").css("border-color","#ffffff");
		reselect=0;
	}else{
		$("#reselectrecent").css("background-color","#ffffff");
		$("#reselectrecent").css("border-color","#80880");
		reselect=1;
	}
}

var grselect=1;
function grselectone() {
	if(grselect==1){
		$("#grselectrecent").css("background-color","#438600");
		$("#grselectrecent").css("border-color","#ffffff");
		grselect=0;
	}else{
		$("#grselectrecent").css("background-color","#ffffff");
		$("#grselectrecent").css("border-color","#808080");
		grselect=1;
	}
}

var frselect=1;
function frselectone() {
	if(frselect==1){
		$("#frselectrecent").css("background-color","#438600");
		$("#frselectrecent").css("border-color","#ffffff");
		frselect=0;
	}else{
		$("#frselectrecent").css("background-color","#ffffff");
		$("#frselectrecent").css("border-color","#808080	");
		frselect=1;
	}
}


