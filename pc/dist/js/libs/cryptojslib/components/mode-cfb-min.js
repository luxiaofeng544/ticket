/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

CryptoJS.mode.CFB=function(){function c(c,i,e,o){var r=this._iv;for(r?(r=r.slice(0),this._iv=void 0):r=this._prevBlock,o.encryptBlock(r,0),o=0;o<e;o++)c[i+o]^=r[o]}var i=CryptoJS.lib.BlockCipherMode.extend();return i.Encryptor=i.extend({processBlock:function(i,e){var o=this._cipher,r=o.blockSize;c.call(this,i,e,r,o),this._prevBlock=i.slice(e,e+r)}}),i.Decryptor=i.extend({processBlock:function(i,e){var o=this._cipher,r=o.blockSize,t=i.slice(e,e+r);c.call(this,i,e,r,o),this._prevBlock=t}}),i}();