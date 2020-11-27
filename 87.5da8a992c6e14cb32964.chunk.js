(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"3cfc9dcdc6680a00fc27":function(t,e,r){"use strict";r.r(e);var o,i=r("8af190b70a6bc55c6f1b"),n=(r("8a2d1b95e05b6a321e74"),r("6938d226fd372a75cbf9")),a=r("0d7f0986bcd2f33d8a2a"),l=r("1037a6e0d5914309f74c"),c=r.n(l),s=r("d7dd51e1bf6bfc2c9c3d"),d=r("4dd2a92e69dcbe1bab10"),u=r("64d60600a7b0e7b54c28"),m=r("9bd953f027b7f8f4f180"),b={type:m.a},f={type:m.c},g={type:u.a},p={lanes:[{id:"PLANNED",title:"Planned Tasks",color:"#2096f3",label:"20/70",cards:[{id:"Milk",title:"Buy milk",label:"15 mins",cardStyle:{margin:"auto",marginBottom:5},description:"2 Gallons of milk at the Deli store",tags:[{title:"Error",color:"white",bgcolor:"#F44336"},{title:"Warning",color:"white",bgcolor:"#FF9800"}]},{id:"Plan2",title:"Dispose Garbage",label:"10 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Sort out recyclable and waste as needed",tags:[{title:"Info",color:"white",bgcolor:"#0288D1"},{title:"Success",color:"white",bgcolor:"#388E3C"}]},{id:"Plan3",title:"Write Blog",label:"30 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Can AI make memes?",tags:[{title:"Warning",color:"white",bgcolor:"#FF9800"}]},{id:"Plan4",title:"Pay Rent",label:"5 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Transfer to bank account",tags:[{title:"Error",color:"white",bgcolor:"#F44336"},{title:"Warning",color:"white",bgcolor:"#FF9800"},{title:"Success",color:"white",bgcolor:"#388E3C"}]}]},{id:"WIP",title:"Work In Progress",color:"#AB47BC",label:"10/20",cards:[{id:"Wip1",title:"Clean House",label:"30 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",tags:[{title:"Error",color:"white",bgcolor:"#F44336"},{title:"Success",color:"white",bgcolor:"#388E3C"}]},{id:"Archived1",title:"Go Trekking",label:"300 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Completed 10km on cycle",tags:[{title:"Info",color:"white",bgcolor:"#0288D1"},{title:"Error",color:"white",bgcolor:"#F44336"},{title:"Warning",color:"white",bgcolor:"#FF9800"},{title:"Success",color:"white",bgcolor:"#388E3C"},{title:"Info",color:"white",bgcolor:"#0288D1"},{title:"Error",color:"white",bgcolor:"#F44336"},{title:"Warning",color:"white",bgcolor:"#FF9800"},{title:"Success",color:"white",bgcolor:"#388E3C"}]}]},{id:"BLOCKED",title:"Blocked",color:"#EC407A",label:"0/0",cards:[{id:"Repeat1",title:"Morning Jog",label:"30 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Track using fitbit",tags:[{title:"Error",color:"white",bgcolor:"#F44336"}]}]},{id:"COMPLETED",title:"Completed",color:"#43A047",label:"2/5",cards:[{id:"Completed1",title:"Practice Meditation",label:"15 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Use Headspace app"},{id:"Completed2",title:"Maintain Daily Journal",label:"15 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Use Spreadsheet for now"},{id:"Archived1",title:"Go Trekking",label:"300 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Completed 10km on cycle",tags:[{title:"Info",color:"white",bgcolor:"#0288D1"},{title:"Warning",color:"white",bgcolor:"#FF9800"}]}]},{id:"ARCHIVED",title:"Archived2",color:"#FF5722",label:"1/1",cards:[{id:"Archived1",title:"Go Trekking",label:"300 mins",cardStyle:{margin:"auto",marginBottom:5},description:"Completed 10km on cycle",tags:[{title:"Info",color:"white",bgcolor:"#0288D1"}]}]}]};function h(t,e,r,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];e.children=l}if(e&&n)for(var s in n)void 0===e[s]&&(e[s]=n[s]);else e||(e=n||{});return{$$typeof:o,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function y(t,e,r,o,i,n,a){try{var l=t[n](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(o,i)}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,i=!1,n=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){i=!0,n=t}finally{try{o||null==l.return||l.return()}finally{if(i)throw n}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}e.default=Object(n.withStyles)((function(t){return{root:{display:"block",width:"calc(100% + ".concat(t.spacing(2),"px)"),marginLeft:-1*t.spacing(1)}}}))((function(t){var e=Object(s.useSelector)((function(t){return t.getIn(["taskboard","boardData"])})),r=Object(s.useSelector)((function(t){return t.getIn(["taskboard","openFrm"])})),o=Object(s.useSelector)((function(t){return t.getIn(["taskboard","notifMsg"])})),n=Object(s.useDispatch)(),l=Object(s.useDispatch)(),u=Object(s.useDispatch)(),v=Object(s.useDispatch)(),S=Object(s.useDispatch)(),k=Object(s.useDispatch)(),E=w(Object(i.useState)(!1),2),F=E[0],C=E[1];Object(i.useEffect)((function(){var t;n((t=p,{type:m.d,items:t})),C(!0)}),[]);var B=function(t){var e;l((e=t,{type:m.e,newBoard:e}));var r=document.getElementById("task_wrap").firstElementChild.firstElementChild;r.scrollLeft=r.firstElementChild.offsetWidth-r.offsetWidth},D=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u((r=e,{type:m.b,boardId:r}));case 2:case"end":return t.stop()}var r}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var n=t.apply(e,r);function a(t){y(n,o,i,a,l,"next",t)}function l(t){y(n,o,i,a,l,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),A=c.a.name+" - Task Board",I=c.a.desc,O=t.classes;return h("div",{},void 0,h(a.Helmet,{},void 0,h("title",{},void 0,A),h("meta",{name:"description",content:I}),h("meta",{property:"og:title",content:A}),h("meta",{property:"og:description",content:I}),h("meta",{property:"twitter:title",content:A}),h("meta",{property:"twitter:description",content:I})),h(d.lb,{close:function(){return k(g)},message:o}),h("div",{className:O.root,id:"task_wrap"},void 0,h(d.Ub,{dataLoaded:F,data:e.toJS(),removeBoard:function(t){return D(t)}}),h(d.b,{openForm:r,addEvent:function(){return v(b)},closeForm:function(){return S(f)},submit:function(t){return B(t)}})))}))}}]);