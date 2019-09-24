!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueEgret=e():t.VueEgret=e()}(window,function(){return(r={},t.m=e=[function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.noop=function(t,e,r){},e.hasProto="__proto__"in{},e.isObject=function(t){return null!==t&&"object"==typeof t},e.toString=function(t){return null==t?"":Array.isArray(t)||i(t)&&t.toString===n?JSON.stringify(t,null,2):String(t)},e.toNumber=function(t){var e=Number(t);return isNaN(e)?t:e};var n=Object.prototype.toString;function i(t){return"[object Object]"===n.call(t)}e.isPlainObject=i,e.isRegExp=function(t){return"[object RegExp]"===n.call(t)},function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r(4))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i=(o.prototype.depend=function(){o.target&&o.target.addDep(this)},o.prototype.addSub=function(t){this.subs.push(t)},o.prototype.removeSub=function(t){var e=this.subs.indexOf(t);-1<e&&this.subs.splice(e,1)},o.prototype.notify=function(){this.subs.forEach(function(t){t.update()})},o);function o(){this.id=n++,this.subs=[]}(e.default=i).target=null;var s=[];e.pushTarget=function(t){s.push(t),i.target=t},e.popTarget=function(){s.pop(),i.target=s[s.length-1]}},function(t,e,r){"use strict";
/*!
* vue-egret 1.0.0
* @author Hsuna
*/var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n};Object.defineProperty(e,"__esModule",{value:!0});var s,a=r(3),p=r(11),u=r(13),c=r(1),f=r(0),h=r(14),d=(s=egret.Event,i(_,s),_);function _(t,e,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1);var i=s.call(this,t,r,n)||this;return i.data=e,i}e.ComponentEvent=d;var l=(v.prototype._init=function(){this._initProps(this.options.props),this._initMethods(this.options.methods),this._initData(this.options.data),this._initComputed(this.options.computed),this.$callHook("beforeCreate"),this._initWatch(),this._initComponents(this.options.components),this.$callHook("created"),this.__render=new a.default(this),this.__watcher=new u.default(this,this.__render.update.bind(this.__render),f.noop)},v.prototype._initProps=function(t){function e(e){r.__props[e]=h.validateProp(t[e]),Object.defineProperty(r,e,{get:function(){return this.__props[e]}})}void 0===t&&(t={});var r=this;for(var n in t)e(n);p.observe(this.__props)},v.prototype._initData=function(t){function e(t){Object.defineProperty(r,t,{get:function(){return this.__data[t]},set:function(e){this.__data[t]=e}})}this.__data="function"==typeof t?this._getData(t):t||{};var r=this;for(var n in this.__data)e(n);p.observe(this.__data)},v.prototype._initMethods=function(t){for(var e in void 0===t&&(t={}),t)this[e]=t[e]},v.prototype._initComputed=function(t){function e(e){var n=t[e]||f.noop,i="function"==typeof n?n:n.get;Object.defineProperty(r,e,{get:function(){return i.call(this)}})}void 0===t&&(t={});var r=this;for(var n in t)e(n)},v.prototype._initWatch=function(t){var e=this;function r(r){var i=t[r];Array.isArray(i)?i.forEach(function(t){return e._createWatcher(r,t)}):n._createWatcher(r,i)}void 0===t&&(t={});var n=this;for(var i in t)r(i)},v.prototype._initComponents=function(t){for(var e in void 0===t&&(t={}),t)this.__components[e]=g.classFactory(t[e])},v.prototype._getData=function(t){c.pushTarget();try{return t.call(this,this)}catch(t){return{}}finally{c.popTarget()}},v.prototype._createWatcher=function(t,e,r){return f.isPlainObject(e)&&(e=(r=e).handler),"string"==typeof e&&(e=this[e]),this.$watch(t,e,r)},v.prototype.$emit=function(t,e){return this.sp.dispatchEvent(new d(t,e)),this},v.prototype.$watch=function(t,e,r){if(f.isPlainObject(e))return this._createWatcher(t,e,r);r=r||{};var n=new u.default(this,t,e);return function(){n.teardown()}},v.prototype.$callHook=function(t){for(var e,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];"function"==typeof this.options[t]&&(e=this.options[t]).call.apply(e,o([this],r))},Object.defineProperty(v.prototype,"$refs",{get:function(){return this.__refs},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_data",{get:function(){return this.__data},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_props",{get:function(){return this.__props},set:function(t){this.__props=t},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_render",{get:function(){return this.__render},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_watcher",{get:function(){return this.__watcher},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_watchers",{get:function(){return this.__watchers},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"_components",{get:function(){return this.__components},enumerable:!0,configurable:!0}),v);function v(t,e){void 0===e&&(e={}),this.__data={},this.__props={},this.__watchers=[],this.__components={},this.__refs=[],this.sp=t,this.options=e,this._init()}e.Component=l;var y,g=(y=egret.Sprite,i(b,y),b._components={},b.component=function(t,e){b._components[t]=b.classFactory(e)},b.classFactory=function(t){return i(e,r=b),e;function e(){return r.call(this,t)||this}var r},b);function b(t){var e=y.call(this)||this;return e.vm=new l(e,t),e}e.default=g},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=r(5),o=r(9),s=r(10),a=r(2),p=r(1);function u(t){t._c=o.createVNode,t._n=n.toNumber,t._s=n.toString,t._l=s.renderList}e.installRender=u;var c=(f.prototype._init=function(){u(this._vm),this._ast=o.genVNode(i.default.created(this._vm.options.template).root)},f.prototype.update=function(){this._vm.__refs=[];var t=this._createVNode(this._ast);this._vnode=this._patch(this._vnode,t)},f.prototype._patch=function(t,e){if(t)if(this._sameVNode(t,e))this._patchVNode(t,e);else{var r=t.sp.parent;r&&(n=this._createDisObj(e),r.addChildAt(n,r.getChildIndex(t.sp)),this._destroyDisObj(t))}else{var n=this._createDisObj(e);this._vm.sp.addChild(n)}return e},f.prototype._patchVNode=function(t,e){e.sp=t.sp,this._updateDisObj(t,e),this._updateChildren(t.children,e.children,e.sp)},f.prototype._updateChildren=function(t,e,r){if(t!==e){for(var n=0,i=0,o=t.length-1,s=e.length-1,a=t[0],p=t[o],u=e[0],c=e[s];n<=o&&i<=s;)if(a)if(p)if(this._sameVNode(a,u))this._patchVNode(a,u),a=t[++n],u=e[++i];else if(this._sameVNode(p,c))this._patchVNode(p,c),p=t[--o],c=e[--s];else{for(var f=void 0,h=n;h<=o;h++)if(this._sameVNode(u,t[h])){this._patchVNode(t[h],u),f=u.sp,r.setChildIndex(f,i);var d=t.splice(h,1)[0];t.splice(i,0,d),a=t[++n];break}f||(f=this._createDisObj(u),r.addChildAt(f,i)),u=e[++i]}else p=t[--o];else a=t[++n];if(o<n)for(f=void 0;u;)f=this._createDisObj(u),r.addChild(f),u=e[++i];else if(s<i)for(;a;)this._destroyDisObj(a),a=t[++n]}},f.prototype._sameVNode=function(t,e){return e.key===t.key&&t.tag===e.tag},f.prototype._createVNode=function(t){try{return Function.prototype.constructor("with(this){ return "+t+";}").call(this._vm)}catch(t){throw new Error(t)}},f.prototype._createDisObj=function(t){var e=this,r=this._vm._components[t.tag]||a.default._components[t.tag]||egret[t.tag];if(!r)throw new Error("Then ["+t.tag+"] Node is undefined!!!");for(var n in t.sp=new r,p.pushTarget(),t.attrs)t.sp[n]=t.attrs[n];for(var i in t.on)t.sp.addEventListener(i,t.on[i],this._vm);t.ref&&(this._vm.__refs[t.ref]=t.sp);var o=t.sp.vm;if(o instanceof a.Component)for(var s in o._props)s in t.attrs&&(o._props[s]=t.attrs[s]),s in this._vm._props&&this._vm._props[s];return t.children.forEach(function(r){return t.sp.addChild(e._createDisObj(r))}),p.popTarget(),o instanceof a.Component&&o.$callHook("mounted"),t.sp},f.prototype._updateDisObj=function(t,e){if(t.sp instanceof a.default){var r=t.sp.vm;for(var n in r._props)n in e.attrs&&(r._props[n]=e.attrs[n]),n in this._vm._props&&(r._props[n]=this._vm._props[n])}else{for(var i in e.attrs)t.attrs[i]!==e.attrs[i]&&(t.sp[i]=e.attrs[i]);for(var o in e.on)t.on[o]!==e.on[o]&&(t.sp.removeEventListener(o,t.on[o],this._vm),t.sp.addEventListener(o,e.on[o],this._vm))}},f.prototype._destroyDisObj=function(t){var e=this;if(t.sp){for(var r in t.sp instanceof a.default&&t.sp.vm.$callHook("beforeDestroyed"),t.sp.parent&&t.sp.parent.removeChild(t.sp),t.on)t.sp.removeEventListener(r,t.on[r],this._vm);t.sp instanceof a.default&&t.sp.vm.$callHook("destroyed")}return t.children.forEach(function(t){return e._destroyDisObj(t)}),t},f);function f(t){this._vm=t,this._init()}e.default=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UNICODE_REG_EXP=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,e.isReserved=function(t){var e=(t+"").charCodeAt(0);return 36===e||95===e},e.def=function(t,e,r,n){Object.defineProperty(t,e,{value:r,enumerable:!!n,writable:!0,configurable:!0})};var n=new RegExp("[^"+e.UNICODE_REG_EXP.source+".$_\\d]");e.parsePath=function(t){if(!n.test(t)){var e=t.split(".");return function(t){for(var r=0;r<e.length;r++){if(!t)return;t=t[e[r]]}return t}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),i=r(7),o=r(8),s=(a.created=function(t){var e=new a;return new n.default(t,e),e},a.prototype.startElement=function(t,e,r){if(this._parent=this._target,this._target=o.default(t,e,this._parent),this._root){if(!this._parent)throw new Error("tow root")}else this._root=this._target;r&&this.endElement(t)},a.prototype.endElement=function(t){var e;(e=i.getAndRemoveAttr(this._target,"ref"))&&(this._target.ref=e),(e=i.getAndRemoveAttr(this._target,"v-for"))&&(this._target.processMap.for=i.parseFor(e)),(e=i.getAndRemoveAttr(this._target,"v-if"))?this._target.processMap.if=this.addIfConditions(e):(e=i.getAndRemoveAttr(this._target,"v-else-if"))?this._target.processMap.elseif=this.addIfConditions(e,!0):void 0!==(e=i.getAndRemoveAttr(this._target,"v-else"))&&(this._target.processMap.else=this.addIfConditions(!0,!0)),!this._parent||this._target===this._root||this._target.processMap.elseif||this._target.processMap.else||this._parent.children.push(this._target),this._target=this._parent,this._parent&&(this._parent=this._parent.parent)},a.prototype.comment=function(t){},a.prototype.characters=function(t){this._target.text=t.replace(/^\s+|\s+$/g,"")},a.prototype.addIfConditions=function(t,e){var r;if(void 0===e&&(e=!1),e){var n=this._target.parent;if(n){var i=n.children[n.children.length-1];i&&(r=i.processMap).ifConditions.push({exp:t,target:this._target})}}else(r=this._target.processMap).ifConditions||(r.ifConditions=[]),r.ifConditions.push({exp:t,target:this._target});return t},Object.defineProperty(a.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),a);function a(){}e.default=s},function(t,e,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n};Object.defineProperty(e,"__esModule",{value:!0});var i=/\/\s*>/,o=/^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,s=/([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,a=/^<\/([^>\s]+)[^>]*>/m,p=(u.prototype._parse=function(t){for(var e,r=!1;0<t.length;)"\x3c!--"==t.substring(0,4)?r=-1==(e=t.indexOf("--\x3e"))||(this.options.comment(t.substring(4,e)),t=t.substring(e+3),!1):"</"==t.substring(0,2)?r=!a.test(t)||(t=t.replace(a,this.parseEndTag.bind(this)),!1):"<"==t.charAt(0)&&(r=!o.test(t)||(t=t.replace(o,this.parseStartTag.bind(this)),!1)),r&&(t=-1==(e=t.indexOf("<"))?(this.options.characters(t),""):(this.options.characters(t.substring(0,e)),t.substring(e))),r=!0},u.prototype.parseStartTag=function(t,e,r){var n=this.parseAttributes(e,r),o=i.test(t);return this.options.startElement(e,n,o),""},u.prototype.parseEndTag=function(t,e){return this.options.endElement(e),""},u.prototype.parseAttributes=function(t,e){var r=this,i=[];return e.replace(s,function(){for(var e,o=[],s=0;s<arguments.length;s++)o[s]=arguments[s];var a=(e=r.parseAttribute).call.apply(e,n([r,t],o));return a.name&&"/"!==a.name&&i.push(a),""}),i},u.prototype.parseAttribute=function(t,e,r){var n="";return arguments[7]?n=arguments[8]:arguments[5]?n=arguments[6]:arguments[3]&&(n=arguments[4]),{name:r,value:n||arguments[3]?n:null}},u);function u(t,e){this.options=e,this._parse(t)}e.default=p},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,o=/^\(|\)$/g;e.parseFor=function(t){var e=t.match(n);if(e){var r={for:"",alias:""};r.for=e[2].trim();var s=e[1].trim().replace(o,""),a=s.match(i);return a?(r.alias=s.replace(i,"").trim(),r.iterator1=a[1].trim(),a[2]&&(r.iterator2=a[2].trim())):r.alias=s,r}},e.getAndRemoveAttr=function(t,e){for(var r=t.attrsMap[e],n=t.attrsList,i=0,o=n.length;i<o;i++)if(n[i].name===e){n.splice(i,1);break}return r},e.getAndRemoveAttrByRegex=function(t,e){for(var r=t.attrsList,n=0,i=r.length;n<i;n++){var o=r[n];if(e.test(o.name))return r.splice(n,1),o}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=1234;e.default=function(t,e,r){return{key:t+"_"+ ++n,tag:t,ref:"",text:"",attrsList:e,attrsMap:e.reduce(function(t,e){var r;return Object.assign(t,((r={})[e.name]=e.value,r))},{}),processMap:{},parent:r,children:[]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=/^(v-bind:|:)/,i=/^(v-on:|@)/,o=/\{\{([^}]+)\}\}/g,s=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,a=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;function p(t){var e="",r="";return t.attrsList.forEach(function(t){n.test(t.name)?e+='"'+t.name.replace(n,"")+'":_n('+t.value+"),":i.test(t.name)?r+='"'+t.name.replace(i,"")+'":'+c(t.value)+",":e+='"'+t.name+'":_n("'+t.value+'"),'}),t.text&&(e+="text:"+u(t)+","),"{attrs:{"+e+"},on:{"+r+"}"+(t.ref?',ref:"'+t.ref+'"':"")+"}"}function u(t){return'_s("'+t.text.replace(o,function(t,e){return'"+('+e+')+"'})+'")'}function c(t){return a.test(t)||s.test(t)?t:"function($event){"+t+"}"}e.genAttr=p,e.genText=u,e.genHandler=c,e.genVNode=function t(e,r){void 0===r&&(r=!0);var n=e.processMap.for;return r&&n&&n.for?"_l(("+n.for+"), function("+[n.alias,n.iterator1,n.iterator2].filter(Boolean).join(",")+"){return "+t(e,!1)+"})":r&&e.processMap.ifConditions?"("+e.processMap.ifConditions.map(function(e){return e.exp+"?"+t(e.target,!1)+":"}).join("")+'"")':'_c("'+e.tag+'","'+e.key+'",'+p(e)+(0<e.children.length?",[].concat("+e.children.map(function(e){return t(e)})+")":"")+")"},e.createVNode=function(t,e,r,n){return void 0===n&&(n=[]),{key:e,tag:t,ref:r.ref||"",children:n.filter(Boolean),attrs:r.attrs,props:{},on:r.on}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.renderList=function(t,e){return Array.isArray(t)||"string"==typeof t?Array.from(t).map(function(t,r){return e(t,r)}):"number"==typeof t?Array.from({length:t}).map(function(t,r){return e(r+1,r)}):n.isObject(t)?[].map.call(t,function(r,n){return e(t[r],r,n)}):[]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=r(12),o=r(1),s=(a.prototype.walk=function(t){for(var e in t)this.defineReactive(t,e)},a.prototype.observeArray=function(t){t.forEach(function(t){return p(t)})},a.prototype.defineReactive=function(t,e,r){var n=new o.default,i=Object.getOwnPropertyDescriptor(t,e);if(!i||!1!==i.configurable){var s=i&&i.get,a=i&&i.set;s&&!a||2!==arguments.length||(r=t[e]);var u=p(r);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):r;return o.default.target&&(n.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function t(e){e.forEach(function(e){e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&t(e)})}(e))),e},set:function(e){var i=s?s.call(t):r;e===i||e!=e&&i!=i||s&&!a||(a?a.call(t,e):r=e,u=p(e),n.notify())}})}},a);function a(t){this.value=t,this.dep=new o.default,n.def(t,"__ob__",this),Array.isArray(t)?(n.hasProto?function(t,e){t.__proto__=e}(t,i.arrayMethods):function(t,e,r){for(var i=0,o=r.length;i<o;i++){var s=r[i];n.def(t,s,e[s])}}(t,i.arrayMethods,i.arrayKeys),t.forEach(function(t){return p(t)})):this.walk(t)}function p(t){if(t&&"object"==typeof t)return Object.prototype.hasOwnProperty.call(t,"__ob__")&&t.__ob__ instanceof s?t.__ob__:new s(t)}e.default=s,e.observe=p},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=Array.prototype;e.arrayMethods=Object.create(i),e.arrayKeys=Object.getOwnPropertyNames(e.arrayMethods),["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var r=i[t];n.def(e.arrayMethods,t,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i,o=r.apply(this,e),s=this.__ob__;switch(t){case"push":case"unshift":i=e;break;case"splice":i=e.slice(2)}return i&&s.observeArray(i),s.dep.notify(),o})})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=r(1),o=0,s=(a.prototype.get=function(){i.pushTarget(this);var t=this.getter.call(this.vm,this.vm);return i.popTarget(),this.cleanupDeps(),t},a.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},a.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear();var n=this.deps;this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},a.prototype.update=function(){this.run()},a.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||n.isObject(t)){var e=this.value;this.value=t,this.cb.call(this.vm,t,e)}}},a.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},a.prototype.teardown=function(){if(this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}},a);function a(t,e,r){t._watchers.push(this),this.id=o++,this.active=!0,this.vm=t,this.deps=[],this.newDeps=[],this.depIds=new Set,this.newDepIds=new Set,this.cb=r,this.expression=e.toString(),"function"==typeof e?this.getter=e:(this.getter=n.parsePath(e),this.getter||(this.getter=n.noop)),this.value=this.get()}e.default=s},function(t,e,r){"use strict";function n(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function i(t,e){return n(t)===n(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.isSameType=i,e.checkType=function(t,e){return(Array.isArray(e)?e:[e]).some(function(e){return i(e,t)})},e.validateProp=function(t){return"object"==typeof t&&t.type?t.default:t}}],t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(t){return e[t]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=2)).default;function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e,r});