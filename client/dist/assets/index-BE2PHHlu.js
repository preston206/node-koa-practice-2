(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function _(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=_(n);fetch(n.href,o)}})();var N,d,He,F,pe,Le,te,ce,_e,ne,Se,I={},Ue=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function H(t,e){for(var _ in e)t[_]=e[_];return t}function Fe(t){var e=t.parentNode;e&&e.removeChild(t)}function M(t,e,_){var r,n,o,c={};for(o in e)o=="key"?r=e[o]:o=="ref"?n=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?N.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)c[o]===void 0&&(c[o]=t.defaultProps[o]);return O(t,c,r,n,null)}function O(t,e,_,r,n){var o={type:t,props:e,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++He,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(o),o}function X(t){return t.children}function z(t,e){this.props=t,this.context=e}function R(t,e){if(e==null)return t.__?R(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?R(t):null}function Me(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return Me(t)}}function re(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!G.__r++||pe!==d.debounceRendering)&&((pe=d.debounceRendering)||Le)(G)}function G(){var t,e,_,r,n,o,c,u;for(F.sort(te);t=F.shift();)t.__d&&(e=F.length,r=void 0,o=(n=(_=t).__v).__e,c=[],u=[],_.__P&&((r=H({},n)).__v=n.__v+1,d.vnode&&d.vnode(r),ue(_.__P,r,n,_.__n,_.__P.namespaceURI,32&n.__u?[o]:null,c,o??R(n),!!(32&n.__u),u),r.__v=n.__v,r.__.__k[r.__i]=r,Ae(c,r,u),r.__e!=o&&Me(r)),F.length>e&&F.sort(te));G.__r=0}function Re(t,e,_,r,n,o,c,u,l,s,p){var i,a,f,m,C,y=r&&r.__k||Ue,h=e.length;for(_.__d=l,Ze(_,e,y),l=_.__d,i=0;i<h;i++)(f=_.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(a=f.__i===-1?I:y[f.__i]||I,f.__i=i,ue(t,f,a,n,o,c,u,l,s,p),m=f.__e,f.ref&&a.ref!=f.ref&&(a.ref&&se(a.ref,null,f),p.push(f.ref,f.__c||m,f)),C==null&&m!=null&&(C=m),65536&f.__u||a.__k===f.__k?(l&&typeof f.type=="string"&&!t.contains(l)&&(l=R(a)),l=De(f,l,t)):typeof f.type=="function"&&f.__d!==void 0?l=f.__d:m&&(l=m.nextSibling),f.__d=void 0,f.__u&=-196609);_.__d=l,_.__e=C}function Ze(t,e,_){var r,n,o,c,u,l=e.length,s=_.length,p=s,i=0;for(t.__k=[],r=0;r<l;r++)c=r+i,(n=t.__k[r]=(n=e[r])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?O(null,n,null,null,null):Q(n)?O(X,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?O(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=t,n.__b=t.__b+1,u=ze(n,_,c,p),n.__i=u,o=null,u!==-1&&(p--,(o=_[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):u!==c&&(u==c-1?i=u-c:u==c+1?i++:u>c?p>l-c?i+=u-c:i--:u<c&&i++,u!==r+i&&(n.__u|=65536))):(o=_[c])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=R(o)),oe(o,o,!1),_[c]=null,p--);if(p)for(r=0;r<s;r++)(o=_[r])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=R(o)),oe(o,o))}function De(t,e,_){var r,n;if(typeof t.type=="function"){for(r=t.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=t,e=De(r[n],e,_));return e}t.__e!=e&&(_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Te(t,e){return e=e||[],t==null||typeof t=="boolean"||(Q(t)?t.some(function(_){Te(_,e)}):e.push(t)),e}function ze(t,e,_,r){var n=t.key,o=t.type,c=_-1,u=_+1,l=e[_];if(l===null||l&&n==l.key&&o===l.type&&!(131072&l.__u))return _;if(r>(l!=null&&!(131072&l.__u)?1:0))for(;c>=0||u<e.length;){if(c>=0){if((l=e[c])&&!(131072&l.__u)&&n==l.key&&o===l.type)return c;c--}if(u<e.length){if((l=e[u])&&!(131072&l.__u)&&n==l.key&&o===l.type)return u;u++}}return-1}function he(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||Ke.test(e)?_:_+"px"}function q(t,e,_,r,n){var o;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)_&&e in _||he(t.style,e,"");if(_)for(e in _)r&&_[e]===r[e]||he(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?r?_.u=r.u:(_.u=ce,t.addEventListener(e,o?ne:_e,o)):t.removeEventListener(e,o?ne:_e,o);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function de(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=ce++;else if(e.t<_.u)return;return _(d.event?d.event(e):e)}}}function ue(t,e,_,r,n,o,c,u,l,s){var p,i,a,f,m,C,y,h,v,L,E,$,S,j,T,b,P=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(l=!!(32&_.__u),o=[u=e.__e=_.__e]),(p=d.__b)&&p(e);e:if(typeof P=="function")try{if(h=e.props,v="prototype"in P&&P.prototype.render,L=(p=P.contextType)&&r[p.__c],E=p?L?L.props.value:p.__:r,_.__c?y=(i=e.__c=_.__c).__=i.__E:(v?e.__c=i=new P(h,E):(e.__c=i=new z(h,E),i.constructor=P,i.render=Ge),L&&L.sub(i),i.props=h,i.state||(i.state={}),i.context=E,i.__n=r,a=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&P.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=H({},i.__s)),H(i.__s,P.getDerivedStateFromProps(h,i.__s))),f=i.props,m=i.state,i.__v=e,a)v&&P.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&P.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,E),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,E)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(A){A&&(A.__=e)}),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,E),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,m,C)})}if(i.context=E,i.props=h,i.__P=t,i.__e=!1,S=d.__r,j=0,v){for(i.state=i.__s,i.__d=!1,S&&S(e),p=i.render(i.props,i.state,i.context),T=0;T<i._sb.length;T++)i.__h.push(i._sb[T]);i._sb=[]}else do i.__d=!1,S&&S(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++j<25);i.state=i.__s,i.getChildContext!=null&&(r=H(H({},r),i.getChildContext())),v&&!a&&i.getSnapshotBeforeUpdate!=null&&(C=i.getSnapshotBeforeUpdate(f,m)),Re(t,Q(b=p!=null&&p.type===X&&p.key==null?p.props.children:p)?b:[b],e,_,r,n,o,c,u,l,s),i.base=e.__e,e.__u&=-161,i.__h.length&&c.push(i),y&&(i.__E=i.__=null)}catch(A){e.__v=null,l||o!=null?(e.__e=u,e.__u|=l?160:32,o[o.indexOf(u)]=null):(e.__e=_.__e,e.__k=_.__k),d.__e(A,e,_)}else o==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=Ye(_.__e,e,_,r,n,o,c,l,s);(p=d.diffed)&&p(e)}function Ae(t,e,_){e.__d=void 0;for(var r=0;r<_.length;r++)se(_[r],_[++r],_[++r]);d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function Ye(t,e,_,r,n,o,c,u,l){var s,p,i,a,f,m,C,y=_.props,h=e.props,v=e.type;if(v==="svg"?n="http://www.w3.org/2000/svg":v==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),o!=null){for(s=0;s<o.length;s++)if((f=o[s])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){t=f,o[s]=null;break}}if(t==null){if(v===null)return document.createTextNode(h);t=document.createElementNS(n,v,h.is&&h),o=null,u=!1}if(v===null)y===h||u&&t.data===h||(t.data=h);else{if(o=o&&N.call(t.childNodes),y=_.props||I,!u&&o!=null)for(y={},s=0;s<t.attributes.length;s++)y[(f=t.attributes[s]).name]=f.value;for(s in y)if(f=y[s],s!="children"){if(s=="dangerouslySetInnerHTML")i=f;else if(s!=="key"&&!(s in h)){if(s=="value"&&"defaultValue"in h||s=="checked"&&"defaultChecked"in h)continue;q(t,s,null,f,n)}}for(s in h)f=h[s],s=="children"?a=f:s=="dangerouslySetInnerHTML"?p=f:s=="value"?m=f:s=="checked"?C=f:s==="key"||u&&typeof f!="function"||y[s]===f||q(t,s,f,y[s],n);if(p)u||i&&(p.__html===i.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(i&&(t.innerHTML=""),Re(t,Q(a)?a:[a],e,_,r,v==="foreignObject"?"http://www.w3.org/1999/xhtml":n,o,c,o?o[0]:_.__k&&R(_,0),u,l),o!=null)for(s=o.length;s--;)o[s]!=null&&Fe(o[s]);u||(s="value",m!==void 0&&(m!==t[s]||v==="progress"&&!m||v==="option"&&m!==y[s])&&q(t,s,m,y[s],n),s="checked",C!==void 0&&C!==t[s]&&q(t,s,C,y[s],n))}return t}function se(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(r){d.__e(r,_)}}function oe(t,e,_){var r,n;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||se(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(n=0;n<r.length;n++)r[n]&&oe(r[n],e,_||typeof t.type!="function");_||t.__e==null||Fe(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Ge(t,e,_){return this.constructor(t,_)}function Je(t,e,_){var r,n,o,c;d.__&&d.__(t,e),n=(r=typeof _=="function")?null:e.__k,o=[],c=[],ue(e,t=(!r&&_||e).__k=M(X,null,[t]),n||I,I,e.namespaceURI,!r&&_?[_]:n?null:e.firstChild?N.call(e.childNodes):null,o,!r&&_?_:n?n.__e:e.firstChild,r,c),Ae(o,t,c)}function ve(t,e,_){var r,n,o,c,u=H({},t.props);for(o in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)o=="key"?r=e[o]:o=="ref"?n=e[o]:u[o]=e[o]===void 0&&c!==void 0?c[o]:e[o];return arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):_),O(t.type,u,r||t.key,n||t.ref,null)}function Oe(t,e){var _={__c:e="__cC"+Se++,__:t,Consumer:function(r,n){return r.children(n)},Provider:function(r){var n,o;return this.getChildContext||(n=[],(o={})[e]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&n.some(function(u){u.__e=!0,re(u)})},this.sub=function(c){n.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){n&&n.splice(n.indexOf(c),1),u&&u.call(c)}}),r.children}};return _.Provider.__=_.Consumer.contextType=_}N=Ue.slice,d={__e:function(t,e,_,r){for(var n,o,c;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(t)),c=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t,r||{}),c=n.__d),c)return n.__E=n}catch(u){t=u}throw t}},He=0,z.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},_),this.props)),t&&H(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),re(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),re(this))},z.prototype.render=X,F=[],Le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(t,e){return t.__v.__b-e.__v.__b},G.__r=0,ce=0,_e=de(!1),ne=de(!0),Se=0;var Qe=0;function w(t,e,_,r,n,o){e||(e={});var c,u,l=e;if("ref"in l)for(u in l={},e)u=="ref"?c=e[u]:l[u]=e[u];var s={type:t,props:l,key:_,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Qe,__i:-1,__u:0,__source:n,__self:o};if(typeof t=="function"&&(c=t.defaultProps))for(u in c)l[u]===void 0&&(l[u]=c[u]);return d.vnode&&d.vnode(s),s}var D,g,V,me,J=0,Ie=[],k=d,ge=k.__b,ye=k.__r,ke=k.diffed,be=k.__c,we=k.unmount,Pe=k.__;function W(t,e){k.__h&&k.__h(g,t,J||e),J=0;var _=g.__H||(g.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function Xe(t){return J=1,le(Be,t)}function le(t,e,_){var r=W(D++,2);if(r.t=t,!r.__c&&(r.__=[Be(void 0,e),function(u){var l=r.__N?r.__N[0]:r.__[0],s=r.t(l,u);l!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=g,!g.u)){var n=function(u,l,s){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(a){return!!a.__c});if(p.every(function(a){return!a.__N}))return!o||o.call(this,u,l,s);var i=!1;return p.forEach(function(a){if(a.__N){var f=a.__[0];a.__=a.__N,a.__N=void 0,f!==a.__[0]&&(i=!0)}}),!(!i&&r.__c.props===u)&&(!o||o.call(this,u,l,s))};g.u=!0;var o=g.shouldComponentUpdate,c=g.componentWillUpdate;g.componentWillUpdate=function(u,l,s){if(this.__e){var p=o;o=void 0,n(u,l,s),o=p}c&&c.call(this,u,l,s)},g.shouldComponentUpdate=n}return r.__N||r.__}function Ve(t,e){var _=W(D++,3);!k.__s&&ae(_.__H,e)&&(_.__=t,_.i=e,g.__H.__h.push(_))}function Ne(t,e){var _=W(D++,4);!k.__s&&ae(_.__H,e)&&(_.__=t,_.i=e,g.__h.push(_))}function x(t){return J=5,fe(function(){return{current:t}},[])}function fe(t,e){var _=W(D++,7);return ae(_.__H,e)&&(_.__=t(),_.__H=e,_.__h=t),_.__}function We(t){var e=g.context[t.__c],_=W(D++,9);return _.c=t,e?(_.__==null&&(_.__=!0,e.sub(g)),e.props.value):t.__}function et(){for(var t;t=Ie.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Y),t.__H.__h.forEach(ie),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){g=null,ge&&ge(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Pe&&Pe(t,e)},k.__r=function(t){ye&&ye(t),D=0;var e=(g=t.__c).__H;e&&(V===g?(e.__h=[],g.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(e.__h.forEach(Y),e.__h.forEach(ie),e.__h=[],D=0)),V=g},k.diffed=function(t){ke&&ke(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ie.push(e)!==1&&me===k.requestAnimationFrame||((me=k.requestAnimationFrame)||tt)(et)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),V=g=null},k.__c=function(t,e){e.some(function(_){try{_.__h.forEach(Y),_.__h=_.__h.filter(function(r){return!r.__||ie(r)})}catch(r){e.some(function(n){n.__h&&(n.__h=[])}),e=[],k.__e(r,_.__v)}}),be&&be(t,e)},k.unmount=function(t){we&&we(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(r){try{Y(r)}catch(n){e=n}}),_.__H=void 0,e&&k.__e(e,_.__v))};var Ce=typeof requestAnimationFrame=="function";function tt(t){var e,_=function(){clearTimeout(r),Ce&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(_,100);Ce&&(e=requestAnimationFrame(_))}function Y(t){var e=g,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),g=e}function ie(t){var e=g;t.__c=t.__(),g=e}function ae(t,e){return!t||t.length!==e.length||e.some(function(_,r){return _!==t[r]})}function Be(t,e){return typeof e=="function"?e(t):e}let U;const _t=(t,e)=>{if(U=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const _=e.target.closest("a[href]");if(!_||_.origin!=location.origin||/^#/.test(_.getAttribute("href"))||!/^(_?self)?$/i.test(_.target))return t;U=!0,e.preventDefault(),e=_.href.replace(location.origin,"")}else typeof e=="string"?U=!0:e&&e.url?(U=!e.replace,e=e.url):e=location.pathname+location.search;return U===!0?history.pushState(null,"",e):U===!1&&history.replaceState(null,"",e),e},nt=(t,e,_)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let r=0,n,o;r<Math.max(t.length,e.length);r++){let[,c,u,l]=(e[r]||"").match(/^(:?)(.*?)([+*?]?)$/);if(n=t[r],!(!c&&u==n)){if(!c&&n&&l=="*"){_.rest="/"+t.slice(r).map(decodeURIComponent).join("/");break}if(!c||!n&&l!="?"&&l!="*")return;if(o=l=="+"||l=="*",o?n=t.slice(r).map(decodeURIComponent).join("/"):n&&(n=decodeURIComponent(n)),_.params[u]=n,u in _||(_[u]=n),o)break}}return _};function B(t){const[e,_]=le(_t,t.url||location.pathname+location.search),r=U===!0,n=fe(()=>{const o=new URL(e,location.origin),c=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:c,query:Object.fromEntries(o.searchParams),route:(u,l)=>_({url:u,replace:l}),wasPush:r}},[e]);return Ne(()=>(addEventListener("click",_),addEventListener("popstate",_),()=>{removeEventListener("click",_),removeEventListener("popstate",_)}),[]),M(B.ctx.Provider,{value:n},t.children)}const rt=Promise.resolve();function je(t){const[e,_]=le(b=>b+1,0),{url:r,query:n,wasPush:o,path:c}=qe(),{rest:u=c,params:l={}}=We(Ee),s=x(!1),p=x(c),i=x(0),a=x(),f=x(),m=x(),C=x(!1),y=x();y.current=!1;const h=x(!1);let v,L,E;Te(t.children).some(b=>{if(nt(u,b.props.path,E={...b.props,path:u,query:n,params:l,rest:""}))return v=ve(b,E);b.props.default&&(L=ve(b,E))});let $=v||L;fe(()=>{f.current=a.current;const b=f.current&&f.current.props.children;!b||!$||$.type!==b.type||$.props.component!==b.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,h.current=!0):h.current=!1},[r]);const S=a.current&&a.current.__u&K&&a.current.__u&Z,j=a.current&&a.current.__h;a.current=M(Ee.Provider,{value:E},$),S?(a.current.__u|=K,a.current.__u|=Z):j&&(a.current.__h=!0);const T=f.current;return f.current=null,this.__c=(b,P)=>{y.current=!0,f.current=T,t.onLoadStart&&t.onLoadStart(r),s.current=!0;let A=i.current;b.then(()=>{A===i.current&&(f.current=null,a.current&&(P.__h&&(a.current.__h=P.__h),P.__u&Z&&(a.current.__u|=Z),P.__u&K&&(a.current.__u|=K)),rt.then(_))})},Ne(()=>{const b=this.__v&&this.__v.__e;if(y.current){!C.current&&!m.current&&(m.current=b);return}!C.current&&m.current&&(m.current!==b&&m.current.remove(),m.current=null),C.current=!0,p.current!==c&&(o&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(r),p.current=c),t.onLoadEnd&&s.current&&t.onLoadEnd(r),s.current=!1},[c,o,e]),h.current?[M(ee,{r:a}),M(ee,{r:f})]:M(ee,{r:a})}const K=32,Z=128,ee=({r:t})=>t.current;je.Provider=B;B.ctx=Oe({});const Ee=Oe({}),$e=t=>M(t.component,t),qe=()=>We(B.ctx),xe=d.__e;d.__e=(t,e,_)=>{if(t&&t.then){let r=e;for(;r=r.__;)if(r.__c&&r.__c.__c)return e.__e==null&&(e.__e=_.__e,e.__k=_.__k),e.__k||(e.__k=[]),r.__c.__c(t,e)}xe&&xe(t,e,_)};function ot(){const{url:t}=qe();return w("header",{children:w("nav",{children:[w("a",{href:"/",class:t=="/"&&"active",children:"Home"}),w("a",{href:"/404",class:t=="/404"&&"active",children:"404"})]})})}const it="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e";function ct(){return w("div",{class:"home",children:[w("a",{href:"https://preactjs.com",target:"_blank",children:w("img",{src:it,alt:"Preact logo",height:"160",width:"160"})}),w(ut,{})]})}const ut=()=>{const[t,e]=Xe();return Ve(()=>{fetch("/test").then(_=>_.json()).then(_=>e(_.message)).catch(_=>console.log("---ERROR",_))},[]),w("div",{children:w("p",{children:t||"Loading...."})})};function st(){return w("section",{children:[w("h1",{children:"404: Not Found"}),w("p",{children:"It's gone :("})]})}function lt(){return w(B,{children:[w(ot,{}),w("main",{children:w(je,{children:[w($e,{path:"/",component:ct}),w($e,{default:!0,component:st})]})})]})}Je(w(lt,{}),document.getElementById("app"));
