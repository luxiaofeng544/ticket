/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

!function(){function r(){for(var r=this._X,i=this._C,t=0;t<8;t++)e[t]=i[t];i[0]=i[0]+1295307597+this._b|0,i[1]=i[1]+3545052371+(i[0]>>>0<e[0]>>>0?1:0)|0,i[2]=i[2]+886263092+(i[1]>>>0<e[1]>>>0?1:0)|0,i[3]=i[3]+1295307597+(i[2]>>>0<e[2]>>>0?1:0)|0,i[4]=i[4]+3545052371+(i[3]>>>0<e[3]>>>0?1:0)|0,i[5]=i[5]+886263092+(i[4]>>>0<e[4]>>>0?1:0)|0,i[6]=i[6]+1295307597+(i[5]>>>0<e[5]>>>0?1:0)|0,i[7]=i[7]+3545052371+(i[6]>>>0<e[6]>>>0?1:0)|0,this._b=i[7]>>>0<e[7]>>>0?1:0;for(var t=0;t<8;t++){var a=r[t]+i[t],o=65535&a,s=a>>>16,v=((o*o>>>17)+o*s>>>15)+s*s,f=((4294901760&a)*a|0)+((65535&a)*a|0);h[t]=v^f}r[0]=h[0]+(h[7]<<16|h[7]>>>16)+(h[6]<<16|h[6]>>>16)|0,r[1]=h[1]+(h[0]<<8|h[0]>>>24)+h[7]|0,r[2]=h[2]+(h[1]<<16|h[1]>>>16)+(h[0]<<16|h[0]>>>16)|0,r[3]=h[3]+(h[2]<<8|h[2]>>>24)+h[1]|0,r[4]=h[4]+(h[3]<<16|h[3]>>>16)+(h[2]<<16|h[2]>>>16)|0,r[5]=h[5]+(h[4]<<8|h[4]>>>24)+h[3]|0,r[6]=h[6]+(h[5]<<16|h[5]>>>16)+(h[4]<<16|h[4]>>>16)|0,r[7]=h[7]+(h[6]<<8|h[6]>>>24)+h[5]|0}var i=CryptoJS,t=i.lib,a=t.StreamCipher,o=i.algo,s=[],e=[],h=[],v=o.Rabbit=a.extend({_doReset:function(){for(var i=this._key.words,t=this.cfg.iv,a=0;a<4;a++)i[a]=16711935&(i[a]<<8|i[a]>>>24)|4278255360&(i[a]<<24|i[a]>>>8);var o=this._X=[i[0],i[3]<<16|i[2]>>>16,i[1],i[0]<<16|i[3]>>>16,i[2],i[1]<<16|i[0]>>>16,i[3],i[2]<<16|i[1]>>>16],s=this._C=[i[2]<<16|i[2]>>>16,4294901760&i[0]|65535&i[1],i[3]<<16|i[3]>>>16,4294901760&i[1]|65535&i[2],i[0]<<16|i[0]>>>16,4294901760&i[2]|65535&i[3],i[1]<<16|i[1]>>>16,4294901760&i[3]|65535&i[0]];this._b=0;for(var a=0;a<4;a++)r.call(this);for(var a=0;a<8;a++)s[a]^=o[a+4&7];if(t){var e=t.words,h=e[0],v=e[1],f=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),c=16711935&(v<<8|v>>>24)|4278255360&(v<<24|v>>>8),_=f>>>16|4294901760&c,l=c<<16|65535&f;s[0]^=f,s[1]^=_,s[2]^=c,s[3]^=l,s[4]^=f,s[5]^=_,s[6]^=c,s[7]^=l;for(var a=0;a<4;a++)r.call(this)}},_doProcessBlock:function(i,t){var a=this._X;r.call(this),s[0]=a[0]^a[5]>>>16^a[3]<<16,s[1]=a[2]^a[7]>>>16^a[5]<<16,s[2]=a[4]^a[1]>>>16^a[7]<<16,s[3]=a[6]^a[3]>>>16^a[1]<<16;for(var o=0;o<4;o++)s[o]=16711935&(s[o]<<8|s[o]>>>24)|4278255360&(s[o]<<24|s[o]>>>8),i[t+o]^=s[o]},blockSize:4,ivSize:2});i.Rabbit=a._createHelper(v)}();