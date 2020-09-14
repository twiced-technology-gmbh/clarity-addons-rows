!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{cpmM:function(r,c,o){"use strict";o.r(c),o.d(c,"SearchFieldDemoModule",(function(){return g}));var i,a,l=o("ofXK"),u=o("3Pt+"),s=o("tyNb"),f=o("8MG2"),b=o("6Y1o"),p=o("XPsC"),h=o("JsA7"),d=o("N+3j"),m=o("fXoL"),y=o("0G9f"),O=o("vAyd"),w=((a=function(r){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(o,r);var c=n(o);function o(){var t;return e(this,o),(t=c.call(this,"search-field")).htmlExample='\n<form clrForm>\n    <clr-input-container>\n        <label>Search for any value:</label>\n        <input class="clr-col-md-4" clrInput clrSearch placeholder="Seach for Name, Address, Email, ..."  type="text" name="search" [(ngModel)]="value"/>\n    </clr-input-container>\n</form>\n',t}return o}(d.a)).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m.Cb({type:a,selectors:[["clr-search-field-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&m.Ab("content-area",!0)("dox-content-panel",!0)},features:[m.ub],decls:42,vars:6,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],[1,"list"],["id","code-examples"],["id","examples"],[1,"clr-code"],["clrForm",""],["clrInput","","clrSearch","","placeholder","Seach for Name, Address, Email, ...","type","text","name","search",1,"clr-col-md-4",3,"ngModel","ngModelChange"],[3,"clrCode"]],template:function(e,t){1&e&&(m.Ob(0,"clr-doc-wrapper",0),m.Ob(1,"article"),m.Ob(2,"h5",1),m.Bc(3,"The Seach Field is used to input a value to search for it. "),m.Jb(4,"br"),m.Bc(5," Hitting the delete icon will remove the current value from the input field "),m.Nb(),m.Jb(6,"p"),m.Ob(7,"h3"),m.Bc(8,"Best Practices"),m.Nb(),m.Ob(9,"ul",2),m.Ob(10,"li"),m.Ob(11,"strong"),m.Bc(12,"Placeholder:"),m.Nb(),m.Bc(13," Use a Placeholder displaying common search terms."),m.Jb(14,"br"),m.Bc(15," Limit your hint to just a few words, otherwise you actually increase the cognitive load. "),m.Nb(),m.Ob(16,"li"),m.Ob(17,"strong"),m.Bc(18,"Results: "),m.Nb(),m.Bc(19," Display a message containing the searchterm, when no search results have been found. "),m.Nb(),m.Nb(),m.Ob(20,"div",3),m.Ob(21,"h3",4),m.Bc(22,"Code & Examples"),m.Nb(),m.Ob(23,"p"),m.Bc(24," Because the search field is a directive, it can be applied on any "),m.Ob(25,"code",5),m.Bc(26,"input"),m.Nb(),m.Bc(27," element. The name of the directive is "),m.Ob(28,"code",5),m.Bc(29,"clrSearch"),m.Nb(),m.Bc(30,". This makes the search field compatible with the existing "),m.Ob(31,"code",5),m.Bc(32,"ClrInputContainer"),m.Nb(),m.Bc(33," and forms. "),m.Nb(),m.Ob(34,"h3"),m.Bc(35,"Angular Directive"),m.Nb(),m.Ob(36,"form",6),m.Ob(37,"clr-input-container"),m.Ob(38,"label"),m.Bc(39,"Search label (optional)"),m.Nb(),m.Ob(40,"input",7),m.Vb("ngModelChange",(function(e){return t.value=e})),m.Nb(),m.Nb(),m.Nb(),m.Jb(41,"clr-code-snippet",8),m.Nb(),m.Nb(),m.Nb()),2&e&&(m.fc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),m.xb(40),m.fc("ngModel",t.value),m.xb(1),m.fc("clrCode",t.htmlExample))},directives:[y.a,u.A,u.n,u.o,f.w,f.D,f.E,b.T,u.b,f.C,b.I,u.m,u.p,O.a],encapsulation:2}),a),g=((i=function t(){e(this,t)}).\u0275mod=m.Gb({type:i}),i.\u0275inj=m.Fb({factory:function(e){return new(e||i)},imports:[[l.c,u.h,u.u,f.a,f.x,p.a,h.a,s.g.forChild([{path:"",component:w}]),b.b]]}),i)}}])}();