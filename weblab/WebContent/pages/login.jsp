<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
	<head>
	    <base href="<%=basePath%>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta charset="utf-8" />
		<title>欢迎登录 CODE PARTY</title>

		<meta name="description" content="用户登录页面" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="static/css/bootstrap.css" />
		<link rel="stylesheet" href="static/css/font-awesome.css" />

		<!-- text fonts -->
		<link rel="stylesheet" href="static/css/ace-fonts.css" />

		<!-- ace styles -->
		<link rel="stylesheet" href="static/css/ace.css" />

		<!--[if lte IE 9]>
			<link rel="stylesheet" href="static/css/ace-part2.css" />
		<![endif]-->
		<link rel="stylesheet" href="static/css/ace-rtl.css" />

		<!--[if lte IE 9]>
		  <link rel="stylesheet" href="static/css/ace-ie.css" />
		<![endif]-->

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

		<!--[if lt IE 9]>
		<script src="static/js/html5shiv.js"></script>
		<script src="static/js/respond.js"></script>
		<![endif]-->
	</head>
	<style>
		#stuName{
			position: absolute;
			top: 75%;
			z-index: 999;
			border: none;
			color: red;
			background-color: #F7F7F7;
		}
	</style>
	<body class="login-layout blur-login">
		<div class="main-container">
			<div class="main-content">
				<div class="row">
					<div class="col-sm-10 col-sm-offset-1">
						<div class="login-container">
							<div class="center">
								<h1>
									<i class="ace-icon fa fa-leaf green"></i>
									<span class="red">CODE</span>
									<span class="white" id="id-text2">PARTY</span>
								</h1>
								<h4 class="light-blue" id="id-company-text">&copy; EASY CODING</h4>
							</div>

							<div class="space-6"></div>

							<div class="position-relative">
								<div id="login-box" class="login-box visible widget-box no-border">
									<div class="widget-body">
										<div class="widget-main">
											<h4 class="header blue lighter bigger">
												<i class="ace-icon fa fa-coffee green"></i>
												请输入登录信息
											</h4>

											<div class="space-6"></div>

											<form action="rest/login/login" method="post" id="form1">
												<fieldset>
													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" name="username" id="username" placeholder="用户名" autofocus/>
															<i class="ace-icon fa fa-user"></i>
														</span>
													</label>

													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" name="password" id="password" placeholder="密码"/>
															<i class="ace-icon fa fa-lock"></i>
														</span>
													</label>
													
													<label class="block clearfix">
														<span class="block input-icon input-icon-right" style="width:120px; float: left;">
															<input type="vCode" class="form-control" name="verifyCode" id="verifyCode" placeholder="验证码" id='code'/>
															<i class="ace-icon fa fa-image"></i>
														</span>
														<span style="float: left;">&nbsp;&nbsp;
															<img id="verifyCodeImg" src="rest/login/getVerifyCodeImage" alt="点击切换"/>
														</span>
														<span style="float: left; position: relative;">&nbsp;&nbsp;
															<a class="reloadverify" title="换一张" href="javascript:void(0)"
																onclick="document.getElementById('verifyCodeImg').src='rest/login/getVerifyCodeImage?num='+Math.random()" >换一张？</a>
														</span>
													</label>

													<div class="space"></div>

													<div class="clearfix">
														<label class="inline">
															<input type="checkbox" class="ace" />
															<span class="lbl"> 记住我</span>
														</label>

														<button type="submit" class="width-35 pull-right btn btn-sm btn-primary"  id="butn">
															<i class="ace-icon fa fa-key"></i>
															<span class="bigger-110">登录</span>
														</button>
													</div>
													<input type="text" value=" " id="stuName" onFocus="this.blur()"/>
													<div class="space-4"></div>
												</fieldset>
											</form>

										</div><!-- /.widget-main -->
<script>
function iload() {
	var a = '<%=request.getAttribute("message_login")%>';
	var b = document.getElementById('stuName');
	b.value=a;
	if(b.value=="null"){
		b.style.display="none";
		return false;
	} 
	if(b.value=="验证码不正确"){
		b.style.display="block";
		var c = '<%=request.getAttribute("login_username")%>';
		var name= document.getElementById('username');
		name.value=c;
		return false;
	}
}
window.onload=iload;


var butn=document.getElementById('butn');
butn.onclick=function(e){
	clearTimeout(dt);
//	e.preventDefault();
	var name= document.getElementById('username');
	var word= document.getElementById('password');
	var veri= document.getElementById('verifyCode');
	var b = document.getElementById('stuName');
	if(name.value==""){
		b.style.display="block";
		b.value='账号没输入';
		return false;
	}else if(word.value==""){
		b.style.display="block";
		b.value='密码没输入';
		return false;
	}else if(veri.value==""){
		b.style.display="block";
		b.value='验证码没输入';
		return false;
	}else{
//		var code = document.getElementById('code');
		var dt=null;
//	code.onclick = 'return false;';
		dt=setTimeout(function(){
			var form = document.getElementById("form1");
			form.submit();
			clearTimeout(dt);
		},10);
		return false;
	}

};
</script>
										<div class="toolbar clearfix">
											<div>
												<a href="#" data-target="#forgot-box" class="forgot-password-link">
													<i class="ace-icon fa fa-arrow-left"></i>
													忘记密码
												</a>
											</div>


											<div>
												<a href="#" data-target="#signup-box" class="user-signup-link">
													立即注册
													<i class="ace-icon fa fa-arrow-right"></i>
												</a>
											</div>
										</div>
									</div><!-- /.widget-body -->
								</div><!-- /.login-box -->

								<div id="forgot-box" class="forgot-box widget-box no-border">
									<div class="widget-body">
										<div class="widget-main">
											<h4 class="header red lighter bigger">
												<i class="ace-icon fa fa-key"></i>
												找回密码
											</h4>

											<div class="space-6"></div>
											<p>
												请输入您注册时填写的电子邮箱地址
											</p>

											<form>
												<fieldset>
													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control" placeholder="邮箱" />
															<i class="ace-icon fa fa-envelope"></i>
														</span>
													</label>

													<div class="clearfix">
														<button type="button" class="width-35 pull-right btn btn-sm btn-danger">
															<i class="ace-icon fa fa-lightbulb-o"></i>
															<span class="bigger-110">发送!</span>
														</button>
													</div>
												</fieldset>
											</form>
										</div><!-- /.widget-main -->

										<div class="toolbar center">
											<a href="#" data-target="#login-box" class="back-to-login-link">
												返回登录页
												<i class="ace-icon fa fa-arrow-right"></i>
											</a>
										</div>
									</div><!-- /.widget-body -->
								</div><!-- /.forgot-box -->

								<div id="signup-box" class="signup-box widget-box no-border">
									<div class="widget-body">
										<div class="widget-main">
											<h4 class="header green lighter bigger">
												<i class="ace-icon fa fa-users blue"></i>
												新用户注册
											</h4>

											<div class="space-6"></div>
											<p> 请输入您的详细信息: </p>

											<form>
												<fieldset>
													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control" placeholder="邮箱" />
															<i class="ace-icon fa fa-envelope"></i>
														</span>
													</label>

													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" placeholder="用户名" />
															<i class="ace-icon fa fa-user"></i>
														</span>
													</label>

													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" placeholder="密码" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
													</label>

													<label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" placeholder="确认密码" />
															<i class="ace-icon fa fa-retweet"></i>
														</span>
													</label>

													<label class="block">
														<input type="checkbox" class="ace" />
														<span class="lbl">
															我同意
															<a href="#">用户协议</a>
														</span>
													</label>

													<div class="space-24"></div>

													<div class="clearfix">
														<button type="reset" class="width-30 pull-left btn btn-sm">
															<i class="ace-icon fa fa-refresh"></i>
															<span class="bigger-110">重置</span>
														</button>

														<button type="button" class="width-65 pull-right btn btn-sm btn-success">
															<span class="bigger-110">注册</span>

															<i class="ace-icon fa fa-arrow-right icon-on-right"></i>
														</button>
													</div>
												</fieldset>
											</form>
										</div>

										<div class="toolbar center">
											<a href="#" data-target="#login-box" class="back-to-login-link">
												<i class="ace-icon fa fa-arrow-left"></i>
												返回登录页
											</a>
										</div>
									</div><!-- /.widget-body -->
								</div><!-- /.signup-box -->
							</div><!-- /.position-relative -->

						</div>
					</div><!-- /.col -->
				</div><!-- /.row -->
			</div><!-- /.main-content -->
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->
		<script type="text/javascript">
			window.jQuery || document.write("<script src='static/js/jquery.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='static/js/jquery1x.js'>"+"<"+"/script>");
</script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='static/js/jquery.mobile.custom.js'>"+"<"+"/script>");
		</script>

		<!-- inline scripts related to this page -->
		<script type="text/javascript">
			jQuery(function($) {
			 $(document).on('click', '.toolbar a[data-target]', function(e) {
				e.preventDefault();
				var target = $(this).data('target');
				$('.widget-box.visible').removeClass('visible');//hide others
				$(target).addClass('visible');//show target
			 });
			});
			
		</script>
	</body>
</html>
