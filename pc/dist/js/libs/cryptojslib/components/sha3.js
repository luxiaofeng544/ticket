/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

!function(r){var o=CryptoJS,a=o.lib,t=a.WordArray,h=a.Hasher,i=o.x64,e=i.Word,v=o.algo,l=[],s=[],f=[];!function(){for(var r=1,o=0,a=0;a<24;a++){l[r+5*o]=(a+1)*(a+2)/2%64;var t=o%5,h=(2*r+3*o)%5;r=t,o=h}for(var r=0;r<5;r++)for(var o=0;o<5;o++)s[r+5*o]=o+(2*r+3*o)%5*5;for(var i=1,v=0;v<24;v++){for(var n=0,c=0,g=0;g<7;g++){if(1&i){var w=(1<<g)-1;w<32?c^=1<<w:n^=1<<w-32}128&i?i=i<<1^113:i<<=1}f[v]=e.create(n,c)}}();var n=[];!function(){for(var r=0;r<25;r++)n[r]=e.create()}();var c=v.SHA3=h.extend({cfg:h.cfg.extend({outputLength:512}),_doReset:function(){for(var r=this._state=[],o=0;o<25;o++)r[o]=new e.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(r,o){for(var a=this._state,t=this.blockSize/2,h=0;h<t;h++){var i=r[o+2*h],e=r[o+2*h+1];i=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8);var v=a[h];v.high^=e,v.low^=i}for(var c=0;c<24;c++){for(var g=0;g<5;g++){for(var w=0,u=0,_=0;_<5;_++){var v=a[g+5*_];w^=v.high,u^=v.low}var d=n[g];d.high=w,d.low=u}for(var g=0;g<5;g++)for(var p=n[(g+4)%5],H=n[(g+1)%5],S=H.high,y=H.low,w=p.high^(S<<1|y>>>31),u=p.low^(y<<1|S>>>31),_=0;_<5;_++){var v=a[g+5*_];v.high^=w,v.low^=u}for(var b=1;b<25;b++){var v=a[b],k=v.high,z=v.low,A=l[b];if(A<32)var w=k<<A|z>>>32-A,u=z<<A|k>>>32-A;else var w=z<<A-32|k>>>64-A,u=k<<A-32|z>>>64-A;var B=n[s[b]];B.high=w,B.low=u}var x=n[0],L=a[0];x.high=L.high,x.low=L.low;for(var g=0;g<5;g++)for(var _=0;_<5;_++){var b=g+5*_,v=a[b],m=n[b],W=n[(g+1)%5+5*_],C=n[(g+2)%5+5*_];v.high=m.high^~W.high&C.high,v.low=m.low^~W.low&C.low}var v=a[0],D=f[c];v.high^=D.high,v.low^=D.low}},_doFinalize:function(){var o=this._data,a=o.words,h=(8*this._nDataBytes,8*o.sigBytes),i=32*this.blockSize;a[h>>>5]|=1<<24-h%32,a[(r.ceil((h+1)/i)*i>>>5)-1]|=128,o.sigBytes=4*a.length,this._process();for(var e=this._state,v=this.cfg.outputLength/8,l=v/8,s=[],f=0;f<l;f++){var n=e[f],c=n.high,g=n.low;c=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),g=16711935&(g<<8|g>>>24)|4278255360&(g<<24|g>>>8),s.push(g),s.push(c)}return new t.init(s,v)},clone:function(){for(var r=h.clone.call(this),o=r._state=this._state.slice(0),a=0;a<25;a++)o[a]=o[a].clone();return r}});o.SHA3=h._createHelper(c),o.HmacSHA3=h._createHmacHelper(c)}(Math);