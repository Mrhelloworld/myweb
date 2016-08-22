//返回固定格式的当前时间
function createNow() {
	var d = new Date();
	return d.getFullYear() + "年" 
		+ (d.getMonth() + 1) + "月" 
		+ d.getDate() + "日";
}

//封装AJAX调用JAVA后台
function remoteService(url,loadMsg,callback,time,dataType,asyncBoolean){
	if(time==null || time==undefined) {
		time = 10000;
	}
	if(dataType==null || dataType==undefined) {
		dataType = "json";
	}
	if(asyncBoolean==null || asyncBoolean==undefined) {
		asyncBoolean = true;
	}
	$.ajax({
        url: url,   
        dataType : dataType,   
        type: "post",
        async: asyncBoolean,
        beforeSend: loading,
        complete: loaded,
        timeout: time,   
        success: callback,
        error: errorFun
	});
	
	function errorFun(XMLHttpRequest, textStatus, errorThrown) {
		var msg = "系统异步通信时发生错误！";
		if(XMLHttpRequest['responseText'].indexOf("页面已过期，请重新登录!") != -1) {
			bootbox.alert(XMLHttpRequest['responseText'] + msg);
		} else {
			bootbox.alert(msg);
		}
	}
	
	function loading() {
		if(loadMsg != null) {
			$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(window).height()}).appendTo("body");
			$("<div class=\"datagrid-mask-msg\"></div>").html(loadMsg)
				.appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) - 190) / 2,top:($(window).height() - 45) / 2});
		}
	}
	
	function loaded() {
		if(loadMsg != null) {
			$("div.datagrid-mask-msg").remove(); 
			$("div.datagrid-mask").remove();
		}
	}
}

//保留n位小数
function toDecial1(x,n){
	if(n == 0){
		return Math.floor(x);
	}
	var f = parseFloat(x);
	if(isNaN(f)){
		return false;
	}
	var f = Math.round(x * n * 10) / (n * 10);
	var s = f.toString();
	var rs = s.indexOf('.');
	if(rs < 0){
		rs = s.length;
		s += '.';
	}
	while(s.length <= rs + n){
		s += '0';
	}
	return s;
}
function toDecial(x,n){
	if(x == null)
		return 0.00;
	var f_x = parseFloat(x);
	if (isNaN(f_x))
	{
	alert('参数类型错误！参数：'+x);
	return false;
	}
	var interval = Math.pow(10,n);
	f_x = Math.round(f_x *interval)/interval;
	var s = f_x.toString();
	var rs = s.indexOf('.');
	if(n > 0){
		if(rs < 0){
			rs = s.length;
			s += '.';
		}
		while(s.length <= rs + n){
			s += '0';
		}
	}
	return s;
}
//DateTime转String
function getDateTimeStr(dateTime)  
{  

   dateTime.getYear();       //获取当前年份(2位)
   dateTime.getFullYear();   //获取完整的年份(4位,1970-????)
   dateTime.getMonth();      //获取当前月份(0-11,0代表1月)
   dateTime.getDate();       //获取当前日(1-31)
   dateTime.getDay();        //获取当前星期X(0-6,0代表星期天)
   dateTime.getTime();       //获取当前时间(从1970.1.1开始的毫秒数)
   dateTime.getHours();      //获取当前小时数(0-23)
   dateTime.getMinutes();    //获取当前分钟数(0-59)
   dateTime.getSeconds();    //获取当前秒数(0-59)
   dateTime.getMilliseconds();   //获取当前毫秒数(0-999)
   dateTime.toLocaleDateString();    //获取当前日期
   var mytime=dateTime.toLocaleTimeString();    //获取当前时间
   dateTime.toLocaleString( );       //获取日期与时间
   var month = dateTime.getMonth() + 1;
   var date = dateTime.getDate();
   var hours = dateTime.getHours();
   var minute = dateTime.getMinutes();
   var seconds = dateTime.getSeconds();
  
   if (parseInt(month) < 10){
   	month = "0" + month;
   }
   if (parseInt(date) < 10){
   	date = "0" + date;
   }
   if (parseInt(hours) < 10){
   	hours = "0" + hours;
   }
   if (parseInt(minute) < 10){
       minute = "0" + minute;
   }
   if (parseInt(seconds) < 10){
       seconds = "0" + seconds;
   }
  return dateTime.getFullYear()+"-"+month+"-"+date+" "+hours+":"+ minute +":"+ seconds;
};

/**
 * 指定精度的四舍五入函数
 * @param a_Num
 * @param a_Bit
 * @return
 */
function Round(a_Num,a_Bit){
    a_Bit = parseInt(a_Bit)
    var tempNum = 0,isNegative = a_Num < 0;
    var thisStr = a_Num + "";
    var start = thisStr.indexOf(".");
    //获取旧的精度，如果没有精度或小于要转化的精度，则直接返回原值
    var oldScale = thisStr.length - start - 1;
    if (start == -1 || oldScale <= a_Bit) {
        return a_Num;
    }
    //截取小数点后,scale之后的数字，判断是否大于5，如果大于5这入为1
     if(thisStr.substr(start + a_Bit + 1,1) >= 5) {
         tempNum = 1;
    }
    //计算10的scale次方,把原数字扩大它要保留的小数位数的倍数
    var temp = Math.pow(10,a_Bit);
    //截取指定长度的数字，加上进位
    var s = Math.abs(thisStr.substring(0,start+a_Bit+1).replace('.','')) +  tempNum;
    var result = s/temp;
    if (isNegative) {
        result = -result;
    }
    return result;
}

//去掉str头尾的空格
function trim(str){
	var reg_left=/^[\s]*/g;//匹配开头的空白
	var reg_right=/[\s]*$/g;//匹配结尾的空白
	return str.replace(reg_left,"").replace(reg_right,"");
}

//扩展数组的indexOf方法
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
//扩展数组的remove方法
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
