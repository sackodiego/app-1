(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"67e447865336e1b2a655":function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=n("0d7f0986bcd2f33d8a2a"),a=n("1037a6e0d5914309f74c"),u=n.n(a),f=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),l=n("4dd2a92e69dcbe1bab10"),s=n("387190e83edf0e5eb8f6");function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var a=new Array(c),u=0;u<c;u++)a[u]=arguments[u+3];e.children=a}if(e&&i)for(var f in i)void 0===e[f]&&(e[f]=i[f]);else e||(e=i||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=g(t);if(e){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,o,r=v(i);function i(){var t;y(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return S(w(t=r.call.apply(r,[this].concat(n))),"state",{valueForm:[]}),t}return e=i,(n=[{key:"submitForm",value:function(t){var e=this;setTimeout((function(){e.setState({valueForm:t}),console.log("You submitted:\n\n".concat(e.state.valueForm)),window.location.href="/app"}),500)}},{key:"render",value:function(){var t=this,e=u.a.name+" - Login Version 3",n=u.a.desc,o=this.props.classes;return b("div",{className:o.rootFull},void 0,b(c.Helmet,{},void 0,b("title",{},void 0,e),b("meta",{name:"description",content:n}),b("meta",{property:"og:title",content:e}),b("meta",{property:"og:description",content:n}),b("meta",{property:"twitter:title",content:e}),b("meta",{property:"twitter:description",content:n})),b("div",{className:o.container},void 0,b("div",{className:o.fullFormWrap},void 0,b(l.Fb,{onSubmit:function(e){return t.submitForm(e)}}))))}}])&&d(e.prototype,n),o&&d(e,o),i}(i.a.Component);e.default=Object(f.withStyles)(s.a)(O)}}]);