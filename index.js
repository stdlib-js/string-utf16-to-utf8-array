// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===o.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(i.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,a.get),y&&u&&u.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",h=y()?function(t){var e,r,o,n,u;if(null==t)return s.call(t);r=t[d],u=d,e=null!=(n=t)&&b.call(n,u);try{t[d]=void 0}catch(e){return s.call(t)}return o=s.call(t),e?t[d]=r:delete t[d],o}:function(t){return s.call(t)},_=String.prototype.valueOf,g=y();function m(t){return"object"==typeof t&&(t instanceof String||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function v(t){return f(t)||m(t)}c(v,"isPrimitive",f),c(v,"isObject",m);var j=63,S=128;return function(t){var e,r,o,n;if(!f(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0hp3N",t));for(o=t.length,r=[],n=0;n<o;n++)(e=t.charCodeAt(n))<S?r.push(e):e<2048?(r.push(192|e>>6),r.push(S|e&j)):e<55296||e>=57344?(r.push(224|e>>12),r.push(S|e>>6&j),r.push(S|e&j)):(n+=1,e=65536+((1023&e)<<10|1023&t.charCodeAt(n)),r.push(240|e>>18),r.push(S|e>>12&j),r.push(S|e>>6&j),r.push(S|e&j));return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).utf16ToUTF8Array=e();
//# sourceMappingURL=index.js.map
