"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=p(function(q,h){
var x=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist'),s=63,u=128,O=192,f=224,l=240,t=1023,c=2048,F=55296,d=57344,T=65536;function g(a){var r,e,v,i;if(!x(a))throw new TypeError(n('1Px3B',a));for(v=a.length,e=[],i=0;i<v;i++)r=a.charCodeAt(i),r<u?e.push(r):r<c?(e.push(O|r>>6),e.push(u|r&s)):r<F||r>=d?(e.push(f|r>>12),e.push(u|r>>6&s),e.push(u|r&s)):(i+=1,r=T+((r&t)<<10|a.charCodeAt(i)&t),e.push(l|r>>18),e.push(u|r>>12&s),e.push(u|r>>6&s),e.push(u|r&s));return e}h.exports=g
});var A=o();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
