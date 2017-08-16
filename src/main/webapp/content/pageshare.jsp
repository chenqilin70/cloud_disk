<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="css/pageshare.css">
</head>
<body>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="myheader">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <span class="fontcolor">分享文件(夹):</span>
	        <input type="hidden" id="myshareurl" value="">
	        <table>
	        	<tr>
	        	<td class="sharepagehead" onclick="creatshare()"  onmouseover="chagecolor(this)" onmouseout="recolor(this)" id="changetohand"><h4>链接分享</h4></td>
	        	<td class="sharepagehead" onclick="sendtofriend()" onmouseover="chagecolor(this)" onmouseout="recolor(this)" id="changetohand"><h4>发给好友</h4></td>
	        	<td class="sharepagehead" onclick="sendtosina()" onmouseover="chagecolor(this)" onmouseout="recolor(this)" id="changetohand"><h4>发到社区</h4></td>
	        	</tr>
	        </table>
	      </div>
	      <div class="modal-body" id="sharecontent">
	      	<div id="sharelink" style="display: none">
	      		<div id="share1">
	      		<div class="sharepagelinkdiv">
	      			<table>
	      				<tr>
		      				<td style="width: 80px;height: 60px;color:#808080;" align="right">分享形式:</td>
		      				<td style="width: 30px;"></td>
		      				<td align="center" style="width: 30px;"><input type="radio" id="radio1" name="linksradio" checked="checked" value="1"></td>
		      				<td align="center" style="width: 80px;color:#808080;">加密分享</td>
		      				<td align="left" style="width: 350px;color:#808080;">仅限拥有密码者可查看，更加隐私安全</td>
	      				</tr>
	      				<tr>
	      					<td></td>
	      					<td style="width: 30px;height: 60px"></td>
	      					<td align="center" style="width: 30px;"><input type="radio" id="radio2" name="linksradio" value="2"></td>
	      					<td align="center" style="width: 80px;color:#808080;">公开分享</td>
	      					<td align="left" style="width: 350px;color:#808080;">任何人可查看或下载，同时出现在您的<a href="#" style="color: #">个人主页</a></td>
	      				</tr>
	      				<tr>
	      					<td style="width: 80px;height: 60px;color:#808080;" align="right">有效期:</td>
	      					<td style="width: 30px"></td>
	      					<td align="left" class="fontcolor" colspan="3">
		      					<select id="timerange">
		      						<option value="0">永久有效</option>
		      						<option value="7">7天有效</option>
		      						<option value="1">1天有效</option>
		      					</select> 
	      					</td>
	      				</tr>
	      			</table>
	      		</div>
		      	<div class="myfooter">
		        <button type="button" class="sharebtn" onmouseover="chagecolor(this)" onmouseout="recolor(this)" onclick="createlinks()">创建链接</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		      	</div>
		      	</div>
		      	<div id="share2" style="display: none">
		      	<div class="sharepagelinkdiv">
		      		<table>
		      			<tr>
		      				<td align="left"><span class="fontcolor">成功创建私密链接</span></td>
		      				<td></td>
		      			</tr>
	      				<tr style="height: 80px;">
	      				<td align="center" width="450px"><input id="linksprivate" readonly="readonly" class="borderstyleright" type="text" value=""><input readonly="readonly" class="borderstyleleft" type="text" value="链接永久有效"></td>
	      				<td align="right" width="100px"><button class="sharebtnpass" onmouseover="chagecolor(this)" onmouseout="recolor(this)" onclick="copylinkandpass()">复制链接及密码</button></td>
	      				</tr>
	      				<tr>
	      					<td colspan="2"><input style="border: none;width: 100px;color: #808080;" readonly="readonly" value="提取密码:"><input id="passwd"class="borderpassword" value="" readonly="readonly"></td>
	      				</tr>
	      				<tr style="height: 60px;">
	      					<td colspan="2"><span style="color: #808080;">您可以将链接发送给qq好友进行分享</span></td>
	      				</tr>
	      				<tr style="height: 60px;">
	      					<td colspan="2"><input type="text" style="border: none;width: 100px;color: #808080; display: none" id="successinfo" readonly="readonly" value="复制成功:"></td>
	      				</tr>
	      				<tr>
	      					<td colspan="2"><input type="text" class="successshow" readonly="readonly" id="successtext"></td>
	      				</tr>
	      			</table>
		      	</div>
		      	<div class="myfooter">
		        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="creatshare()">关闭</button>
		      	</div>
		      	</div>
		      	<div id="share3" style="display: none">
		      	<div class="sharepagelinkdiv">
		      		<table>
		      			<tr style="height: 60px;">
		      				<td align="left"><span class="fontcolor">成功创建公共链接</span></td>
		      				<td></td>
		      			</tr>
	      				<tr style="height: 60px;">
	      				<td align="center" width="450px"><input id="linkscommon" readonly="readonly" class="borderstyleright" type="text" value=""><input readonly="readonly" class="borderstyleleft" type="text" value="链接永久有效"></td>
	      				<td align="right" width="100px"><button class="sharebtn" onmouseover="chagecolor(this)" onmouseout="recolor(this)" onclick="copylinkcommon()">复制链接</button></td>
	      				</tr>
	      				<tr style="height: 60px">
	      					<td colspan="2"><span style="color: #808080;">1.生成文件下载链接 </span></td>
	      				</tr>
	      				<tr style="height: 60px">
	      					<td colspan="2"><span style="color: #808080;">2.把链接通过QQ、微博、人人网、QQ空间等方式分享给好友</span></td>
	      				</tr>
	      			</table>
		      	</div>
		      	<div class="myfooter">
		        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="creatshare()">关闭</button>
		      	</div>
		      	</div>
	      	</div>
	      	<div id="sharefriend" style="display: none">
	      		<span class="fontcolor">选择您要分享的好友</span>
	      		<div class="sharepagefreinddiv">
	      			<div class="freindlist">
	      				<div class="selectdfriendiv">
	      					<table class="recentlyshare">
	      						<tr id="retitle">
	      							<th class="recenttitle1" id="frontinfo"><span id="frontimg" class="glyphicon glyphicon-chevron-right" aria-hidden="rue" ></span></th>
	      							<th class="recenttitle1" colspan="2">最近分享()</th>
	      						</tr>
	      						<tr id="robj" style="display: none;" onclick="reselectone()">
	      							<td></td>
	      							<td class="fobj1"><img alt="" id="friendimg" src="imgs/zhangsan.jpg"><span class="namefont">张三</span></td>
	      							<td class="fobj2"><div id="reselectrecent" class="selectcontent"><a id="selectrecenton1"></a><a id="selectrecenton2"></a></div></td>
	      						</tr>
	      					</table>
	      					<table class="recentlyshare" >
	      						<tr id="grouptitle">
	      							<th class="recenttitle1" id="gfrontinfo"><span id="gfrontimg" class="glyphicon glyphicon-chevron-right" aria-hidden="rue" ></span></th>
	      							<th class="recenttitle1" colspan="2">群组()</th>
	      						</tr>
	      						<tr id="gobj" style="display: none;" onclick="grselectone()">
	      							<td></td>
	      							<td class="fobj1"><img alt="" id="friendimg" src="imgs/zhangsan.jpg"><span class="namefont">李四</span></td>
	      							<td class="fobj2"><div id="grselectrecent" class="selectcontent"><a id="selectrecenton1"></a><a id="selectrecenton2"></a></div></td>
	      						</tr>
	      					</table>
	      					<table class="recentlyshare">
	      						<tr id="friendtitle">
	      							<th class="recenttitle1" id="frfrontinfo"><span id="frfrontimg" class="glyphicon glyphicon-chevron-right" aria-hidden="rue" ></span></th>
	      							<th class="recenttitle1" colspan="2">好友()</th>
	      						</tr>
	      						<tr id="frobj" style="display: none;" onclick="frselectone()">
	      							<td></td>
	      							<td class="fobj1"><img alt="" id="friendimg" src="imgs/zhangsan.jpg"><span class="namefont">王五</span></td>
	      							<td class="fobj2"><div id="frselectrecent" class="selectcontent"><a id="selectrecenton1"></a><a id="selectrecenton2"></a></div></td>
	      						</tr>
	      					</table>
	      				</div>
	      			</div>
	      			<div class="tofreind">
	      				<div class="countinfo"><span class="countspan">已选择x个好友接收文件</span></div>
	      				<div class="friendobjdiv">
	      					<table>
	      						<tr>
	      							<td class="selectedfriendinfo"><img alt="" id="friendimg" src="imgs/zhangsan.jpg"><span class="namefont">王五</span></td>
	      							<td class="cancelfriend"><div id="" class="cancelselect"><div id="cancelcenton"></div></div></td>
	      						</tr>
	      					</table>
	      				</div>
	      			</div>
	      		</div>
		      	<div class="myfooter">
		        <button type="button" class="sharebtn" onmouseover="chagecolor(this)" onmouseout="recolor(this)">发送</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		      	</div>
	      	</div>
	      	<div id="sharesina" style="display: none">
	      		<div class="sharepagesinadiv">
	      			<table>
	      				<tr style="height: 60px;">
	      				<td align="left" width="500px" colspan="2"><input id="links" readonly="readonly" style="width: 450px;height: 33px" type="text" value=""></td>
	      				</tr>
	      				<tr style=" 40px;">
	      				<td align="left" width="500px" colspan="2"><input readonly="readonly" style="width: 450px;height: 33px;border: none;color: #808080;" type="text" value="将连接中的文件分享到微博、qq空间"></td>
	      				</tr>
	      				<tr style="height: 150px;">
	      					<td width="250" align="center">
	      						<img alt="" src="imgs/sina.jpg" onmouseover="pictureoversina(this)" onmouseout="pictureoutsina(this)" onclick="sharesina()" id="changetohand">
	      					</td>
	      					<td width="250" align="center">
	      						<img alt="" src="imgs/qqzone.jpg" onmouseover="pictureoverqq(this)" onmouseout="pictureoutqq(this)" onclick="shareqqzone()" id="changetohand">
	      					</td>
	      				</tr>
	      			</table>
	      		</div>
		      	<div class="myfooter">
		        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		      	</div>
	      	</div>
	      </div>
	    </div>
	  </div>
	</div>
<!-- jQuery Js -->
<script src="assets/js/jquery-1.10.2.js"></script>
<!-- Bootstrap Js -->
<script src="assets/js/bootstrap.min.js"></script>
<script src="js/pageshare.js"></script>
</body>
</html>