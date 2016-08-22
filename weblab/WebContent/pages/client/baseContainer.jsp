<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

String url = request.getParameter("url");
System.out.println("---------------------->>>>>>>>>>>>>>>>>>>>>>" + url);
%>

<!DOCTYPE html>
<html lang="en">
	<head>
		<base href="<%=basePath%>">
		
		<jsp:include page="../base/head.jsp"></jsp:include>
		<jsp:include page="../base/meta.jsp"></jsp:include>
		
		<script type="text/javascript">
			$(function() {
				var url = '<%=url%>';
				$('#main-page').load(url);
				if(url == null || url == undefined) return;
				$('#main-page').load(url, null, function(response,status,xhr) {
				});
			});
		</script>
	</head>

	<body class="no-skin">
		<!-- /section:basics/navbar.layout -->
		<div class="main-container" id="main-container">
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>
			<!-- /section:basics/sidebar -->
			<div class="main-content">
				<div class="main-content-inner">
					<!-- /section:basics/content.breadcrumbs -->
					<div class="page-content">
						<div class="row" id="main-page">
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div>
			</div><!-- /.main-content -->
		</div><!-- /.main-container -->
		
	</body>
</html>
