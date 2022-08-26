(function() {
    function test() {
        if (ua.match(/MicroMessenger\/[0-9]/i)) {
            return true;
        }
        if (ua.match(/QQ\/[0-9]/i)) {
            return true;
        }
    }
    if (test()) {
        alert("三叶的警告：禁止使用腾讯流氓器打开我的主页！");
        history.go(-1);
    };
});