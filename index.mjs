// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function t(t){var h,e,p,o;if(!s(t))throw new TypeError(r("0hp3N",t));for(p=t.length,e=[],o=0;o<p;o++)(h=t.charCodeAt(o))<128?e.push(h):h<2048?(e.push(192|h>>6),e.push(128|63&h)):h<55296||h>=57344?(e.push(224|h>>12),e.push(128|h>>6&63),e.push(128|63&h)):(o+=1,h=65536+((1023&h)<<10|1023&t.charCodeAt(o)),e.push(240|h>>18),e.push(128|h>>12&63),e.push(128|h>>6&63),e.push(128|63&h));return e}export{t as default};
//# sourceMappingURL=index.mjs.map
