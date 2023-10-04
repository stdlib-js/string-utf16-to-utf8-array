// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function t(t){var e,h,p,o;if(!s(t))throw new TypeError(r("1Px3B,IL",t));for(p=t.length,h=[],o=0;o<p;o++)(e=t.charCodeAt(o))<128?h.push(e):e<2048?(h.push(192|e>>6),h.push(128|63&e)):e<55296||e>=57344?(h.push(224|e>>12),h.push(128|e>>6&63),h.push(128|63&e)):(o+=1,e=65536+((1023&e)<<10|1023&t.charCodeAt(o)),h.push(240|e>>18),h.push(128|e>>12&63),h.push(128|e>>6&63),h.push(128|63&e));return h}export{t as default};
//# sourceMappingURL=index.mjs.map
