/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

CryptoJS.pad.Iso10126={pad:function(r,o){var a=4*o,t=a-r.sigBytes%a;r.concat(CryptoJS.lib.WordArray.random(t-1)).concat(CryptoJS.lib.WordArray.create([t<<24],1))},unpad:function(r){var o=255&r.words[r.sigBytes-1>>>2];r.sigBytes-=o}};