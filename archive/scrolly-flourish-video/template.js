var template=(t=>{var H={value:()=>{}};function L(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new i(r)}function i(t){this._=t}function R(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=H,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}i.prototype=L.prototype={constructor:i,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(0<=e&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})),a=-1,u=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++a<u;)if(e=(t=o[a]).type)i[e]=R(i[e],t.name,n);else if(null==n)for(e in i)i[e]=R(i[e],t.name,null);return this}for(;++a<u;)if(e=(e=(t=o[a]).type)&&((t,n)=>{for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value})(i[e],t.name))return e},copy:function(){var t,n={},e=this._;for(t in e)n[t]=e[t].slice();return new i(n)},call:function(t,n){if(0<(e=arguments.length-2))for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var I="http://www.w3.org/1999/xhtml",j={svg:"http://www.w3.org/2000/svg",xhtml:I,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function o(t){var n=t+="",e=n.indexOf(":");return 0<=e&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),j.hasOwnProperty(n)?{space:j[n],local:t}:t}function D(t){t=o(t);return(t.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===I&&t.documentElement.namespaceURI===I?t.createElement(e):t.createElementNS(n,e)}})(t)}function B(){}function Y(t){return null==t?B:function(){return this.querySelector(t)}}function V(){return[]}function z(t){return null==t?V:function(){return this.querySelectorAll(t)}}function U(n){return function(){return null==(t=n.apply(this,arguments))?[]:Array.isArray(t)?t:Array.from(t);var t}}function F(t){return function(){return this.matches(t)}}function K(n){return function(t){return t.matches(n)}}var W=Array.prototype.find;function G(){return this.firstElementChild}var J=Array.prototype.filter;function Q(){return Array.from(this.children)}function Z(t){return new Array(t.length)}function d(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function tt(t,n,e,r,i,o){for(var a,u=0,s=n.length,l=o.length;u<l;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new d(t,o[u]);for(;u<s;++u)(a=n[u])&&(i[u]=a)}function nt(t,n,e,r,i,o,a){for(var u,s,l=new Map,c=n.length,h=o.length,f=new Array(c),p=0;p<c;++p)(u=n[p])&&(f[p]=s=a.call(u,u.__data__,p,n)+"",l.has(s)?i[p]=u:l.set(s,u));for(p=0;p<h;++p)s=a.call(t,o[p],p,o)+"",(u=l.get(s))?((r[p]=u).__data__=o[p],l.delete(s)):e[p]=new d(t,o[p]);for(p=0;p<c;++p)(u=n[p])&&l.get(f[p])===u&&(i[p]=u)}function et(t){return t.__data__}function rt(t,n){return t<n?-1:n<t?1:n<=t?0:NaN}function it(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function $(t,n){return t.style.getPropertyValue(n)||it(t).getComputedStyle(t,null).getPropertyValue(n)}function ot(t){return t.trim().split(/^|\s+/)}function at(t){return t.classList||new ut(t)}function ut(t){this._node=t,this._names=ot(t.getAttribute("class")||"")}function st(t,n){for(var e=at(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function lt(t,n){for(var e=at(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function ct(){this.textContent=""}function ht(){this.innerHTML=""}function ft(){this.nextSibling&&this.parentNode.appendChild(this)}function pt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dt(){return null}function _t(){var t=this.parentNode;t&&t.removeChild(this)}function yt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function gt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function vt(o){return function(){var t=this.__on;if(t){for(var n,e=0,r=-1,i=t.length;e<i;++e)n=t[e],o.type&&n.type!==o.type||n.name!==o.name?t[++r]=n:this.removeEventListener(n.type,n.listener,n.options);++r?t.length=r:delete this.__on}}}function mt(a,u,s){return function(){function t(t){e.call(this,t,this.__data__)}var n,e,r=this.__on;e=u;if(r)for(var i=0,o=r.length;i<o;++i)if((n=r[i]).type===a.type&&n.name===a.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=t,n.options=s),void(n.value=u);this.addEventListener(a.type,t,s),n={type:a.type,name:a.name,value:u,listener:t,options:s},r?r.push(n):this.__on=[n]}}function wt(t,n,e){var r=it(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}d.prototype={constructor:d,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ut.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){t=this._names.indexOf(t);0<=t&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return 0<=this._names.indexOf(t)}};var bt=[null];function x(t,n){this._groups=t,this._parents=n}function n(){return new x([[document.documentElement]],bt)}function xt(t,n,e){(t.prototype=n.prototype=e).constructor=t}function At(t,n){var e,r=Object.create(t.prototype);for(e in n)r[e]=n[e];return r}function l(){}x.prototype=n.prototype={constructor:x,select:function(t){"function"!=typeof t&&(t=Y(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,l=r[i]=new Array(s),c=0;c<s;++c)(o=u[c])&&(a=t.call(o,o.__data__,c,u))&&("__data__"in o&&(a.__data__=o.__data__),l[c]=a);return new x(r,this._parents)},selectAll:function(t){t=("function"==typeof t?U:z)(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,l=0;l<s;++l)(a=u[l])&&(r.push(t.call(a,a.__data__,l,u)),i.push(a));return new x(r,i)},selectChild:function(t){return this.select(null==t?G:(n="function"==typeof t?t:K(t),function(){return W.call(this.children,n)}));var n},selectChildren:function(t){return this.selectAll(null==t?Q:(n="function"==typeof t?t:K(t),function(){return J.call(this.children,n)}));var n},filter:function(t){"function"!=typeof t&&(t=F(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&s.push(o);return new x(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,et);var e,r=n?nt:tt,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var a=o.length,u=new Array(a),s=new Array(a),l=new Array(a),c=0;c<a;++c){var h=i[c],f=o[c],p=f.length,d="object"==typeof(d=t.call(h,h&&h.__data__,c,i))&&"length"in d?d:Array.from(d),_=d.length,y=s[c]=new Array(_),g=u[c]=new Array(_);r(h,f,y,g,l[c]=new Array(p),d,n);for(var v,m,w=0,b=0;w<_;++w)if(v=y[w]){for(b<=w&&(b=w+1);!(m=g[b])&&++b<_;);v._next=m||null}}return(u=new x(u,i))._enter=s,u._exit=l,u},enter:function(){return new x(this._enter||this._groups.map(Z),this._parents)},exit:function(){return new x(this._exit||this._groups.map(Z),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit(),r="function"==typeof t?(r=t(r))&&r.selection():r.append(t+"");return null!=n&&(i=(i=n(i))&&i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var t=t.selection?t.selection():t,n=this._groups,e=t._groups,r=n.length,t=e.length,i=Math.min(r,t),o=new Array(r),a=0;a<i;++a)for(var u,s=n[a],l=e[a],c=s.length,h=o[a]=new Array(c),f=0;f<c;++f)(u=s[f]||l[f])&&(h[f]=u);for(;a<r;++a)o[a]=n[a];return new x(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];0<=--o;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e=e||rt;for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a,u=n[o],s=u.length,l=i[o]=new Array(s),c=0;c<s;++c)(a=u[c])&&(l[c]=a);l.sort(t)}return new x(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(var n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e,t=o(t);return arguments.length<2?(e=this.node(),t.local?e.getAttributeNS(t.space,t.local):e.getAttribute(t)):this.each((null==n?t.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?t.local?function(n,e){return function(){var t=e.apply(this,arguments);null==t?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}:function(n,e){return function(){var t=e.apply(this,arguments);null==t?this.removeAttribute(n):this.setAttribute(n,t)}}:t.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(t,n))},style:function(t,n,e){return 1<arguments.length?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(n,e,r){return function(){var t=e.apply(this,arguments);null==t?this.style.removeProperty(n):this.style.setProperty(n,t,r)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):$(this.node(),t)},property:function(t,n){return 1<arguments.length?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(n,e){return function(){var t=e.apply(this,arguments);null==t?delete this[n]:this[n]=t}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=ot(t+"");if(arguments.length<2){for(var r=at(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?st:lt)(this,t)}}:n?function(t){return function(){st(this,t)}}:function(t){return function(){lt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?ct:("function"==typeof t?function(n){return function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?ht:("function"==typeof t?function(n){return function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(ft)},lower:function(){return this.each(pt)},append:function(t){var n="function"==typeof t?t:D(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:D(t),r=null==n?dt:"function"==typeof n?n:Y(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(_t)},clone:function(t){return this.select(t?gt:yt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return 0<=e&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}),a=o.length;if(!(arguments.length<2)){for(u=n?mt:vt,r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var s,l=0,c=u.length;l<c;++l)for(r=0,s=u[l];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return wt(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return wt(this,t,n)}})(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};var e="\\s*([+-]?\\d+)\\s*",r="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",a="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Nt=/^#([0-9a-f]{3,8})$/,kt=new RegExp(`^rgb\\(${e},${e},${e}\\)$`),Et=new RegExp(`^rgb\\(${a},${a},${a}\\)$`),St=new RegExp(`^rgba\\(${e},${e},${e},${r}\\)$`),Mt=new RegExp(`^rgba\\(${a},${a},${a},${r}\\)$`),$t=new RegExp(`^hsl\\(${r},${a},${a}\\)$`),Ct=new RegExp(`^hsla\\(${r},${a},${a},${r}\\)$`),qt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Pt(){return this.rgb().formatHex()}function Tt(){return this.rgb().formatRgb()}function c(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=Nt.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Ot(n):3===e?new s(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?u(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?u(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=kt.exec(t))?new s(n[1],n[2],n[3],1):(n=Et.exec(t))?new s(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=St.exec(t))?u(n[1],n[2],n[3],n[4]):(n=Mt.exec(t))?u(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=$t.exec(t))?Rt(n[1],n[2]/100,n[3]/100,1):(n=Ct.exec(t))?Rt(n[1],n[2]/100,n[3]/100,n[4]):qt.hasOwnProperty(t)?Ot(qt[t]):"transparent"===t?new s(NaN,NaN,NaN,0):null}function Ot(t){return new s(t>>16&255,t>>8&255,255&t,1)}function u(t,n,e,r){return new s(t=r<=0?n=e=NaN:t,n,e,r)}function Xt(t,n,e,r){return 1===arguments.length?(i=(i=t)instanceof l?i:c(i))?new s((i=i.rgb()).r,i.g,i.b,i.opacity):new s:new s(t,n,e,null==r?1:r);var i}function s(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Ht(){return"#"+p(this.r)+p(this.g)+p(this.b)}function Lt(){var t=h(this.opacity);return(1===t?"rgb(":"rgba(")+f(this.r)+`, ${f(this.g)}, `+f(this.b)+(1===t?")":`, ${t})`)}function h(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function f(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function p(t){return((t=f(t))<16?"0":"")+t.toString(16)}function Rt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||1<=e?t=n=NaN:n<=0&&(t=NaN),new _(t,n,e,r)}function It(t){var n,e,r,i,o,a,u,s;return t instanceof _?new _(t.h,t.s,t.l,t.opacity):(t=t instanceof l?t:c(t))?t instanceof _?t:(n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),a=NaN,s=((o=Math.max(n,e,r))+i)/2,(u=o-i)?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=0<s&&s<1?0:a,new _(a,u,s,t.opacity)):new _}function _(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function jt(t){return(t=(t||0)%360)<0?t+360:t}function y(t){return Math.max(0,Math.min(1,t||0))}function Dt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}xt(l,c,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Pt,formatHex:Pt,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return It(this).formatHsl()},formatRgb:Tt,toString:Tt}),xt(s,Xt,At(l,{brighter(t){return t=null==t?1/.7:Math.pow(1/.7,t),new s(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new s(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new s(f(this.r),f(this.g),f(this.b),h(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ht,formatHex:Ht,formatHex8:function(){return"#"+p(this.r)+p(this.g)+p(this.b)+p(255*(isNaN(this.opacity)?1:this.opacity))},formatRgb:Lt,toString:Lt})),xt(_,function(t,n,e,r){return 1===arguments.length?It(t):new _(t,n,e,null==r?1:r)},At(l,{brighter(t){return t=null==t?1/.7:Math.pow(1/.7,t),new _(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new _(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*n,e=2*e-n;return new s(Dt(240<=t?t-240:120+t,e,n),Dt(t,e,n),Dt(t<120?240+t:t-120,e,n),this.opacity)},clamp(){return new _(jt(this.h),y(this.s),y(this.l),h(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){var t=h(this.opacity);return(1===t?"hsl(":"hsla(")+jt(this.h)+`, ${100*y(this.s)}%, ${100*y(this.l)}%`+(1===t?")":`, ${t})`)}}));var Bt=t=>()=>t;function Yt(o){return 1==(o=+o)?Vt:function(t,n){return n-t?(e=t,r=n,i=o,e=Math.pow(e,i),r=Math.pow(r,i)-e,i=1/i,function(t){return Math.pow(e+t*r,i)}):Bt(isNaN(t)?n:t);var e,r,i}}function Vt(t,n){var e,r,i=n-t;return i?(e=t,r=i,function(t){return e+t*r}):Bt(isNaN(t)?n:t)}var zt=function t(n){var a=Yt(n);function e(n,t){var e=a((n=Xt(n)).r,(t=Xt(t)).r),r=a(n.g,t.g),i=a(n.b,t.b),o=Vt(n.opacity,t.opacity);return function(t){return n.r=e(t),n.g=r(t),n.b=i(t),n.opacity=o(t),n+""}}return e.gamma=t,e}(1);function g(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}var Ut,Ft=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Kt=new RegExp(Ft.source,"g"),Wt=180/Math.PI,Gt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Jt(t,n,e,r,i,o){var a,u,s;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Wt,skewX:Math.atan(s)*Wt,scaleX:a,scaleY:u}}function Qt(f,p,d,_){function y(t){return t.length?t.pop()+" ":""}return function(t,n){var e,r,i,o,a,u,s,l,c=[],h=[];return t=f(t),n=f(n),r=t.translateX,i=t.translateY,s=n.translateX,a=n.translateY,u=c,o=h,r!==s||i!==a?(e=u.push("translate(",null,p,null,d),o.push({i:e-4,x:g(r,s)},{i:e-2,x:g(i,a)})):(s||a)&&u.push("translate("+s+p+a+d),o=t.rotate,r=c,e=h,o!==(i=n.rotate)?(180<o-i?i+=360:180<i-o&&(o+=360),e.push({i:r.push(y(r)+"rotate(",null,_)-2,x:g(o,i)})):i&&r.push(y(r)+"rotate("+i+_),u=t.skewX,s=c,a=h,u!==(o=n.skewX)?a.push({i:s.push(y(s)+"skewX(",null,_)-2,x:g(u,o)}):o&&s.push(y(s)+"skewX("+o+_),r=t.scaleX,i=t.scaleY,a=n.scaleY,u=c,s=h,r!==(o=n.scaleX)||i!==a?(l=u.push(y(u)+"scale(",null,",",null,")"),s.push({i:l-4,x:g(r,o)},{i:l-2,x:g(i,a)})):1===o&&1===a||u.push(y(u)+"scale("+o+","+a+")"),t=n=null,function(t){for(var n,e=-1,r=h.length;++e<r;)c[(n=h[e]).i]=n.x(t);return c.join("")}}}var v,m,Zt=Qt(function(t){return(t=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"")).isIdentity?Gt:Jt(t.a,t.b,t.c,t.d,t.e,t.f)},"px, ","px)","deg)"),tn=Qt(function(t){return null!=t&&((Ut=Ut||document.createElementNS("http://www.w3.org/2000/svg","g")).setAttribute("transform",t),t=Ut.transform.baseVal.consolidate())?Jt((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Gt},", ",")",")"),w=0,b=0,A=0,nn=1e3,N=0,k=0,E=0,S="object"==typeof performance&&performance.now?performance:Date,en="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function rn(){return k||(en(on),k=S.now()+E)}function on(){k=0}function M(){this._call=this._time=this._next=null}function an(t,n,e){var r=new M;return r.restart(t,n,e),r}function un(){k=(N=S.now())+E,w=b=0;try{rn(),++w;for(var t,n=v;n;)0<=(t=k-n._time)&&n._call.call(void 0,t),n=n._next;--w}finally{for(var e,r,i=v,o=1/(w=0);i;)i=i._call?(o>i._time&&(o=i._time),(e=i)._next):(r=i._next,i._next=null,e?e._next=r:v=r);m=e,ln(o),k=0}}function sn(){var t=S.now(),n=t-N;nn<n&&(E-=n,N=t)}function ln(t){w||(b=b&&clearTimeout(b),24<t-k?(t<1/0&&(b=setTimeout(un,t-S.now()-E)),A=A&&clearInterval(A)):(A||(N=S.now(),A=setInterval(sn,nn)),w=1,en(un)))}function cn(n,e,t){var r=new M;return e=null==e?0:+e,r.restart(t=>{r.stop(),n(t+e)},e,t),r}M.prototype=an.prototype={constructor:M,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?rn():+e)+(null==n?0:+n),this._next||m===this||(m?m._next=this:v=this,m=this),this._call=t,this._time=e,ln()},stop:function(){this._call&&(this._call=null,this._time=1/0,ln())}};var hn=L("start","end","cancel","interrupt"),fn=[],pn=0,dn=1,_n=2,C=3,yn=4,gn=5,q=6;function P(t,n,e,r,i,o){var a,u,s,l,c,h=t.__transition;if(h){if(e in h)return}else t.__transition={};function f(t){var n,e,r,i;if(s.state!==dn)return d();for(n in c)if((i=c[n]).name===s.name){if(i.state===C)return cn(f);i.state===yn?(i.state=q,i.timer.stop(),i.on.call("interrupt",a,a.__data__,i.index,i.group),delete c[n]):+n<u&&(i.state=q,i.timer.stop(),i.on.call("cancel",a,a.__data__,i.index,i.group),delete c[n])}if(cn(function(){s.state===C&&(s.state=yn,s.timer.restart(p,s.delay,s.time),p(t))}),s.state=_n,s.on.call("start",a,a.__data__,s.index,s.group),s.state===_n){for(s.state=C,l=new Array(r=s.tween.length),n=0,e=-1;n<r;++n)(i=s.tween[n].value.call(a,a.__data__,s.index,s.group))&&(l[++e]=i);l.length=e+1}}function p(t){for(var n=t<s.duration?s.ease.call(null,t/s.duration):(s.timer.restart(d),s.state=gn,1),e=-1,r=l.length;++e<r;)l[e].call(a,n);s.state===gn&&(s.on.call("end",a,a.__data__,s.index,s.group),d())}function d(){for(var t in s.state=q,s.timer.stop(),delete c[u],c)return;delete a.__transition}a=t,u=e,s={name:n,index:r,group:i,on:hn,tween:fn,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:pn},((c=a.__transition)[u]=s).timer=an(function(t){s.state=dn,s.timer.restart(f,s.delay,s.time),s.delay<=t&&f(t-s.delay)},0,s.time)}function vn(t,n){t=O(t,n);if(t.state>pn)throw new Error("too late; already scheduled");return t}function T(t,n){t=O(t,n);if(t.state>C)throw new Error("too late; already running");return t}function O(t,n){t=t.__transition;if(t=t&&t[n])return t;throw new Error("transition not found")}function mn(t,n,e){var r=t._id;return t.each(function(){var t=T(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return O(t,r).value[n]}}function wn(t,n){var e;return("number"==typeof n?g:n instanceof c?zt:(e=c(n))?(n=e,zt):function(t,r){var n,e,i,o,a,u=Ft.lastIndex=Kt.lastIndex=0,s=-1,l=[],c=[];for(t+="",r+="";(n=Ft.exec(t))&&(e=Kt.exec(r));)(i=e.index)>u&&(i=r.slice(u,i),l[s]?l[s]+=i:l[++s]=i),(n=n[0])===(e=e[0])?l[s]?l[s]+=e:l[++s]=e:(l[++s]=null,c.push({i:s,x:g(n,e)})),u=Kt.lastIndex;return u<r.length&&(i=r.slice(u),l[s]?l[s]+=i:l[++s]=i),l.length<2?c[0]?(a=c[0].x,function(t){return a(t)+""}):(o=r,function(){return o}):(r=c.length,function(t){for(var n,e=0;e<r;++e)l[(n=c[e]).i]=n.x(t);return l.join("")})})(t,n)}function bn(r,i){var o,a;function t(){var n,e,t=i.apply(this,arguments);return o=t!==a?(a=t)&&(n=r,e=t,function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}):o}return t._value=i,t}function xn(r,i){var o,a;function t(){var n,e,t=i.apply(this,arguments);return o=t!==a?(a=t)&&(n=r,e=t,function(t){this.setAttribute(n,e.call(this,t))}):o}return t._value=i,t}var An=n.prototype.constructor;function Nn(t){return function(){this.style.removeProperty(t)}}function kn(i,o,a){var u,s;function t(){var n,e,r,t=o.apply(this,arguments);return u=t!==s?(s=t)&&(n=i,e=t,r=a,function(t){this.style.setProperty(n,e.call(this,t),r)}):u}return t._value=o,t}function En(e){var r,i;function t(){var n,t=e.apply(this,arguments);return r=t!==i?(i=t)&&(n=t,function(t){this.textContent=n.call(this,t)}):r}return t._value=e,t}var Sn=0;function X(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}X.prototype={constructor:X,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Y(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,l=r[a],c=l.length,h=o[a]=new Array(c),f=0;f<c;++f)(u=l[f])&&(s=t.call(u,u.__data__,f,l))&&("__data__"in u&&(s.__data__=u.__data__),h[f]=s,P(h[f],n,e,f,h,O(u,e)));return new X(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=z(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,l=r[u],c=l.length,h=0;h<c;++h)if(s=l[h]){for(var f,p=t.call(s,s.__data__,h,l),d=O(s,e),_=0,y=p.length;_<y;++_)(f=p[_])&&P(f,n,e,_,p,d);o.push(p),a.push(s)}return new X(o,a,n,e)},selectChild:(e=n.prototype).selectChild,selectChildren:e.selectChildren,filter:function(t){"function"!=typeof t&&(t=F(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&s.push(o);return new X(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,t=e.length,i=Math.min(r,t),o=new Array(r),a=0;a<i;++a)for(var u,s=n[a],l=e[a],c=s.length,h=o[a]=new Array(c),f=0;f<c;++f)(u=s[f]||l[f])&&(h[f]=u);for(;a<r;++a)o[a]=n[a];return new X(o,this._parents,this._name,this._id)},selection:function(){return new An(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=++Sn,r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)(a=u[l])&&P(a,t,e,l,u,{time:(a=O(a,n)).time+a.delay+a.duration,delay:0,duration:a.duration,ease:a.ease});return new X(r,this._parents,t,e)},call:e.call,nodes:e.nodes,node:e.node,size:e.size,empty:e.empty,each:e.each,on:function(t,n){var e,r,i,o,a,u,s=this._id;return arguments.length<2?O(this.node(),s).on.on(t):this.each((e=s,i=n,u=((r=t)+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return!(t=0<=n?t.slice(0,n):t)||"start"===t})?vn:T,function(){var t=u(this,e),n=t.on;n!==o&&(a=(o=n).copy()).on(r,i),t.on=a}))},attr:function(t,n){var e=o(t),r="transform"===e?tn:wn;return this.attrTween(t,"function"==typeof n?(e.local?function(r,i,o){var a,u,s;return function(){var t,n,e=o(this);if(null!=e)return(t=this.getAttributeNS(r.space,r.local))===(n=e+"")?null:t===a&&n===u?s:(u=n,s=i(a=t,e));this.removeAttributeNS(r.space,r.local)}}:function(r,i,o){var a,u,s;return function(){var t,n,e=o(this);if(null!=e)return(t=this.getAttribute(r))===(n=e+"")?null:t===a&&n===u?s:(u=n,s=i(a=t,e));this.removeAttribute(r)}})(e,r,mn(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(n,e,r){var i,o,a=r+"";return function(){var t=this.getAttributeNS(n.space,n.local);return t===a?null:t===i?o:o=e(i=t,r)}}:function(n,e,r){var i,o,a=r+"";return function(){var t=this.getAttribute(n);return t===a?null:t===i?o:o=e(i=t,r)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;return t=o(t),this.tween(e,(t.local?bn:xn)(t,n))},style:function(t,n,e){var r,i,o,a,u,s,l,c,h,f,p,d,_,y,g,v,m,w,b,x,A,N,k,E,S,M="transform"==(t+="")?Zt:wn;return null==n?this.styleTween(t,(A=t,N=M,function(){var t=$(this,A),n=(this.style.removeProperty(A),$(this,A));return t===n?null:t===k&&n===E?S:S=N(k=t,E=n)})).on("end.style."+t,Nn(t)):"function"==typeof n?this.styleTween(t,(v=M,m=mn(this,"style."+(g=t),n),function(){var t=$(this,g),n=m(this),e=n+"";return null==n&&(this.style.removeProperty(g),e=n=$(this,g)),t===e?null:t===w&&e===b?x:(b=e,x=v(w=t,n))})).each((l=this._id,y="end."+(_="style."+(c=t)),function(){var t=T(this,l),n=t.on,e=null==t.value[_]?d=d||Nn(c):void 0;n===h&&p===e||(f=(h=n).copy()).on(y,p=e),t.on=f})):this.styleTween(t,(r=t,i=M,s=(o=n)+"",function(){var t=$(this,r);return t===s?null:t===a?u:u=i(a=t,o)}),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,kn(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?(e=mn(this,"text",t),function(){var t=e(this);this.textContent=null==t?"":t}):(n=null==t?"":t+"",function(){this.textContent=n}));var n,e},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,En(t))},remove:function(){return this.on("end.remove",(e=this._id,function(){var t,n=this.parentNode;for(t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}));var e},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=O(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(i,o){var a,u;return function(){var t=T(this,i),n=t.tween;if(n!==a)for(var e=0,r=(u=a=n).length;e<r;++e)if(u[e].name===o){(u=u.slice()).splice(e,1);break}t.tween=u}}:function(o,a,u){var s,l;if("function"!=typeof u)throw new Error;return function(){var t=T(this,o),n=t.tween;if(n!==s){l=(s=n).slice();for(var e={name:a,value:u},r=0,i=l.length;r<i;++r)if(l[r].name===a){l[r]=e;break}r===i&&l.push(e)}t.tween=l}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){vn(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){vn(this,t).delay=n}})(n,t)):O(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){T(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){T(this,t).duration=n}})(n,t)):O(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(((t,n)=>{if("function"!=typeof n)throw new Error;return function(){T(this,t).ease=n}})(n,t)):O(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each((n=this._id,e=t,function(){var t=e.apply(this,arguments);if("function"!=typeof t)throw new Error;T(this,n).ease=t}));var n,e},end:function(){var i,o,a=this,u=a._id,s=a.size();return new Promise(function(t,n){var e={value:n},r={value:function(){0==--s&&t()}};a.each(function(){var t=T(this,u),n=t.on;n!==i&&((o=(i=n).copy())._.cancel.push(e),o._.interrupt.push(e),o._.end.push(r)),t.on=o}),0===s&&t()})},[Symbol.iterator]:e[Symbol.iterator]};var Mn={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}},$n=(n.prototype.interrupt=function(u){return this.each(function(){var t,n,e,r=this,i=u,o=r.__transition,a=!0;if(o){for(e in i=null==i?null:i+"",o)(t=o[e]).name!==i?a=!1:(n=_n<t.state&&t.state<gn,t.state=q,t.timer.stop(),t.on.call(n?"interrupt":"cancel",r,r.__data__,t.index,t.group),delete o[e]);a&&delete r.__transition}})},n.prototype.transition=function(t){var n,e;t=t instanceof X?(n=t._id,t._name):(n=++Sn,(e=Mn).time=rn(),null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)(a=u[l])&&P(a,t,n,l,u,e||((t,n)=>{for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e})(a,n));return new X(r,this._parents,t,n)},{text_box_color:"white",text_box_background_color:"rgba(189, 0, 54, 0.843)"});function Cn(){for(var t=document.getElementsByClassName("step-inner"),n=0;n<t.length;n++)t[n].style.color=$n.text_box_color,t[n].style.backgroundColor=$n.text_box_background_color;console.log("update")}return t.data={},t.draw=function(){var t=(n=("string"==typeof(n="main")?new x([[document.querySelector(n)]],[document.documentElement]):new x([[n]],bt)).select("#scrolly")).select("#figure"),e=(n.select("article").selectAll(".step"),t.select("#video").node()),n=(e.src=Flourish.static_prefix+"/video/HoL-Scrolly-telling_FULL.mp4",scrollama()),r=[{start:3,end:10},{start:11,end:25},{start:25,end:35},{start:35,end:40}];function i(t){e.pause();var n=r[t.index];n&&(e.currentTime=n.start,"down"===t.direction)&&(e.play(),e.ontimeupdate=function(){e.currentTime>=n.end&&e.pause()})}n.setup({step:"#scrolly article .step",offset:1,debug:!1}).onStepEnter(i),Cn()},t.state=$n,t.update=Cn,t})({});
//# sourceMappingURL=template.js.map
