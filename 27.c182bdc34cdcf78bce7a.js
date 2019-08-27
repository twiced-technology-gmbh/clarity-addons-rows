(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Pk6i:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),s=u("zl1X"),b=u("pMnS"),c=u("8KBR"),a=u("+Xo0"),o=u("0G9f"),i=u("gIcY"),d=u("xLE1"),r=u("6/Z3"),p=u("QkwE"),h=u("vAyd"),O=u("mrSG"),f=u("N+3j"),m='\n<form clrForm>\n  <clr-quick-list\n      [clrAddLabel]="getAddLabel()"\n      [clrAllValues]="possibleOptions"\n      [clrBlankOption]="BLANK_OPTION"\n      [clrMandatory]="true"\n      [clrValues]="selectedOptionsMandatory"\n      class="clr-form-control clr-row"\n      clrControlClasses="clr-col-lg-3 clr-col-md-4 clr-col-sm-5">\n    <label class="clr-control-label clr-col-md-2 clr-col-sm-3 required">Option list</label>\n  </clr-quick-list>\n</form>\n',E="\nBLANK_OPTION: ClrQuickListValue<string> = { id: '-BLANK-', label: '- Select -', value: null };\noptions: Array<string> = [\n  'First option',\n  'Second option',\n  'Third Option',\n  'Fourth option',\n  'Fifth option'\n];\npossibleOptions: Array<ClrQuickListValue<string>> = this.options.map(op=>\n  new class implements ClrQuickListValue<string> {\n    id = op.substr(0, 3);\n    label = op;\n    value = op;\n  }());\n",g=function(l){function n(){var n=l.call(this,"quick-list")||this;return n.htmlExample1=m,n.htmlExample2=E,n.BLANK_OPTION={id:"-BLANK-",label:"- Select -",value:null},n.options=["First option","Second option","Third Option","Fourth option","Fifth option"],n.possibleOptions=n.options.map(function(l){return new function(){this.id=l.substr(0,3),this.label=l,this.value=l}}),n.selectedOptionsMandatory=[],n.selectedOptionsNotMandatory=[],n}return Object(O.c)(n,l),n.prototype.getAddLabel=function(){return"ADD OPTION"},n}(f.a),v=e.sb({encapsulation:2,styles:[],data:{}});function y(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,209,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,a.b,a.a)),e.tb(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,207,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The quick list of Clarity Addons extends the default select component by an Angular Component which allows the developer use a multi selection list."])),(l()(),e.ub(5,0,null,null,165,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"h3",[["id","usage"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Usage"])),(l()(),e.ub(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Use the Quick List whenever you want to allow the user to select multiple option from a suggestion list. The user is able to select option by scrolling over the list. By clicking the Add button below the list he is able to make additional selection."])),(l()(),e.ub(10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The component uses a predefined type "])),(l()(),e.ub(12,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ClrQuickListValue\u227aT\u227b "])),(l()(),e.Ob(-1,null,[" that encapsulates the real data (values), the developer should previously warp his list inside ClrQuickListValue. So the component uses generics "])),(l()(),e.ub(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["T"])),(l()(),e.Ob(-1,null,[" for the type of the contained values."])),(l()(),e.ub(18,0,null,null,40,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.ub(20,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["attribute"])),(l()(),e.ub(23,0,null,null,1,"th",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Values"])),(l()(),e.ub(25,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Effect"])),(l()(),e.ub(27,0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),e.ub(28,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.ub(29,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(30,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["label"])),(l()(),e.ub(32,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: string"])),(l()(),e.ub(34,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["string"])),(l()(),e.ub(36,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["the label that will be displayed for each option"])),(l()(),e.ub(38,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e.ub(39,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(40,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["value"])),(l()(),e.ub(42,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: string"])),(l()(),e.ub(44,0,null,null,2,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.ub(45,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["T"])),(l()(),e.ub(47,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["the value behind each option"])),(l()(),e.ub(49,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.ub(50,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["id"])),(l()(),e.ub(53,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: string"])),(l()(),e.ub(55,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["string"])),(l()(),e.ub(57,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["the ids over the list should be unique"])),(l()(),e.ub(59,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Summary of Options"])),(l()(),e.ub(61,0,null,null,109,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.ub(62,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ub(63,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input/Output"])),(l()(),e.ub(66,0,null,null,1,"th",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Values"])),(l()(),e.ub(68,0,null,null,1,"th",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default"])),(l()(),e.ub(70,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Effect"])),(l()(),e.ub(72,0,null,null,98,"tbody",[],null,null,null,null,null)),(l()(),e.ub(73,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(74,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(75,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrBlankOption]"])),(l()(),e.ub(77,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: ClrQuickListValue"])),(l()(),e.ub(79,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: default"])),(l()(),e.ub(81,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ClrQuickListValue"])),(l()(),e.ub(83,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["default"])),(l()(),e.ub(85,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The object that should refer to the no-option selected"])),(l()(),e.ub(87,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(88,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(89,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrAllValues]"])),(l()(),e.ub(91,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: List of ClrQuickListValue"])),(l()(),e.ub(93,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: false"])),(l()(),e.ub(95,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["List of ClrQuickListValue"])),(l()(),e.ub(97,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["empty"])),(l()(),e.ub(99,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Contains all the options list"])),(l()(),e.ub(101,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(102,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(103,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrValues]"])),(l()(),e.ub(105,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: List of ClrQuickListValue"])),(l()(),e.ub(107,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: undefined"])),(l()(),e.ub(109,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["List of ClrQuickListValue"])),(l()(),e.ub(111,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["empty List"])),(l()(),e.ub(113,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The value of the preselected option"])),(l()(),e.ub(115,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(116,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(117,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrAddLabel]"])),(l()(),e.ub(119,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: string"])),(l()(),e.ub(121,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: ADD OPTION"])),(l()(),e.ub(123,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["string"])),(l()(),e.ub(125,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ADD OPTION"])),(l()(),e.ub(127,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Label for the add button"])),(l()(),e.ub(129,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(130,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(131,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrMandatory]"])),(l()(),e.ub(133,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: boolean"])),(l()(),e.ub(135,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: false"])),(l()(),e.ub(137,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["boolean"])),(l()(),e.ub(139,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["false"])),(l()(),e.ub(141,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Decides whether at least one option should be selected. If mandatory, the quick-list will always display at least one field. "])),(l()(),e.ub(143,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(144,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(145,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["(clrValuesChanged)"])),(l()(),e.ub(147,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(149,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: undefined"])),(l()(),e.ub(151,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["List of ClrQuickListValue"])),(l()(),e.ub(153,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["undefined"])),(l()(),e.ub(155,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Event which returns the user's selected options whenever the list changes"])),(l()(),e.ub(157,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(158,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(159,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["(clrEmptyOptionAdded)"])),(l()(),e.ub(161,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: void"])),(l()(),e.ub(163,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: undefined"])),(l()(),e.ub(165,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["void"])),(l()(),e.ub(167,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["undefined"])),(l()(),e.ub(169,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Event which triggers on the add button clicked"])),(l()(),e.ub(171,0,null,null,38,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.ub(172,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code & Examples"])),(l()(),e.ub(174,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Mandatory use-case"])),(l()(),e.ub(176,0,null,null,12,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,178).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,178).onReset()&&t),t},null,null)),e.tb(177,16384,null,0,i.G,[],null,null),e.tb(178,4210688,null,0,i.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,i.c,null,[i.r]),e.tb(180,16384,null,0,i.q,[[4,i.c]],null,null),e.Lb(512,null,d.Qc,d.Qc,[]),e.Lb(512,null,d.Tc,d.Tc,[]),e.tb(183,16384,null,0,d.cb,[d.Qc,d.Tc],null,null),(l()(),e.ub(184,0,null,null,4,"clr-quick-list",[["class","clr-form-control clr-row"],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5"]],[[2,"quick-list",null]],null,null,c.U,c.u)),e.tb(185,114688,null,0,r.P,[],{blankOption:[0,"blankOption"],allValues:[1,"allValues"],mandatory:[2,"mandatory"],values:[3,"values"],addLabel:[4,"addLabel"],controlClasses:[5,"controlClasses"]},null),(l()(),e.ub(186,0,null,0,2,"label",[["class","clr-control-label clr-col-md-2 clr-col-sm-3 required"]],[[1,"for",0]],null,null,null,null)),e.tb(187,212992,null,0,d.mb,[[2,d.Pc],[2,d.Qc],[2,d.Rc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Mandatory list"])),(l()(),e.ub(189,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Optional use-case"])),(l()(),e.ub(191,0,null,null,12,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,193).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,193).onReset()&&t),t},null,null)),e.tb(192,16384,null,0,i.G,[],null,null),e.tb(193,4210688,null,0,i.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,i.c,null,[i.r]),e.tb(195,16384,null,0,i.q,[[4,i.c]],null,null),e.Lb(512,null,d.Qc,d.Qc,[]),e.Lb(512,null,d.Tc,d.Tc,[]),e.tb(198,16384,null,0,d.cb,[d.Qc,d.Tc],null,null),(l()(),e.ub(199,0,null,null,4,"clr-quick-list",[["class","clr-form-control clr-row"],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5"]],[[2,"quick-list",null]],null,null,c.U,c.u)),e.tb(200,114688,null,0,r.P,[],{blankOption:[0,"blankOption"],allValues:[1,"allValues"],values:[2,"values"],addLabel:[3,"addLabel"],controlClasses:[4,"controlClasses"]},null),(l()(),e.ub(201,0,null,0,2,"label",[["class","clr-control-label clr-col-md-2 clr-col-sm-3"]],[[1,"for",0]],null,null,null,null)),e.tb(202,212992,null,0,d.mb,[[2,d.Pc],[2,d.Qc],[2,d.Rc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Optional list"])),(l()(),e.ub(204,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code snippet"])),(l()(),e.ub(206,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.tb(207,4243456,null,0,h.a,[],{code:[0,"code"]},null),(l()(),e.ub(208,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,p.b,p.a)),e.tb(209,4243456,null,0,h.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,185,0,u.BLANK_OPTION,u.possibleOptions,!0,u.selectedOptionsMandatory,u.getAddLabel(),"clr-col-lg-3 clr-col-md-4 clr-col-sm-5"),l(n,187,0),l(n,200,0,u.BLANK_OPTION,u.possibleOptions,u.selectedOptionsNotMandatory,u.getAddLabel(),"clr-col-lg-3 clr-col-md-4 clr-col-sm-5"),l(n,202,0),l(n,207,0,u.htmlExample1),l(n,209,0,u.htmlExample2,"typescript")},function(l,n){l(n,0,0,!0),l(n,176,0,e.Gb(n,180).ngClassUntouched,e.Gb(n,180).ngClassTouched,e.Gb(n,180).ngClassPristine,e.Gb(n,180).ngClassDirty,e.Gb(n,180).ngClassValid,e.Gb(n,180).ngClassInvalid,e.Gb(n,180).ngClassPending,!0,e.Gb(n,183).layoutService.isHorizontal(),e.Gb(n,183).layoutService.isCompact()),l(n,184,0,!0),l(n,186,0,e.Gb(n,187).forAttr),l(n,191,0,e.Gb(n,195).ngClassUntouched,e.Gb(n,195).ngClassTouched,e.Gb(n,195).ngClassPristine,e.Gb(n,195).ngClassDirty,e.Gb(n,195).ngClassValid,e.Gb(n,195).ngClassInvalid,e.Gb(n,195).ngClassPending,!0,e.Gb(n,198).layoutService.isHorizontal(),e.Gb(n,198).layoutService.isCompact()),l(n,199,0,!0),l(n,201,0,e.Gb(n,202).forAttr)})}function w(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"app-quick-list",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,y,v)),e.tb(1,49152,null,0,g,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var L=e.qb("app-quick-list",g,w,{},{},[]),C=u("Ip0R"),k=u("XPsC"),T=u("ZYCi"),x=u("JsA7");u.d(n,"QuickListDemoModuleNgFactory",function(){return G});var G=e.rb(t,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[s.ab,s.a,s.b,s.d,s.e,s.f,s.g,s.h,s.c,s.bb,s.cb,s.db,s.eb,b.a,c.a,L]],[3,e.j],e.z]),e.Eb(4608,C.s,C.r,[e.w,[2,C.K]]),e.Eb(4608,i.D,i.D,[]),e.Eb(4608,r.f,r.f,[]),e.Eb(1073742336,C.c,C.c,[]),e.Eb(1073742336,i.C,i.C,[]),e.Eb(1073742336,i.k,i.k,[]),e.Eb(1073742336,d.gb,d.gb,[]),e.Eb(1073742336,d.Lc,d.Lc,[]),e.Eb(1073742336,d.Le,d.Le,[]),e.Eb(1073742336,d.Y,d.Y,[]),e.Eb(1073742336,d.i,d.i,[]),e.Eb(1073742336,d.ab,d.ab,[]),e.Eb(1073742336,d.u,d.u,[]),e.Eb(1073742336,d.Uc,d.Uc,[]),e.Eb(1073742336,d.s,d.s,[]),e.Eb(1073742336,d.Xc,d.Xc,[]),e.Eb(1073742336,d.O,d.O,[]),e.Eb(1073742336,d.lb,d.lb,[]),e.Eb(1073742336,d.Bb,d.Bb,[]),e.Eb(1073742336,d.Hb,d.Hb,[]),e.Eb(1073742336,d.Lb,d.Lb,[]),e.Eb(1073742336,d.hc,d.hc,[]),e.Eb(1073742336,d.db,d.db,[]),e.Eb(1073742336,d.rb,d.rb,[]),e.Eb(1073742336,d.hd,d.hd,[]),e.Eb(1073742336,d.kd,d.kd,[]),e.Eb(1073742336,d.S,d.S,[]),e.Eb(1073742336,d.Rb,d.Rb,[]),e.Eb(1073742336,d.H,d.H,[]),e.Eb(1073742336,d.Xb,d.Xb,[]),e.Eb(1073742336,d.nc,d.nc,[]),e.Eb(1073742336,d.y,d.y,[]),e.Eb(1073742336,d.vb,d.vb,[]),e.Eb(1073742336,d.qb,d.qb,[]),e.Eb(1073742336,d.n,d.n,[]),e.Eb(1073742336,d.o,d.o,[]),e.Eb(1073742336,d.tb,d.tb,[]),e.Eb(1073742336,d.yb,d.yb,[]),e.Eb(1073742336,d.je,d.je,[]),e.Eb(1073742336,d.ec,d.ec,[]),e.Eb(1073742336,d.sc,d.sc,[]),e.Eb(1073742336,d.ob,d.ob,[]),e.Eb(1073742336,d.Ob,d.Ob,[]),e.Eb(1073742336,d.kc,d.kc,[]),e.Eb(1073742336,d.Cb,d.Cb,[]),e.Eb(1073742336,d.wc,d.wc,[]),e.Eb(1073742336,d.ye,d.ye,[]),e.Eb(1073742336,d.xe,d.xe,[]),e.Eb(1073742336,d.Eb,d.Eb,[]),e.Eb(1073742336,d.a,d.a,[]),e.Eb(1073742336,k.a,k.a,[]),e.Eb(1073742336,T.p,T.p,[[2,T.u],[2,T.l]]),e.Eb(1073742336,x.a,x.a,[]),e.Eb(1073742336,r.cb,r.cb,[]),e.Eb(1073742336,r.M,r.M,[]),e.Eb(1073742336,r.s,r.s,[]),e.Eb(1073742336,r.K,r.K,[]),e.Eb(1073742336,r.h,r.h,[]),e.Eb(1073742336,r.e,r.e,[]),e.Eb(1073742336,r.w,r.w,[]),e.Eb(1073742336,r.o,r.o,[]),e.Eb(1073742336,r.C,r.C,[]),e.Eb(1073742336,r.u,r.u,[]),e.Eb(1073742336,r.c,r.c,[]),e.Eb(1073742336,r.F,r.F,[]),e.Eb(1073742336,r.T,r.T,[]),e.Eb(1073742336,r.Y,r.Y,[]),e.Eb(1073742336,r.O,r.O,[]),e.Eb(1073742336,r.j,r.j,[]),e.Eb(1073742336,r.q,r.q,[]),e.Eb(1073742336,r.Q,r.Q,[]),e.Eb(1073742336,r.lb,r.lb,[]),e.Eb(1073742336,r.z,r.z,[]),e.Eb(1073742336,r.a,r.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,T.j,function(){return[[{path:"",component:g}]]},[])])})}}]);