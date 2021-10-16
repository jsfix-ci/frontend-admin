(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{ed2396eb2cc288b9a827:function(e,t,n){"use strict";n.r(t);var a,r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),l=n("1037a6e0d5914309f74c"),d=n.n(l),c=n("4dd2a92e69dcbe1bab10"),u=(n("8a2d1b95e05b6a321e74"),n("0f3f99fcfbc6583697d9")),s=n.n(u),f=n("6938d226fd372a75cbf9"),p=n("cba78edefe8c800ee17e"),m=n("39cd24fdebf6cbef88a3");function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var d=new Array(i),c=0;c<i;c++)d[c]=arguments[c+3];t.children=d}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){x(e,t,n[t])}))}return e}function v(e,t,n,a,r,o,i){try{var l=e[o](i),d=l.value}catch(e){return void n(e)}l.done?t(d):Promise.resolve(d).then(a,r)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){v(o,a,r,i,l,"next",e)}function l(e){v(o,a,r,i,l,"throw",e)}i(void 0)}))}}function T(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,S=b("div",{},void 0,"Hold tight! Preparing your form ..."),P=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=g(t).call(this,e),n=!r||"object"!==y(r)&&"function"!==typeof r?O(a):r,x(O(n),"createFormJson",w(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.communities,a={title:"Create New Vendor",subTitle:"",method:"/vendors.create",successRedirectPage:"/admin/read/vendors",fields:[{label:"About this Vendor",fieldType:"Section",children:[{name:"name",label:"Name of this Vendor",placeholder:"eg. Solar Provider Inc.",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"name",readOnly:!1},{name:"phone_number",label:"Primary Phone Number",placeholder:"eg. +1(571)-000-2231",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"phone_number",readOnly:!1},{name:"communities",label:"Which communities would this vendor service ?",placeholder:"eg. +1(571)-000-2231",fieldType:"Checkbox",contentType:"text",isRequired:!0,selectMany:!0,defaultValue:[],dbName:"communities",readOnly:!1,data:t||[]},{name:"email",label:"Primary Email of this vendor",placeholder:"eg. abc@gmail.com",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"email",readOnly:!1},{name:"description",label:"Tell us about the services this vendor provides",placeholder:"Tell us more ...",fieldType:"HTMLField",contentType:"text",isRequired:!0,isMultiline:!0,defaultValue:"",dbName:"description",readOnly:!1},{name:"is_verified",label:"Have you verified this Vendor?",fieldType:"Radio",isRequired:!1,defaultValue:"false",dbName:"is_verified",readOnly:!1,data:[{id:"false",value:"No"},{id:"true",value:"Yes"}]},{name:"is_published",label:"Should this vendor go live?",fieldType:"Radio",isRequired:!1,defaultValue:"false",dbName:"is_published",readOnly:!1,data:[{id:"false",value:"No"},{id:"true",value:"Yes"}]},{name:"website",label:"Vendor's Website",placeholder:"eg. https://www.vendorwebsite.com",fieldType:"TextField",contentType:"text",isRequired:!1,dbName:"website",readOnly:!1},{name:"have_address",label:"Do you have an address?",fieldType:"Radio",isRequired:!1,defaultValue:"false",dbName:"have_address",readOnly:!1,data:[{id:"false",value:"No"},{id:"true",value:"Yes"}],child:{valueToCheck:"true",fields:[{name:"address",label:"Street Address",placeholder:"",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"address",readOnly:!1},{name:"unit",label:"Unit Number",placeholder:"",fieldType:"TextField",contentType:"text",isRequired:!1,defaultValue:"",dbName:"unit",readOnly:!1},{name:"city",label:"City",placeholder:"eg. Springfield",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"city",readOnly:!1},{name:"state",label:"State ",placeholder:"eg. Massachusetts",fieldType:"Dropdown",contentType:"text",isRequired:!1,data:s.a,defaultValue:"",dbName:"state",readOnly:!1}]}}]},{label:"Services",fieldType:"Section",children:[{name:"service_area",label:"Please select your service Area",placeholder:"eg. Grace Tsu",fieldType:"Radio",contentType:"text",isRequired:!0,defaultValue:"national",dbName:"service_area",readOnly:!1,data:[{id:"national",value:"National",displayName:"National"},{id:"statewide",value:"Statewide",displayName:"Statewide"}],child:{valueToCheck:"statewide",fields:[{name:"service_area_states",label:"Which States? Separate them by commas",placeholder:"eg. New York",fieldType:"Checkbox",contentType:"text",data:s.a,selectMany:!0,isRequired:!1,defaultValue:[],dbName:"service_area_states",readOnly:!1}]}},{name:"properties_serviced",label:"Please select your customer type(s)",placeholder:"eg. Please select one or more options",fieldType:"Checkbox",contentType:"text",isRequired:!0,selectMany:!0,defaultValue:[],dbName:"properties_serviced",readOnly:!1,data:[{id:"residential",value:"Residential",displayName:"Residential"},{id:"commercial",value:"Commercial",displayName:"Commercial"}]}]},{label:"Key Contact Person",fieldType:"Section",children:[{name:"key_contact_full_name",label:"Contact Person's Full Name",placeholder:"eg. Grace Tsu",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"key_contact_name",readOnly:!1},{name:"key_contact_email",label:"Contact Person's Email (this person should already have an account with us)",placeholder:"eg. johny.appleseed@gmail.com",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"key_contact_email",readOnly:!1}]},{name:"onboarding_contact_email",label:"Email of Person onboarding this vendor",placeholder:"eg. johny.appleseed@gmail.com",fieldType:"TextField",contentType:"text",isRequired:!0,defaultValue:"",dbName:"onboarding_contact_email",readOnly:!1},{name:"image",placeholder:"Upload a Logo",fieldType:"File",dbName:"image",label:"Upload a logo for this Vendor",selectMany:!1,isRequired:!1,defaultValue:"",filesLimit:1}]},e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})))),n.state={formJson:null,communities:[]},n}var n,a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:(o=w(regeneratorRuntime.mark((function e(){var t,n,a,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("/tag_collections.listForCommunityAdmin");case 2:return t=e.sent,e.next=5,Object(m.a)("/communities.listForCommunityAdmin");case 5:if(!(n=e.sent)||!n.data){e.next=10;break}return a=n.data.map((function(e){return h({},e,{displayName:e.name,id:""+e.id})})),e.next=10,this.setStateAsync({communities:a});case 10:return e.next=12,this.createFormJson();case 12:return r=e.sent,t&&t.data&&(o={label:"Please select tag(s) that apply to this service provider",fieldType:"Section",children:[]},Object.values(t.data).forEach((function(e){var t={name:e.name,label:"".concat(e.name," ").concat(e.allow_multiple?"(You can select multiple)":"(Only one selection allowed)"),placeholder:"",fieldType:"Checkbox",selectMany:e.allow_multiple,defaultValue:[],dbName:"tags",data:e.tags.map((function(e){return h({},e,{displayName:e.name,id:""+e.id})}))};"Category"===e.name&&o.children.push(t)})),r.fields.splice(1,0,o)),e.next=16,this.setStateAsync({formJson:r});case 16:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"setStateAsync",value:function(e){var t=this;return new Promise((function(n){t.setState(e,n)}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state.formJson;return t?b("div",{},void 0,b(p.a,{classes:e,formJson:t})):S}}])&&T(n.prototype,a),r&&T(n,r),t}(r.Component),R=Object(f.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:4*e.spacing.unit,textAlign:"center"}}}),{withTheme:!0})(P);function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n,a){N||(N="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===o)t.children=a;else if(o>1){for(var l=new Array(o),d=0;d<o;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:N,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==V(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=j(c.j,{title:"Add New Vendor",desc:""},void 0,j(R,{})),M=function(e){function t(){return k(this,t),C(this,F(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=d.a.name+" - Add New Vendor",t=d.a.desc;return j("div",{},void 0,j(i.Helmet,{},void 0,j("title",{},void 0,e),j("meta",{name:"description",content:t}),j("meta",{property:"og:title",content:e}),j("meta",{property:"og:description",content:t}),j("meta",{property:"twitter:title",content:e}),j("meta",{property:"twitter:description",content:t})),E)}}])&&q(n.prototype,a),r&&q(n,r),t}(o.a.Component);t.default=M}}]);