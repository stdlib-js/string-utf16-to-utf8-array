// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var t=63,e=128;function h(h){var p,o,u,d;if(!s(h))throw new TypeError(r("1Px3B",h));for(u=h.length,o=[],d=0;d<u;d++)(p=h.charCodeAt(d))<e?o.push(p):p<2048?(o.push(192|p>>6),o.push(e|p&t)):p<55296||p>=57344?(o.push(224|p>>12),o.push(e|p>>6&t),o.push(e|p&t)):(d+=1,p=65536+((1023&p)<<10|1023&h.charCodeAt(d)),o.push(240|p>>18),o.push(e|p>>12&t),o.push(e|p>>6&t),o.push(e|p&t));return o}export{h as default};
//# sourceMappingURL=index.mjs.map
