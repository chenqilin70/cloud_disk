﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE nav PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<nav class="navbar navbar-default top-navbar" role="navigation">
<div class="navbar-header">
	<button type="button" class="navbar-toggle" data-toggle="collapse"
		data-target=".sidebar-collapse">
		<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
		<span class="icon-bar"></span> <span class="icon-bar"></span>
	</button>
	<a class="navbar-brand" href="index.html"> <i
		class="fa iconfont icon-baiduyunpan"></i>&nbsp;&nbsp;百度云盘
	</a>

	<div id="sideNav" href="">
		<i class="fa fa-bars icon"></i>
	</div>
</div>

<ul class="nav navbar-top-links navbar-right">
	<li class="dropdown"><a class="dropdown-toggle"
		data-toggle="dropdown" href="#" aria-expanded="false"> <i
			class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
	</a>
		<ul class="dropdown-menu dropdown-messages">
			<li><a href="#">
					<div>
						<strong>John Doe</strong> <span class="pull-right text-muted">
							<em>Today</em>
						</span>
					</div>
					<div>Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s...</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<strong>John Smith</strong> <span class="pull-right text-muted">
							<em>Yesterday</em>
						</span>
					</div>
					<div>Lorem Ipsum has been the industry's standard dummy text
						ever since an kwilnw...</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<strong>John Smith</strong> <span class="pull-right text-muted">
							<em>Yesterday</em>
						</span>
					</div>
					<div>Lorem Ipsum has been the industry's standard dummy text
						ever since the...</div>
			</a></li>
			<li class="divider"></li>
			<li><a class="text-center" href="#"> <strong>Read
						All Messages</strong> <i class="fa fa-angle-right"></i>
			</a></li>
		</ul> <!-- /.dropdown-messages --></li>
	<!-- /.dropdown -->
	<li class="dropdown"><a class="dropdown-toggle"
		data-toggle="dropdown" href="#" aria-expanded="false"> <i
			class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
	</a>
		<ul class="dropdown-menu dropdown-tasks">
			<li><a href="#">
					<div>
						<p>
							<strong >Task 1</strong> <span class="pull-right text-muted">60%
								Complete</span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-success" role="progressbar"
								aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
								style="width: 60%">
								<span class="sr-only">60% Complete (success)</span>
							</div>
						</div>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<p>
							<strong>Task 2</strong> <span class="pull-right text-muted">28%
								Complete</span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-info" role="progressbar"
								aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"
								style="width: 28%">
								<span class="sr-only">28% Complete</span>
							</div>
						</div>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<p>
							<strong>Task 3</strong> <span class="pull-right text-muted">60%
								Complete</span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-warning" role="progressbar"
								aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
								style="width: 60%">
								<span class="sr-only">60% Complete (warning)</span>
							</div>
						</div>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<p>
							<strong>Task 4</strong> <span class="pull-right text-muted">85%
								Complete</span>
						</p>
						<div class="progress progress-striped active">
							<div class="progress-bar progress-bar-danger" role="progressbar"
								aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
								style="width: 85%">
								<span class="sr-only">85% Complete (danger)</span>
							</div>
						</div>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a class="text-center" href="#"> <strong>See
						All Tasks</strong> <i class="fa fa-angle-right"></i>
			</a></li>
		</ul> <!-- /.dropdown-tasks --></li>
	<!-- /.dropdown -->
	<li class="dropdown"><a class="dropdown-toggle"
		data-toggle="dropdown" href="#" aria-expanded="false"> <i
			class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
	</a>
		<ul class="dropdown-menu dropdown-alerts">
			<li><a href="#">
					<div>
						<i class="fa fa-comment fa-fw"></i> New Comment <span
							class="pull-right text-muted small">4 min</span>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<i class="fa fa-twitter fa-fw"></i> 3 New Followers <span
							class="pull-right text-muted small">12 min</span>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<i class="fa fa-envelope fa-fw"></i> Message Sent <span
							class="pull-right text-muted small">4 min</span>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<i class="fa fa-tasks fa-fw"></i> New Task <span
							class="pull-right text-muted small">4 min</span>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a href="#">
					<div>
						<i class="fa fa-upload fa-fw"></i> Server Rebooted <span
							class="pull-right text-muted small">4 min</span>
					</div>
			</a></li>
			<li class="divider"></li>
			<li><a class="text-center" href="#"> <strong>See
						All Alerts</strong> <i class="fa fa-angle-right"></i>
			</a></li>
		</ul> <!-- /.dropdown-alerts --></li>
	<!-- /.dropdown -->
	<li class="dropdown"><a class="dropdown-toggle"
		data-toggle="dropdown" href="#" aria-expanded="false"> <i
			class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
	</a>
		<ul class="dropdown-menu dropdown-user">
			<li><a href="#"><i class="fa fa-user fa-fw"></i> User
					Profile</a></li>
			<li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a></li>
			<li class="divider"></li>
			<li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
			</li>
		</ul> <!-- /.dropdown-user --></li>
	<!-- /.dropdown -->
</ul>
</nav>
<!--/. NAV TOP  -->
<nav class="navbar-default navbar-side height100" role="navigation">
<div class="sidebar-collapse height100">
	<ul class="nav" id="main-menu">
		<li><a href="#" id="myNetDiskInNav"><i
				class="fa iconfont icon-wenjian"></i> 我的网盘<span class="fa arrow"></span></a>
			<ul class="nav nav-second-level">
				<li><a href="file/selectall">全部</a></li>
				<li><a href="file/selectFileByType?type=3">图片</a></li>
				<li><a href="file/selectFileByType?type=5">文档</a></li>
				<li><a href="file/selectFileByType?type=2">视频</a></li>
				<li><a href="file/selectFileByType?type=6">种子</a></li>
				<li><a href="file/selectFileByType?type=4">音乐</a></li>
				<li><a href="file/selectFileByType?type=7">其他</a></li>
			</ul></li>


		<li><a href="MyShare" id="myShareInNav"><i
				class="fa iconfont icon-fenxiang"></i>我的分享</a></li>
				
		<li><a href="share" id="myFriendInNav"><i
		class="fa iconfont icon-haoyou"></i>我的好友</a></li>

		<li><a
			href="file/recycle" id="recycleInNav"><i
				class="fa iconfont icon-huishouzhan"></i>回收站</a></li>


	</ul>
	<div class="spacecss">
		<div class="spacesize" align="center"><div class="spacesizebar" style="width: 30%"></div></div>
		<div class="spacefont" align="left">1G/20G</div>
		</div>
</div>

</nav>