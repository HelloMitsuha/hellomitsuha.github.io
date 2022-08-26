var m = mdui.$;
var inst = new mdui.Drawer('#drawer');
m('#menu').on('click', function () {
	inst.toggle();
});

function isMobile(){
	if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
		return true; // 移动端
	}else{
		return false; // PC端
	}
}

alert(isMobile());
if (isMobile()){
	window.alert("本页面暂未适配电脑端!");
}
