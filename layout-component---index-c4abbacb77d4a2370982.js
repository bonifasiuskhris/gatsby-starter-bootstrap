webpackJsonp([3],{"./gatsby-config.js":function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Gatstrap",author:"Jaxx2104"},pathPrefix:"/gatsby-starter-bootstrap",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sass","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{}},"gatsby-plugin-offline","gatsby-plugin-react-helmet"]}}).call(t,"/")},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},"./node_modules/element-resize-event/index.js":function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&r(t.__resizeRAF__),t.__resizeRAF__=o(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var o=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),r=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function o(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var r,s=this,i=s.document,a=i.attachEvent;if("undefined"!=typeof navigator&&(r=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],a)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var l=e.__resizeTrigger__=i.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=e,l.onload=o,l.type="text/html",r&&e.appendChild(l),l.data="about:blank",r||e.appendChild(l)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var o=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(o?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},"./node_modules/performance-now/lib/performance-now.js":function(e,t,n){(function(t){(function(){var n,o,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/prismjs/themes/prism.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}",""])},"./node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function i(){h&&m&&(h=!1,m.length?f=m.concat(f):g=-1,f.length&&a())}function a(){if(!h){var e=r(i);h=!0;for(var t=f.length;t;){for(m=f,f=[];++g<t;)m&&m[g].run();g=-1,t=f.length}m=null,h=!1,s(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var u,d,p=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var m,f=[],h=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new l(e,t)),1!==f.length||h||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/raf/index.js":function(e,t,n){for(var o=n("./node_modules/performance-now/lib/performance-now.js"),r="undefined"==typeof window?{}:window,s=["moz","webkit"],i="AnimationFrame",a=r["request"+i],l=r["cancel"+i]||r["cancelRequest"+i],c=!0,u=0;u<s.length&&!a;u++)a=r[s[u]+"Request"+i],l=r[s[u]+"Cancel"+i]||r[s[u]+"CancelRequest"+i];if(!a||!l){c=!1;var d=0,p=0,m=[],f=1e3/60;a=function(e){if(0===m.length){var t=o(),n=Math.max(0,f-(t-d));d=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(d)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return m.push({handle:++p,callback:e,cancelled:!1}),p},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return c?a.call(r,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):a.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)}},"./node_modules/react-component-width-mixin/index.js":function(e,t,n){var o=n("./node_modules/react-dom/index.js"),r=n("./node_modules/element-resize-event/index.js");e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width}),r(o.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===o.findDOMNode(this).getElementsByClassName("resize-sensor").length&&r(o.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width})}}},"./node_modules/react-page-width/dist/index.js":function(e,t,n){var o;o=n("./node_modules/react-page-width/dist/resizeListener.js"),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return o.on(this.onResize)},componentWillUnmount:function(){return o.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},"./node_modules/react-page-width/dist/resizeListener.js":function(e,t,n){var o,r,s,i,a,l;s=n("./node_modules/raf/index.js"),o=void 0,i=[],a=!1,"undefined"!=typeof window&&null!==window&&(o=window.innerWidth),r=function(){if(!a)return a=!0,s(l)},l=function(){var e,t,n;for(o=window.innerWidth,e=0,t=i.length;e<t;e++)(n=i[e])(o);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",r),e.exports={on:function(e){return e(o),i.push(e)},off:function(e){return i.splice(i.indexOf(e),1)}}},"./node_modules/react-responsive-grid/dist/components/Breakpoint.js":function(e,t,n){var o,r,s,i,a,l;i=n("./node_modules/react/react.js"),a=n("./node_modules/react-component-width-mixin/index.js"),s=n("./node_modules/react-page-width/dist/index.js"),l=n("./node_modules/object-assign/index.js"),o=i.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),r=i.createClass({displayName:"Breakpoint",mixins:[s],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),e.exports=i.createClass({displayName:"Breakpoint",propTypes:{widthMethod:i.PropTypes.string.isRequired,minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?i.createElement(r,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?i.createElement(o,Object.assign({},this.props)):void 0}})},"./node_modules/react-responsive-grid/dist/components/Container.js":function(e,t,n){var o,r;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Container",render:function(){var e,t,n,s;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},s=r(t,this.props.style),e=this.props.children,n=r({},this.props),delete n.children,delete n.style,o.createElement("div",Object.assign({},n,{style:s}),e,o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Grid.js":function(e,t,n){var o,r;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Grid",propTypes:{columns:o.PropTypes.number,gutterRatio:o.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n,r;return"Breakpoint"===(n=null!=(r=t.type)?r.displayName:void 0)||"Span"===n?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=r({},this.props),delete e.gutterRatio,delete e.columns,o.createElement("div",Object.assign({},e),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Span.js":function(e,t,n){var o,r,s;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),s=n("./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js"),e.exports=o.createClass({displayName:"Span",propTypes:{context:o.PropTypes.object,columns:o.PropTypes.number,at:o.PropTypes.number,pre:o.PropTypes.number,post:o.PropTypes.number,squish:o.PropTypes.number,last:o.PropTypes.bool,break:o.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=s({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=r(t,this.props.style),e=r({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,o.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/index.js":function(e,t,n){t.Container=n("./node_modules/react-responsive-grid/dist/components/Container.js"),t.Grid=n("./node_modules/react-responsive-grid/dist/components/Grid.js"),t.Breakpoint=n("./node_modules/react-responsive-grid/dist/components/Breakpoint.js"),t.Span=n("./node_modules/react-responsive-grid/dist/components/Span.js")},"./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js":function(e,t,n){var o;o=n("./node_modules/object-assign/index.js"),e.exports=function(e){var t,n,r,s,i,a,l,c,u,d;return r={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},u=o(r,e),c=100/(u.contextColumns+(u.contextColumns-1)*u.gutterRatio),i=u.gutterRatio*c,n=function(e){return c*e+i*(e-1)},t=function(e){return 0===e?0:n(e)+i},d=n(u.columns),a=0===u.at&&0===u.pre&&0===u.squish?0:t(u.at)+t(u.pre)+t(u.squish),u.last&&0===u.post&&0===u.squish?l=0:0!==u.post||0!==u.squish?(l=t(u.post)+t(u.squish),u.last||(l+=i)):l=i,s=u.last?"right":"left",d+="%",a+="%",l+="%",{float:s,marginLeft:a,marginRight:l,width:d,clear:u.break?"both":"none"}}},"./src/components/SiteNavi/index.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("./node_modules/react/react.js"),c=o(l),u=n("./node_modules/gatsby-link/index.js"),d=o(u),p=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.location,t=this.props.title;return c.default.createElement("nav",{className:"navbar sticky-top navbar-toggleable-sm navbar-inverse bg-danger"},c.default.createElement("button",{className:"navbar-toggler navbar-toggler-right collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},c.default.createElement("span",{className:"navbar-toggler-icon"})),c.default.createElement("div",{className:"container"},c.default.createElement(d.default,{className:"text-center",style:{boxShadow:"none"},to:"/"},c.default.createElement("h1",{className:"navbar-brand mb-0"},t)),c.default.createElement("div",{className:"navbar-collapse collapse",id:"navbarColor02","aria-expanded":"false"},c.default.createElement("ul",{className:"navbar-nav mr-auto"},c.default.createElement("li",{className:"/"===e.pathname?"nav-item active":"nav-item"},c.default.createElement(d.default,{to:"/",style:{boxShadow:"none"},className:"nav-link"},"Home")),c.default.createElement("li",{className:"/profile/"===e.pathname?"nav-item active":"nav-item"},c.default.createElement(d.default,{to:"/profile/",style:{boxShadow:"none"},className:"nav-link"},"Profile")),c.default.createElement("li",{className:"nav-item dropdown"},c.default.createElement("a",{className:"nav-link dropdown-toggle",style:{boxShadow:"none"},id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Link"),c.default.createElement("div",{className:"dropdown-menu bg-danger","aria-labelledby":"navbarDropdownMenuLink"},c.default.createElement("a",{className:"dropdown-item",href:"https://github.com/jaxx2104/"},"Github"),c.default.createElement("a",{className:"dropdown-item",href:"https://twitter.com/jaxx2104"},"Twitter"),c.default.createElement("a",{className:"dropdown-item",href:"https://www.facebook.com/futoshi.iwashita"},"Facebook")))))))}}]),t}(c.default.Component);t.default=p,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-react/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-es2015/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-stage-0/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-env/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-stage-0/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),u=o(c),d=n("./node_modules/gatsby-link/index.js"),p=(o(d),n("./node_modules/react-responsive-grid/dist/index.js"),n("./gatsby-config.js")),m=n("./src/components/SiteNavi/index.jsx"),f=o(m);n("./src/scss/gatsrap.scss"),n("./node_modules/prismjs/themes/prism.css");var h=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.children;return"/"===t.pathname,u.default.createElement("div",null,u.default.createElement(f.default,a({title:p.siteMetadata.title},this.props)),n())}}]),t}(u.default.Component);t.default=h,e.exports=t.default},"./src/scss/gatsrap.scss":function(e,t){}});
//# sourceMappingURL=layout-component---index-c4abbacb77d4a2370982.js.map