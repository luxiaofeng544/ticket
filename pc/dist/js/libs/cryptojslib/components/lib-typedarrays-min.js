/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

!function(){if("function"==typeof ArrayBuffer){var n=CryptoJS.lib.WordArray,t=n.init;(n.init=function(n){if(n instanceof ArrayBuffer&&(n=new Uint8Array(n)),(n instanceof Int8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array)&&(n=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),n instanceof Uint8Array){for(var r=n.byteLength,a=[],i=0;i<r;i++)a[i>>>2]|=n[i]<<24-8*(i%4);t.call(this,a,r)}else t.apply(this,arguments)}).prototype=n}}();