/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

!function(){var e=CryptoJS,t=e.lib,r=t.Base,i=t.WordArray,n=e.algo,a=n.MD5,c=n.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=r.hasher.create(),a=i.create(),c=a.words,o=r.keySize,s=r.iterations;c.length<o;){f&&n.update(f);var f=n.update(e).finalize(t);n.reset();for(var u=1;u<s;u++)f=n.finalize(f),n.reset();a.concat(f)}return a.sigBytes=4*o,a}});e.EvpKDF=function(e,t,r){return c.create(r).compute(e,t)}}();