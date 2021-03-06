/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

CryptoJS.mode.CTRGladman=function(){function e(e){if(255===(e>>24&255)){var r=e>>16&255,t=e>>8&255,i=255&e;255===r?(r=0,255===t?(t=0,255===i?i=0:++i):++t):++r,e=0+(r<<16)+(t<<8),e+=i}else e+=16777216;return e}var r=CryptoJS.lib.BlockCipherMode.extend(),t=r.Encryptor=r.extend({processBlock:function(r,t){var i=this._cipher,o=i.blockSize,c=this._iv,n=this._counter;for(c&&(n=this._counter=c.slice(0),this._iv=void 0),c=n,0===(c[0]=e(c[0]))&&(c[1]=e(c[1])),n=n.slice(0),i.encryptBlock(n,0),i=0;i<o;i++)r[t+i]^=n[i]}});return r.Decryptor=t,r}();