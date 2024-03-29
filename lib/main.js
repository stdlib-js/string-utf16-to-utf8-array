/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/string-format' );


// VARIABLES //

// 2^6-1 = 63 => 0x3f => 00111111
var Ox3F = 63|0;

// 2^7 = 128 => 0x80 => 10000000
var Ox80 = 128|0;

// 192 => 0xc0 => 11000000
var OxC0 = 192|0;

// 224 => 0xe0 => 11100000
var OxE0 = 224|0;

// 240 => 0xf0 => 11110000
var OxF0 = 240|0;

// 2^10-1 = 1023 => 0x3ff => 00000011 11111111
var Ox3FF = 1023|0;

// 2^11 = 2048 => 0x800 => 00001000 00000000
var Ox800 = 2048|0;

// 55296 => 11011000 00000000
var OxD800 = 55296|0;

// 57344 => 11100000 00000000
var OxE000 = 57344|0;

// 2^16 = 65536 => 00000000 00000001 00000000 00000000
var Ox10000 = 65536|0;


// MAIN //

/**
* Converts a UTF-16 encoded string to an array of integers using UTF-8 encoding.
*
* ## Method
*
* -   UTF-8 is defined to encode code points in one to four bytes, depending on the number of significant bits in the numerical value of the code point.
*
* -   UTF-16 encoding uses one 16-bit unit for non-surrogates (U+0000 to U+D7FF and U+E000 to U+FFFF).
*
* -   UTF-16 encoding uses two 16-bit units (surrogate pairs) for U+10000 to U+10FFFF and encodes U+10000-U+10FFFF by subtracting 0x10000 from the code point, expressing the result as a 20-bit binary, and splitting the 20 bits of 0x0-0xFFFFF as upper and lower 10-bits. The respective 10-bits are stored in two 16-bit words.
*
* -   Let `N` be the number of significant bits.
*
* -   If `N <= 7` (i.e., U+0000 to U+007F), a code point is encoded in a single byte.
*
*     ```text
*     0xxxxxxx
*     ```
*
*     where an `x` refers to a code point bit.
*
* -   If `N <= 11` (i.e., U+0080 to U+07FF; ASCII characters), a code point is encoded in two bytes (5+6 bits).
*
*     ```text
*     110xxxxx 10xxxxxx
*     ```
*
* -   If `N <= 16` (i.e., U+0800 to U+FFFF), a code point is encoded in three bytes (4+6+6 bits).
*
*     ```text
*     1110xxxx 10xxxxxx 10xxxxxx
*     ```
*
* -   If `N <= 21` (i.e., U+10000 to U+10FFFF), a code point is encoded in four bytes (3+6+6+6 bits).
*
*     ```text
*     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
*     ```
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {Array} array of integers
* @see [UTF-8]{@link https://en.wikipedia.org/wiki/UTF-8}
* @see [Stack Overflow]{@link https://stackoverflow.com/questions/6240055/manually-converting-unicode-codepoints-into-utf-8-and-utf-16}
*
* @example
* var str = '☃';
* var out = utf16ToUTF8Array( str );
* // returns [ 226, 152, 131 ]
*/
function utf16ToUTF8Array( str ) {
	var code;
	var out;
	var len;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	len = str.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		code = str.charCodeAt( i );

		// ASCII...
		if ( code < Ox80 ) {
			out.push( code );
		}
		// UTF-16 non-surrogate pair...
		else if ( code < Ox800 ) {
			out.push( OxC0 | (code>>6) );
			out.push( Ox80 | (code & Ox3F) );
		}
		else if ( code < OxD800 || code >= OxE000 ) {
			out.push( OxE0 | (code>>12) );
			out.push( Ox80 | ((code>>6) & Ox3F) );
			out.push( Ox80 | (code & Ox3F) );
		}
		// UTF-16 surrogate pair...
		else {
			i += 1;

			// eslint-disable-next-line max-len
			code = Ox10000 + (((code & Ox3FF)<<10) | (str.charCodeAt(i) & Ox3FF));

			out.push( OxF0 | (code>>18) );
			out.push( Ox80 | ((code>>12) & Ox3F) );
			out.push( Ox80 | ((code>>6) & Ox3F) );
			out.push( Ox80 | (code & Ox3F) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = utf16ToUTF8Array;
