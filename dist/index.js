"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=o(function(C,h){
var x=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist'),s=63,i=128,O=192,f=224,l=240,t=1023,c=2048,d=55296,F=57344,g=65536;function m(a){var r,e,v,u;if(!x(a))throw new TypeError(n('1Px3B',a));for(v=a.length,e=[],u=0;u<v;u++)r=a.charCodeAt(u),r<i?e.push(r):r<c?(e.push(O|r>>6),e.push(i|r&s)):r<d||r>=F?(e.push(f|r>>12),e.push(i|r>>6&s),e.push(i|r&s)):(u+=1,r=g+((r&t)<<10|a.charCodeAt(u)&t),e.push(l|r>>18),e.push(i|r>>12&s),e.push(i|r>>6&s),e.push(i|r&s));return e}h.exports=m
});var q=p();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
