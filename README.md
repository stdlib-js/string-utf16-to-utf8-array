<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# UTF-16 to UTF-8

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a [UTF-16][utf-16] encoded string to an array of integers using [UTF-8][utf-8] encoding.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import utf16ToUTF8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@esm/index.mjs';
```

#### utf16ToUTF8Array( str )

Converts a [UTF-16][utf-16] encoded string to an `array` of integers using [UTF-8][utf-8] encoding.

```javascript
var out = utf16ToUTF8Array( '☃' );
// returns [ 226, 152, 131 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   [UTF-16][utf-16] encoding uses one 16-bit unit for non-surrogates (`U+0000` to `U+D7FF` and `U+E000` to `U+FFFF`).

-   [UTF-16][utf-16] encoding uses two 16-bit units (surrogate pairs) for `U+10000` to `U+10FFFF` and encodes `U+10000-U+10FFFF` by subtracting `0x10000` from the code point, expressing the result as a 20-bit binary, and splitting the 20 bits of `0x0-0xFFFFF` as upper and lower 10-bits. The respective 10-bits are stored in two 16-bit words: a **high** and a **low** surrogate.

-   [UTF-8][utf-8] is defined to encode code points in one to four bytes, depending on the number of significant bits in the numerical value of the code point. Encoding uses the following byte sequences:

    ```text
    0x00000000 - 0x0000007F:
        0xxxxxxx

    0x00000080 - 0x000007FF:
        110xxxxx 10xxxxxx

    0x00000800 - 0x0000FFFF:
        1110xxxx 10xxxxxx 10xxxxxx

    0x00010000 - 0x001FFFFF:
        11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
    ```

    where an `x` represents a code point bit. Only the shortest possible multi-byte sequence which can represent a code point is used.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import utf16ToUTF8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@esm/index.mjs';

var values;
var out;
var i;

values = [
    'Ladies + Gentlemen',
    'An encoded string!',
    'Dogs, Cats & Mice',
    '☃',
    'æ',
    '𐐷'
];
for ( i = 0; i < values.length; i++ ) {
    out = utf16ToUTF8Array( values[ i ] );
    console.log( '%s: %s', values[ i ], out.join( ',' ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-utf16-to-utf8-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-utf16-to-utf8-array

[test-image]: https://github.com/stdlib-js/string-utf16-to-utf8-array/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string-utf16-to-utf8-array/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-utf16-to-utf8-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-utf16-to-utf8-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-utf16-to-utf8-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-utf16-to-utf8-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-utf16-to-utf8-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-utf16-to-utf8-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-utf16-to-utf8-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-utf16-to-utf8-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-utf16-to-utf8-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-utf16-to-utf8-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-utf16-to-utf8-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-utf16-to-utf8-array/main/LICENSE

[utf-8]: https://en.wikipedia.org/wiki/UTF-8

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

</section>

<!-- /.links -->
