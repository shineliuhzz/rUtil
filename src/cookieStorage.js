/**
 * Created  on 15/10/1.
 * @Author  liuhzz
 * @Email 847858699@qq.com
 */

var cookieStorage = {},
    doc = window.document;

cookieStorage.cookies = (function(){

    var n, v,
        cookies = {},
        lists = doc.cookie.split(";");


    lists.forEach(function(item){
        v = item.substr(item.indexOf("=")+1);
        n = item.substr(0,item.indexOf("="));
        cookies[n] = v;
    })

    return cookies;

}())


cookieStorage.getItem = function(key){
    console.log(this);
    return decodeURIComponent(this.cookies[key]) || null;

}


cookieStorage.removeItem = function(key){
   if(! key in this.cookies) return;
    delete this.cookies[key];
    doc.cookie = key + "expires; =0";
}

cookieStorage.setItem = function(name,value,options){


    var extend = function(source){
        var o = {};
        for( var prop in source){
            o[prop] = source[prop];
        }
        return o;
    }

    var options = extend(options) || {}

    value = encodeURIComponent(value);

    if (options.expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.expires);
        value += "; expires=" + d.toUTCString();
    }
    if (options.domain) {
        value += "; domain=" + options.domain;
    }
    if (options.path) {
        value += "; path=" + options.path;
    }
    this.cookies[name] = value;
    doc.cookie = name + "=" + value;
};

cookieStorage.clear = function(){

    var n,
        lists = doc.cookie.split(";");

    this.cookies = {};

    lists.forEach(function(item){
        n = item.substr(0,item.indexOf("="));
        document.cookie = n + "expires; =0";
    })
}

module.exports = cookieStorage


