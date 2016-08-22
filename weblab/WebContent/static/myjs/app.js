var App = function () {
	return {
		initGlobal : function() {
			bootbox.setDefaults("locale","zh_CN");
		},
		//初始化登录页面
		initLogin : function() {
			$("#userLoginForm").validate({
		 		rules: {
					username: {required: true,
		 			},
		 			password: {required: true,
		 			}

		 		},
		 		messages: {
		 			username: {required:"账号不能为空！",
		 			},
		 			password: {required:"密码不能为空！",
		 			}
		 		},

		 		errorPlacement: function(error, element) {
		 			error.appendTo(element.parents().find(".errorinfo"));
		 		},
		 		onfocusout: function(element, event) {
		 			this.element(element);
		 		},
		 		onkeyup: false,
		 		focusCleanup: true
		 	});
		},
		initSetPwd : function() {
			$("#resetPasswordForm").validate({
				rules : {
					oldPassword : {
						required : true,
						number : true,
						minlength : 6,
						maxlength : 6
					},
					newPassword : {
						required : true,
						number : true,
						minlength : 6,
						maxlength : 6
					},
					renewPassword : {
						required : true,
						equalTo:'#newPassword',
					}
				},
				messages : {
					oldPassword : {
						required : "请输入原取款密码！",
						number : "请输入正确格式的提款密码！",
						minlength : "输入的位数不对！",
						maxlength : "输入的位数不对！"
					},
					newPassword : {
						required : "请输入6位数字作为新的提款密码！",
						number : "请输入正确格式的提款密码！",
						minlength : "输入的位数不对！",
						maxlength : "输入的位数不对！"
					},
					renewPassword : {
						required:"请再输一次密码！",
						equalTo:'两次密码输入不一致！',
					}
				},

				errorPlacement : function(error, element) {
					error.appendTo(element.parent());
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
		 	});
		},
		initSetLoginPwd : function() {
			$("#resetPasswordForm2").validate({
				rules : {
					oldPassword2 : {
						required : true,
					},
					newPassword2 : {
						required : true,
					},
					renewPassword2 : {
						required : true,
						equalTo:'#newPassword2',
					}
				},
				messages : {
					oldPassword2 : {
						required : "请输入原登录密码！",
					},
					newPassword2 : {
						required : "请输入新的登录密码！",
					},
					renewPassword2 : {
						required:"请再输一次密码！",
						equalTo:'两次密码输入不一致！',
					}
				},

				errorPlacement : function(error, element) {
					error.appendTo(element.parent());
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
		 	});
		},
		initIndexSetPwd : function() {
			$("#setPasswordForm").validate({
	            rules:{                    
	            	newPassword:{
					minlength: 6,
					maxlength: 6,
	                required:true,
					number: true,				
				  },
				  renewPassword:{
					   required:true,
	                equalTo:'#password',
				  }
				  
	          },
	          messages:{
	        	  newPassword:{
					required:"密码不能为空！",
					number:"请输入6位数字密码！",	
					minlength:"请输入6位数字密码！",
					maxlength:"请输入6位数字密码！",							
				},
				renewPassword:{
				required:"请再输一次密码！",
				equalTo:'两次密码输入不一致！',
				},
	          },

	            errorPlacement : function(error, element) {
	            error.appendTo(element.parents().find(".errorinfo"));
	          },
	          onfocusout: function(element, event) {
	              this.element(element);
	          },
	          onkeyup: false,
	          focusCleanup:true
	        });
		},
		//初始化用户管理
		initAccount : function() {
			$("#userForm").validate({
				rules : {
					username : {
						required : true
					},
					password : {
						required : true,
						minlength : 6
					},
					cfmPassword : {
						required : true,
						equalTo: "#password"
					},
					realname : {
						required : true
					},
					phone : {
						required : true,
						number : true,
						rangelength:[11,11]
					},
					accountState : {
						required : true
					},
					email : {
						email : true
					}
				},
				messages : {
					username : {
						required : "登录名不能为空！"
					},
					password : {
						required : "密码不能为空！",
						minlength : "密码至少6位！"
					},
					cfmPassword : {
						required : "确认密码不能为空！",
						equalTo : "两次输入密码不一致"
					},
					realname : {
						required : "用户姓名不能为空！"
					},
					phone : {
						required : "手机号码不能为空！",
						number : "请输入数字！",
						rangelength: "请输入11位手机号码！",
					},
					accountState : {
						required : "用户状态不能为空！"
					},
					email : {
						email : "邮箱格式不正确！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
			$("#resetPwdForm").validate({
				rules : {
					newPwd : {
						required : true,
						minlength : 6
					},
					cfmNewPwd : {
						required : true,
						equalTo: "#newPwd"
					}
				},
				messages : {
					newPwd : {
						required : "新密码不能为空！",
						minlength : "新密码至少6位！"
					},
					cfmNewPwd : {
						required : "确认密码不能为空！",
						equalTo : "两次输入密码不一致"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		
		//初始设备管理
		initDevice : function() {
			$("#deviceForm").validate({
				rules : {
					deviceNo : {
						required : true
					},
					deviceName : {
						required : true
					},
					deviceModel : {
						required : true
					},
					deviceType : {
						required : true
					},
					deviceMark : {
						required : true
					},
					deviceAddr : {
						required : true
					},
					deviceLogicType : {
						required : true
					},
					neighNo : {
						required : true
					}
				},
				messages : {
					deviceNo : {
						required : "设备编号不能为空"
					},
					deviceName : {
						required : "设备名称不能为空！"
					},
					deviceModel : {
						required : "设备型号不能为空！"
					},
					deviceType : {
						required : "设备类型不能为空！"
					},
					deviceMark : {
						required : "设备标示不能为空！"
					},
					deviceAddr : {
						required : "设备地址不能为空！"
					},
					deviceLogicType : {
						required : "设备逻辑类型不能为空！"
					},
					neighNo : {
						required : "所属小区编号不能为空！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		
		//初始小区管理
		initNeighborhood : function() {
			$("#neighborhoodForm").validate({
				rules : {
					neighProvince : {
						required : true
					},
					neighCity : {
						required : true,
					},
					neighCounty : {
						required : true,
					},
					neighName : {
						required : true,
					},
					landAgent : {
						required : true,
					}
				},
				messages : {
					neighProvince : {
						required : "省份不能为空"
					},
					neighCity : {
						required : "地市不能为空！"
					},
					neighCounty : {
						required : "区县不能为空！"
					},
					neighName : {
						required : "小区名称不能为空！"
					},
					landAgent : {
						required : "所属地产商不能为空！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始地产商管理
		initLandAgent : function() {
			$("#landAgentForm").validate({
				rules : {
					name : {
						required : true
					}
				},
				messages : {
					name : {
						required : "地产商名称不能为空!"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始小区详细管理
		initNeighInfo : function() {
			$("#neighInfoForm").validate({
				rules : {
					neighNo : {
						required : true
					},
					blockNo : {
						required : true,
						rangelength:[4,4],
						number: true
					},
					roomNo : {
						rangelength:[4,4],
						number: true
					},
					callOpen : {
						required : true
					},
					haOpen : {
						required : true
					}
				},
				messages : {
					neighNo : {
						required : "小区编号不能为空！"
					},
					blockNo : {
						required : "楼栋号不能为空！",
						rangelength:"请输入4位楼栋号！",
						number: "请输入4位楼栋号！"
					},
					callOpen : {
						required : "请选择是否开通！"
					},
					haOpen : {
						required : "请选择是否开通！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		
		//初始修改密码
		initModifyPwd : function() {
			$("#modifyPwdForm").validate({
				rules : {
					oldPwd : {
						required : true
					},
					newPassword : {
						required : true,
						minlength : 6
					},
					cfmNewPassword : {
						required : true,
						equalTo: "#newPassword"
					}
				},
				messages : {
					oldPwd : {
						required : "旧密码不能为空！"
					},
					newPassword : {
						required : "新密码不能为空！",
						minlength : "新密码至少6位！"
					},
					cfmNewPassword : {
						required : "确认密码不能为空！",
						equalTo : "两次输入密码不一致"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		
		//初始化角色管理
		initRole : function() {
			$("#roleForm").validate({
				rules : {
					roleName : {
						required : true
					},
					roleSign : {
						required : true
					}
				},
				messages : {
					roleName : {
						required : "角色名称不能为空！"
					},
					roleSign : {
						required : "角色标志不能为空！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始APP账户
		initAPPAccount : function() {
			$("#sysAPPAccountForm").validate({
				rules : {
					userName : {
						required : true
					},
					phone : {
						required : true,
						number : true
					}
				},
				messages : {
					userName : {
						required : "登录账号不能为空"
					},
					deviceName : {
						required : "手机号码不能为空！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始化菜单管理
		initCategory : function() {
			$("#categoryForm").validate({
				rules : {
					parentid : {
						required : true
					},
					name : {
						required : true
					},
					sort : {
						required : true
					},
					state : {
						required : true
					},
					type : {
						required : true
					}
				},
				messages : {
					parentid : {
						required : "父级菜单不能为空！"
					},
					name : {
						required : "菜单名称不能为空！"
					},
					sort : {
						required : "菜单排序不能为空！"
					},
					state : {
						required : "菜单状态不能为空！"
					},
					type : {
						required : "菜单类型不能为空！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始化参数管理
		initParams : function() {
			$("#paramForm").validate({
				rules : {
					paramId : {
						required : true
					},
					paramText : {
						required : true
					},
					paramValue : {
						required : true
					},
					sort : {
						digits : true
					}
				},
				messages : {
					paramId : {
						required : "参数类型不能为空！"
					},
					paramText : {
						required : "参数名称不能为空！"
					},
					paramValue : {
						required : "参数值不能为空！"
					},
					sort : {
						digits : "请输入大于等于0的数字！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始化权限管理
		initPermisions : function() {
			$("#permisionForm").validate({
				rules : {
					permissionName : {
						required : true
					},
					selectPermissionSys : {
						required : true
					},
					selectPermissionMod : {
						required : true
					},
					status : {
						required : true
					}
				},
				messages : {
					permissionName : {
						required : "权限名称不能为空！"
					},
					selectPermissionSys : {
						required : "请选择所属系统！"
					},
					selectPermissionMod : {
						required : "请选择所属模块！"
					},
					status : {
						required : "请选择权限状态！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		},
		//初始APP版本管理
		initAppVersion : function() {
			$("#versionForm").validate({
				rules : {
					version : {
						required : true
					},
					appName : {
						required : true
					},
					osName : {
						required : true
					}
				},
				messages : {
					version : {
						required : "版本号不能为空！"
					},
					appName : {
						required : "请选择应用名称！"
					},
					osName : {
						required : "请选择操作系统！"
					}
				},
				errorPlacement : function(error, element) {
					error.insertAfter(element);
				},
				onfocusout : function(element, event) {
					this.element(element);
				},
				onkeyup : false,
				focusCleanup : true
			});
		}
		
	};
}();

function configDropDownList(url,select,value){
	//加载登录账号下拉数据
	remoteService(url,null,function(data) {
		if(data.success) {
			var values = data.data;
			select.empty();//清除select中的 option 
            $.each(values,function(index,item){
            	var opt = $("<option>").text(item.text).val(item.value); 
            	if(value == item.value)
            		opt = $("<option selected = 'selected'>").text(item.text).val(item.value); 
                select.append(opt);  
            });
		} else {
			bootbox.alert(data.message);
		}
	});
}
//时间验证
function dateTime(startid,endid,tag){
	$('.input-daterange').datepicker({ autoclose:true,language : 'cn'   });
	   
    var startDate; 
     var endDate;   
     $('#'+startid).datepicker().
       on('changeDate.datepicker', function(event) {       
      endDate= $('#'+endid).datepicker('getDate');
       if(endDate){
         if (event.date.valueOf() > endDate.valueOf()) {
        	 if(tag){
        		 bootbox.alert('开始日期应小于结束日期！', function() {
     			    $("html").addClass("modal-open");
     			  });
        	 }else{
        		 bootbox.alert('开始日期应小于结束日期！');
        	 }
           $('#'+startid).datepicker('setDate',endDate);
         } else {
           startDate = new Date(event.date);
           //$("#js-start-time-index").val($('#'+startid).val());
         }
         $(this).datepicker('close');
         }
       });

     $('#'+endid).datepicker().
       on('changeDate.datepicker', function(event) {
         startDate= $('#'+startid).datepicker('getDate');
       if(startDate){
         if (event.date.valueOf() < startDate.valueOf()) {
        	 if(tag){
        		 bootbox.alert('结束日期应大于开始日期！', function() {
      			    $("html").addClass("modal-open");
      			  });
        	 }else{
        		 bootbox.alert('结束日期应大于开始日期！');
        	 }
           $('#'+endid).datepicker('setDate',startDate);
         } else {
           endDate = new Date(event.date);
         }
         $(this).datepicker('close');
        }
       });
	
}
// 判断整数value是否不等于0 
$.validator.addMethod("isGreaterZero", function(value, element) { 
     return value>0;       
}, "请输入大于0的数字！"); 