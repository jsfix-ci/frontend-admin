(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"4baf978c269f7e83ac7b":function(e,t,n){"use strict";n.r(t);var o,i=n("8af190b70a6bc55c6f1b"),r=n.n(i),a=n("0d7f0986bcd2f33d8a2a"),l=n("1037a6e0d5914309f74c"),c=n.n(l),u=n("6938d226fd372a75cbf9"),f=n("4dd2a92e69dcbe1bab10"),d=(n("8a2d1b95e05b6a321e74"),n("b02fe3f80d4238b52f20")),p=n.n(d),s=n("edc5ec6b13db97ea0a32"),b=n("63bac7d5ea40ecc9ba06"),m=n.n(b),v=n("c09d19c0d058d138126d"),y=n.n(v),h=n("435859b6b76fb67a754a"),w=n.n(h),O=n("fee60f331c8753fe01a3"),g=n.n(O),S=n("2618892602a0e7905b7d"),x=n.n(S),j=n("16c7abd7abc407b9f247"),F=n.n(j),T=n("c37835866a3298466125"),_=n.n(T),k=n("5c0a236ca4c0b26f32cd"),P=n.n(k),C=n("921c0b8c557fe6ba5da8"),E=n.n(C),N=n("ab4cb61bcb2dc161defb"),R=n("d7dd51e1bf6bfc2c9c3d"),A=n("2aea235afd5c55b8b19b"),I=n.n(A),B=n("ab5fa99c40f6b171ec35"),$=n("0bc9fc40db0c3d94f9cf");function W(e){return(W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===a)t.children=i;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function G(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var L,Y=function(e){var t=e.input,n=H(e,["input"]);return r.a.createElement(x.a,z({},t,n,{valueselected:t.value,onChange:function(e,n){return t.onChange(n)}}))},K=function(e){return null==e?"Required":void 0},M=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":void 0},Q={text:"Sample Text",email:"sample@mail.com",radio:"option1",selection:"option1",onof:!0,checkbox:!0,textarea:"This is default text"},U=q(E.a,{variant:"h5",component:"h3"},void 0,"Simple Form Example"),X=q(E.a,{component:"p"},void 0,"The delay between when you click (Submit) and when the alert dialog pops up is intentional, to simulate server latency."),ee=q(_.a,{component:"label"},void 0,"Choose One Option"),te=q(P.a,{value:"option1",control:q(g.a,{}),label:"Option 1"}),ne=q(P.a,{value:"option2",control:q(g.a,{}),label:"Option 2"}),oe=q(y.a,{htmlFor:"selection"},void 0,"Selection"),ie=q(m.a,{value:"option1"},void 0,"Option One"),re=q(m.a,{value:"option2"},void 0,"Option Two"),ae=q(m.a,{value:"option3"},void 0,"Option Three"),le=q(_.a,{component:"label"},void 0,"Toggle Input"),ce=q(P.a,{control:q(s.Field,{name:"onof",component:B.Switch}),label:"On/OF Switch"}),ue=q(P.a,{control:q(s.Field,{name:"checkbox",component:B.Checkbox}),label:"Checkbox"}),fe=function(e){function t(){return D(this,t),G(this,J(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.handleSubmit,o=e.pristine,i=e.reset,a=e.submitting,l=e.init,c=e.clear;return q("div",{},void 0,q(w.a,{container:!0,spacing:24,alignItems:"flex-start",direction:"row",justify:"center"},void 0,q(w.a,{item:!0,xs:12,md:6},void 0,q(p.a,{className:t.root},void 0,U,X,q("div",{className:t.buttonInit},void 0,q(I.a,{onClick:function(){return l(Q)},color:"secondary",type:"button"},void 0,"Load Sample Data"),q(I.a,{onClick:function(){return c()},type:"button"},void 0,"Clear Data")),q("form",{onSubmit:n},void 0,q("div",{},void 0,r.a.createElement(s.Field,{name:"text",component:B.TextField,placeholder:"Text Field",label:"Text Field",validate:K,required:!0,ref:this.saveRef,className:t.field})),q("div",{},void 0,q(s.Field,{name:"email",component:B.TextField,placeholder:"Email Field",label:"Email",required:!0,validate:[K,M],className:t.field})),q("div",{className:t.fieldBasic},void 0,ee,q(s.Field,{name:"radio",className:t.inlineWrap,component:Y},void 0,te,ne)),q("div",{},void 0,q(F.a,{className:t.field},void 0,oe,q(s.Field,{name:"selection",component:B.Select,placeholder:"Selection",autoWidth:!0},void 0,ie,re,ae))),q("div",{className:t.fieldBasic},void 0,le,q("div",{className:t.inlineWrap},void 0,ce,ue)),q("div",{className:t.field},void 0,q(s.Field,{name:"textarea",className:t.field,component:B.TextField,placeholder:"Textarea",label:"Textarea",multiline:!0,rows:4})),q("div",{},void 0,q(I.a,{variant:"contained",color:"secondary",type:"submit",disabled:a},void 0,"Submit"),q(I.a,{type:"button",disabled:o||a,onClick:i},void 0,"Reset")))))))}}])&&Z(n.prototype,o),i&&Z(n,i),t}(i.Component),de=Object(s.reduxForm)({form:"immutableExample",enableReinitialize:!0})(fe),pe=Object(R.connect)((function(e){return{force:e,initialValues:e.getIn(["initval","formValues"])}}),(function(e){return{init:Object(N.bindActionCreators)($.b,e),clear:function(){return e($.a)}}}))(de),se=Object(u.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:4*e.spacing.unit,textAlign:"center"}}}))(pe);function be(e){return(be="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t,n,o){L||(L="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===r)t.children=o;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:L,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function he(e,t){return!t||"object"!==be(t)&&"function"!==typeof t?Oe(e):t}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=function(e){function t(){var e,n;ve(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return Se(Oe(n=he(this,(e=we(t)).call.apply(e,[this].concat(i)))),"state",{valueForm:[]}),n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,e),n=t,(o=[{key:"showResult",value:function(e){var t=this;setTimeout((function(){t.setState({valueForm:e}),window.alert("You submitted:\n\n".concat(t.state.valueForm))}),500)}},{key:"render",value:function(){var e=this,t=c.a.name+" - Form",n=c.a.desc;return me("div",{},void 0,me(a.Helmet,{},void 0,me("title",{},void 0,t),me("meta",{name:"description",content:n}),me("meta",{property:"og:title",content:t}),me("meta",{property:"og:description",content:n}),me("meta",{property:"twitter:title",content:t}),me("meta",{property:"twitter:description",content:n})),me(f.j,{title:"Redux Form",icon:"ios-list-box-outline",desc:"This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form."},void 0,me("div",{},void 0,me(se,{onSubmit:function(t){return e.showResult(t)}}))))}}])&&ye(n.prototype,o),i&&ye(n,i),t}(r.a.Component);t.default=Object(u.withStyles)({root:{flexGrow:1}})(xe)}}]);