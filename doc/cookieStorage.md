## cookieStorage

一些常用的cookie方法的封装

### 示例

```
//键值对形式返回所有cookie
 
  RU.cookieStorage.cookies 
  
 //取出cookie名为key的值 
 
  RU.cookieStorage.getItem(key) 
  
 //清除所有cookie 
 
  RU.cookieStorage.clear()
  
 //设置cookie
 
  RU.cookieStorage.setItem(key,value,{expires:1*60*60*24,path:"/",domain:".example.com"})
```