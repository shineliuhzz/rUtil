window.RU=window.RU||{},function(){var e={},t=window.document;String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},e.cookies=function(){var e,n,o={},i=t.cookie.split(";");return i.forEach(function(t){n=t.substr(t.indexOf("=")+1),e=t.substr(0,t.indexOf("=")).trim(),o[e]=n}),o}(),e.getItem=function(e){return console.log(this),decodeURIComponent(this.cookies[e])||null},e.removeItem=function(e){!e in this.cookies||(delete this.cookies[e],t.cookie=e+"=;expires=0")},e.setItem=function(e,n,o){var i=function(e){var t={};for(var n in e)t[n]=e[n];return t},o=i(o)||{};if(n=encodeURIComponent(n),o.expires){var r=new Date;r.setDate(r.getDate()+o.expires),n+="; expires="+r.toUTCString()}o.domain&&(n+="; domain="+o.domain),o.path&&(n+="; path="+o.path),this.cookies[e]=n,t.cookie=e+"="+n},e.clear=function(){var e,n=t.cookie.split(";");this.cookies={},n.forEach(function(t){e=t.substr(0,t.indexOf("=")),document.cookie=e+"=;expires=0"})},window.RU.cookieStorage=e}(),window.RU=window.RU||{},function(){var e={format:function(){var e,t;if(0===arguments.length)e=new Date,t="yyyy-MM-dd hh:mm:ss";else if(1===arguments.length)if("string"==typeof arguments[0])e=new Date,t=arguments[0];else{if(e=arguments[0],"number"==typeof e){var n=new Date;n.setTime(e),e=n}t="yyyy-MM-dd hh:mm:ss"}else e=arguments[0],t=arguments[1];if("number"==typeof e){var n=new Date;n.setTime(e),e=n}if("Invalid Date"==e)return"Invalid Date";var o={y:e.getFullYear(),M:e.getMonth()+1,d:e.getDate(),h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()};return t.replace(/([yMdhms])+/g,function(e,t){switch(t){case"y":return o[t].toString().slice(-e.length);default:return((e.length>1?"0":"")+o[t]).slice(-2)}})},now:function(){return Date.now?(new Date).getTime():Date.now()}};window.RU.date=e}(),window.RU=window.RU||{},function(){var e,t={},n=window,o=(n.document,"localStorage");t.set=function(e,t){},t.get=function(e,t){},t.has=function(e){return void 0!==t.get(e)},t.remove=function(e){},t.clear=function(){},t.transact=function(e,n,o){null==o&&(o=n,n=null),null==n&&(n={});var i=t.get(e,n);o(i),t.set(e,i)},t.getAll=function(){},t.forEach=function(){},t.serialize=function(e){return JSON.stringify(e)},t.deserialize=function(e){if("string"!=typeof e)return void 0;try{return JSON.parse(e)}catch(t){return e||void 0}},t.enabled=function(){try{return o in n&&n[o]}catch(e){return!1}}(),e=n[o],t.set=function(n,o){return void 0===o?t.remove(n):(e.setItem(n,t.serialize(o)),o)},t.get=function(n,o){var i=t.deserialize(e.getItem(n));return void 0===i?o:i},t.remove=function(t){e.removeItem(t)},t.clear=function(){e.clear()},t.getAll=function(){var e={};return t.forEach(function(t,n){e[t]=n}),e},t.forEach=function(n){for(var o=0;o<e.length;o++){var i=e.key(o);n(i,t.get(i))}},window.RU.store=t}();