/**
 * Created by Be Stong on 2016/7/4.
 */
var a=function(){
    clearTimeout(dt);
    if($('.footer-inner').css('bottom')=='137px'){
        return false;
    }
    var dt;
    dt=setTimeout(function(){
        $('.footer-inner').css('bottom', '137px');
        if($('.footer-inner').css('bottom')=='137px'){
            clearTimeout(dt);
            dt=null;
        }
    },50);
};
a();
a=null;
var b=function(){
    clearTimeout(dt);
    var dt;
    dt=setTimeout(function(){
        var x=0;
        if($("tbody").height()>$("#dataTable").height()){
            $("#dataTable").css("height","74%");
            //alert($("tbody").css("height"));
            //alert($("#dataTable").css("height"));
        }
        else{
            $("#dataTable").css("height","auto");
            //alert(222);
        }
        x++;
        if(x==1){
            clearTimeout(dt);
            dt=null;
        }
    },100);

};
b();
b=null;
