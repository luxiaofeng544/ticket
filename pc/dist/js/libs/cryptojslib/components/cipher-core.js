/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

CryptoJS.lib.Cipher||function(e){var t=CryptoJS,r=t.lib,i=r.Base,n=r.WordArray,c=r.BufferedBlockAlgorithm,s=t.enc,o=(s.Utf8,s.Base64),a=t.algo,f=a.EvpKDF,p=r.Cipher=c.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?S:k}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()}),h=(r.StreamCipher=p.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),t.mode={}),d=r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),u=h.CBC=function(){function t(t,r,i){var n=this._iv;if(n){var c=n;this._iv=e}else var c=this._prevBlock;for(var s=0;s<i;s++)t[r+s]^=c[s]}var r=d.extend();return r.Encryptor=r.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize;t.call(this,e,r,n),i.encryptBlock(e,r),this._prevBlock=e.slice(r,r+n)}}),r.Decryptor=r.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize,c=e.slice(r,r+n);i.decryptBlock(e,r),t.call(this,e,r,n),this._prevBlock=c}}),r}(),l=t.pad={},_=l.Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,c=i<<24|i<<16|i<<8|i,s=[],o=0;o<i;o+=4)s.push(c);var a=n.create(s,i);e.concat(a)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},v=(r.BlockCipher=p.extend({cfg:p.cfg.extend({mode:u,padding:_}),reset:function(){p.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=r.createEncryptor;else{var i=r.createDecryptor;this._minBufferSize=1}this._mode=i.call(r,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),y=t.format={},g=y.OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var i=n.create([1398893684,1701076831]).concat(r).concat(t);else var i=t;return i.toString(o)},parse:function(e){var t=o.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var i=n.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return v.create({ciphertext:t,salt:i})}},k=r.SerializableCipher=i.extend({cfg:i.extend({format:g}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),c=n.finalize(t),s=n.cfg;return v.create({ciphertext:c,key:r,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=e.createDecryptor(r,i).finalize(t.ciphertext);return n},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),x=t.kdf={},m=x.OpenSSL={execute:function(e,t,r,i){i||(i=n.random(8));var c=f.create({keySize:t+r}).compute(e,i),s=n.create(c.words.slice(t),4*r);return c.sigBytes=4*t,v.create({key:c,iv:s,salt:i})}},S=r.PasswordBasedCipher=k.extend({cfg:k.cfg.extend({kdf:m}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=i.kdf.execute(r,e.keySize,e.ivSize);i.iv=n.iv;var c=k.encrypt.call(this,e,t,n.key,i);return c.mixIn(n),c},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);i.iv=n.iv;var c=k.decrypt.call(this,e,t,n.key,i);return c}})}();