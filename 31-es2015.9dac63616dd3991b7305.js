(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{iAmB:function(e,t,o){"use strict";o.r(t),o.d(t,"GetStartedModule",(function(){return p}));var n=o("ofXK"),i=o("8MG2"),r=o("XPsC"),s=o("fXoL"),l=o("vAyd");let a=(()=>{class e{constructor(){this.nodeImports='\n"styles": [\n      "node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css",\n      ... any other styles\n]\n',this.htmlImports='\n<link rel="stylesheet" href="path/to/node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css">\n',this.ngModuleExample='\nimport { NgModule } from "@angular/core";\nimport { ClrAddonsModule } from \'@porscheinformatik/clr-addons\';\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n    imports: [\n        ClrAddonsModule,\n        ...\n     ],\n     declarations: [ AppComponent ],\n     bootstrap: [ AppComponent ]\n})\nexport class AppModule { }\n'}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["get-started"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Ab("content-area",!0)},decls:67,vars:12,consts:[[1,"dox-content"],["id","introduction"],["href","https://clarity.design/"],["id","howToUse"],["id","installclarity"],["href","https://clarity.design/documentation/get-started"],["id","installing"],[3,"clrCode","clrDisablePrism"],["id","styles"],[1,"clr-code"],["id","angular"],[3,"clrCode","clrLanguage"],["id","run-your-app"],["clrLanguage","bash",3,"clrCode","clrDisablePrism"],["id","update"],["id","contribute_guidelines"],["href","https://confluence.porscheinformatik.com/confluence/display/PSACNG/Contribution+to+Clarity-Addons"],[2,"visibility","hidden","height","80vh"]],template:function(e,t){1&e&&(s.Ob(0,"section",0),s.Ob(1,"h1",1),s.Bc(2,"Clarity-Addons"),s.Nb(),s.Ob(3,"p"),s.Bc(4,"Project Clarity-Addons is an addon to "),s.Ob(5,"a",2),s.Bc(6,"Clarity"),s.Nb(),s.Nb(),s.Ob(7,"p"),s.Bc(8,"It contains additional components and patterns which are not in scope of Clarity and also provides customized themes. "),s.Nb(),s.Ob(9,"h2",3),s.Bc(10,"How to Use Clarity-Addons"),s.Nb(),s.Ob(11,"h4",4),s.Bc(12,"Step 0: Install Clarity"),s.Nb(),s.Ob(13,"p"),s.Bc(14,"Prerequisite ist an installed clarity package. See "),s.Ob(15,"a",5),s.Bc(16,"Clarity Get Started"),s.Nb(),s.Nb(),s.Ob(17,"h4",6),s.Bc(18,"Step 1: Install Clarity-Addons package"),s.Nb(),s.Ob(19,"p"),s.Jb(20,"clr-code-snippet",7),s.Nb(),s.Ob(21,"h5",8),s.Bc(22,"Step 2: Adding customized styles"),s.Nb(),s.Ob(23,"p"),s.Bc(24,"You can find all compiled styles in "),s.Ob(25,"code",9),s.Bc(26,"node_modules/@porscheinformatik/clr-addons/styles/"),s.Nb(),s.Bc(27,". These styles already contain the clarity styles, so if you imported them, you can remove the clarity styles now. "),s.Nb(),s.Ob(28,"p"),s.Bc(29,"If you are using the Angular CLI, you need to add the "),s.Ob(30,"code",9),s.Bc(31,".angular.json"),s.Nb(),s.Bc(32," file."),s.Nb(),s.Ob(33,"p"),s.Bc(34,"Find the "),s.Ob(35,"code",9),s.Bc(36,"styles"),s.Nb(),s.Bc(37," arrays and add the following: "),s.Jb(38,"clr-code-snippet",7),s.Nb(),s.Jb(39,"p"),s.Ob(40,"p"),s.Bc(41,"If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also put them in the head of the index.html file like: "),s.Jb(42,"clr-code-snippet",7),s.Nb(),s.Jb(43,"p"),s.Ob(44,"h5",10),s.Bc(45,"Step 3: Add Clarity-Addons to Angular application"),s.Nb(),s.Ob(46,"p"),s.Bc(47,"Import the ClarityAddonsModule into your Angular application's module. Your application's main module might look like this: "),s.Jb(48,"clr-code-snippet",11),s.Nb(),s.Ob(49,"h4",12),s.Bc(50,"Step 4: Run Your App"),s.Nb(),s.Jb(51,"clr-code-snippet",13),s.Ob(52,"h4",14),s.Bc(53,"Step 5: Update Clarity-Addons"),s.Nb(),s.Ob(54,"p"),s.Bc(55,"In order to keep up with Clarity-Addons, you can use ng update to automatically update Clarity-Addons to the latest version in your Angular project."),s.Nb(),s.Jb(56,"clr-code-snippet",13),s.Ob(57,"h2",15),s.Bc(58,"Contributing to Clarity-Addons"),s.Nb(),s.Ob(59,"p"),s.Bc(60,"The Clarity-Addons team welcomes contributions from the community. Same rules apply as for Clarity Contributions. "),s.Nb(),s.Ob(61,"p"),s.Bc(62,"Internal Porsche Informatik Guidelines can be found here: "),s.Ob(63,"a",16),s.Bc(64,"Porsche Informatik Guidelines"),s.Nb(),s.Nb(),s.Ob(65,"div",17),s.Bc(66,"This is a spacer to force sidenav highlighting on scroll"),s.Nb(),s.Nb()),2&e&&(s.xb(20),s.fc("clrCode","npm install @porscheinformatik/clr-addons --save")("clrDisablePrism",!0),s.xb(18),s.fc("clrCode",t.nodeImports)("clrDisablePrism",!0),s.xb(4),s.fc("clrCode",t.htmlImports)("clrDisablePrism",!0),s.xb(6),s.fc("clrCode",t.ngModuleExample)("clrLanguage","typescript"),s.xb(3),s.fc("clrCode","npm start")("clrDisablePrism",!0),s.xb(5),s.fc("clrCode","ng update @porscheinformatik/clr-addons")("clrDisablePrism",!0))},directives:[l.a],encapsulation:2}),e})();var c=o("tyNb");const d=[{path:"",component:a,data:{browserTitle:"Get Started"}}];let p=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,i.a,r.a,c.g.forChild(d)]]}),e})()}}]);