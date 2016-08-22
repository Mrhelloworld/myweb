//清空表单
function clearForm(form) {
	$(':input', form).each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase(); // normalize case
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = "";
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = 0;
	});
};

//根据id获取当前行
function getRowById(table, id){
	var t = table.dataTable();
	var nTrs = t.fnGetNodes();//fnGetNodes获取表格所有行，nTrs[i]表示第i行tr
	for(var i = 0; i < nTrs.length; i++){
		var row = t.fnGetData(nTrs[i]);
		if(row.id == id) {
			return row;
		}
	}
}

//提交表单
function remoteSerivceForm(form, url, callback, time, dataType, asyncBoolean, beforeSend) {
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
        cache: true,
        dataType : dataType,
        type: "POST",
        url: url,
        data: form.serialize(),
        async: asyncBoolean,
        beforeSend: beforeSend,
        success: callback,
		error: function(request) {
            console.info(request.status);
        }
    });
}

//比较两个日期，返回时间差（单位秒）
function dateDiff(date1, date2){ 
    var type1 = typeof date1, type2 = typeof date2; 
    if(type1 == 'string') 
    date1 = stringToDate(date1); 
    else if(date1.getTime) 
    date1 = date1.getTime(); 
    if(type2 == 'string') 
    date2 = stringToDate(date2); 
    else if(date2.getTime) 
    date2 = date2.getTime(); 
    return (date1 - date2) / 1000;//结果是秒 
}	
//字符串转成Date(dateDiff)所需方法 
function stringToDate(string){ 
    var d = (string).split('-', 3); 
    return (new Date( 
    parseInt(d[0], 10) || null, 
    (parseInt(d[1], 10) || 1)-1, 
    parseInt(d[2], 10) || null)).getTime(); 

} 

//比较两个时间，返回时间差（单位秒）
function timeDiff(date1, date2){ 
    var type1 = typeof date1, type2 = typeof date2; 
    if(type1 == 'string') 
    date1 = stringToTime(date1); 
    else if(date1.getTime) 
    date1 = date1.getTime(); 
    if(type2 == 'string') 
    date2 = stringToTime(date2); 
    else if(date2.getTime) 
    date2 = date2.getTime(); 
    if(date1 - date2 < 0)
    	return (date2 - date1) / 1000;
    else
    	return (date1 - date2) / 1000;//结果是秒 
}

//字符串转成Time(dateDiff)所需方法 
function stringToTime(string){ 
    var f = string.split(' ', 2); 
    var d = (f[0] ? f[0] : '').split('-', 3); 
    var t = (f[1] ? f[1] : '').split(':', 3); 
    return (new Date( 
    parseInt(d[0], 10) || null, 
    (parseInt(d[1], 10) || 1)-1, 
    parseInt(d[2], 10) || null, 
    parseInt(t[0], 10) || null, 
    parseInt(t[1], 10) || null, 
    parseInt(t[2], 10) || null 
    )).getTime(); 

} 

//四舍五入
function round(v,e) {   
	var t=1;   
	for(;e>0;t*=10,e--);   
	for(;e<0;t/=10,e++);   
	return Math.round(v*t)/t;   
} 

//浮点数相乘
function accMul(arg1,arg2) {
	var m=0,s1=arg1.toString(),s2=arg2.toString();
	try{m+=s1.split(".")[1].length}catch(e){}
	try{m+=s2.split(".")[1].length}catch(e){}
	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
