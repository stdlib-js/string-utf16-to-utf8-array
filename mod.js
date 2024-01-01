// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,y,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,p,l,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,i,a;for(t=[],a=0,i=T.exec(e);i;)(r=e.slice(a,T.lastIndex-i[0].length)).length&&t.push(r),t.push(A(i)),a=T.lastIndex,i=T.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function $(e){return"string"==typeof e}function C(e){var r,t,i;if(!$(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=O(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var F=Object.prototype,I=F.toString,P=F.__defineGetter__,R=F.__defineSetter__,Z=F.__lookupGetter__,G=F.__lookupSetter__;var W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"string"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return N&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=U()?function(e){var r,t,i,a,n;if(null==e)return X.call(e);t=e[B],n=B,r=null!=(a=e)&&z.call(a,n);try{e[B]=void 0}catch(r){return X.call(e)}return i=X.call(e),r?e[B]=t:delete e[B],i}:function(e){return X.call(e)},H=String.prototype.valueOf;var J=U();function K(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Q(e){return M(e)||K(e)}L(Q,"isPrimitive",M),L(Q,"isObject",K);function Y(e){var r,t,i,a;if(!M(e))throw new TypeError(C("invalid argument. Must provide a string. Value: `%s`.",e));for(i=e.length,t=[],a=0;a<i;a++)(r=e.charCodeAt(a))<128?t.push(r):r<2048?(t.push(192|r>>6),t.push(128|63&r)):r<55296||r>=57344?(t.push(224|r>>12),t.push(128|r>>6&63),t.push(128|63&r)):(a+=1,r=65536+((1023&r)<<10|1023&e.charCodeAt(a)),t.push(240|r>>18),t.push(128|r>>12&63),t.push(128|r>>6&63),t.push(128|63&r));return t}export{Y as default};
//# sourceMappingURL=mod.js.map
