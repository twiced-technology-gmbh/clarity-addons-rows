!function(){function t(t,l){if(!(t instanceof l))throw new TypeError("Cannot call a class as a function")}function l(t,c){return(l=Object.setPrototypeOf||function(t,l){return t.__proto__=l,t})(t,c)}function c(t){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=b(t);if(l){var o=b(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function e(t,l){return!l||"object"!=typeof l&&"function"!=typeof l?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):l}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{selW:function(e,b,r){"use strict";r.r(b),r.d(b,"TreetableDemoModule",(function(){return f}));var o,n,a=r("ofXK"),i=r("tyNb"),O=r("6Y1o"),N=r("8MG2"),s=r("XPsC"),u=r("3Pt+"),d=r("JsA7"),B=r("N+3j"),h=r("fXoL"),m=r("0G9f"),p=r("vAyd"),w=((n=function(e){!function(t,c){if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(c&&c.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),c&&l(t,c)}(r,e);var b=c(r);function r(){var l;return t(this,r),(l=b.call(this,"treetable")).htmlExampleClickableRows="\n<clr-treetable>\n    <clr-tt-column>Name</clr-tt-column>\n    <clr-tt-column>Role</clr-tt-column>\n    <clr-tt-column>Random Number</clr-tt-column>\n    <clr-tt-column>Random Date</clr-tt-column>\n\n    <clr-tt-row>\n        <clr-tt-cell>David Wallace</clr-tt-cell>\n        <clr-tt-cell>CFO</clr-tt-cell>\n        <clr-tt-cell>2</clr-tt-cell>\n        <clr-tt-cell>2nd of August</clr-tt-cell>\n\n        <clr-tt-row>\n            <clr-tt-cell>Michael Scott</clr-tt-cell>\n            <clr-tt-cell>Regional Manager</clr-tt-cell>\n            <clr-tt-cell>19</clr-tt-cell>\n            <clr-tt-cell>3rd of April</clr-tt-cell>\n\n            <clr-tt-row>\n                <clr-tt-cell>Dwight K. Schrute</clr-tt-cell>\n                <clr-tt-cell>Assistant to the Regional Manager</clr-tt-cell>\n                <clr-tt-cell>290</clr-tt-cell>\n                <clr-tt-cell>17th of May</clr-tt-cell>\n            </clr-tt-row>\n            ...\n        </clr-tt-row>\n    </clr-tt-row>\n</clr-treetable>",l.htmlExampleClickableCaret='\n<clr-treetable [clrClickableRows]="false">\n    <clr-tt-column>Name</clr-tt-column>\n    <clr-tt-column>Role</clr-tt-column>\n    <clr-tt-column>Actor</clr-tt-column>\n\n    <clr-tt-row [clrExpanded]="true">\n        <clr-tt-cell>David Wallace</clr-tt-cell>\n        <clr-tt-cell>CFO</clr-tt-cell>\n        <clr-tt-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-tt-cell>\n    </clr-tt-row>\n    ...\n</clr-treetable>',l.htmlExampleCustomSize='\n<clr-treetable>\n    <clr-tt-column class="clr-col-9">Some column</clr-tt-column>\n    <clr-tt-column class="clr-col-3">Some other column</clr-tt-column>\n    <clr-tt-row clrExpandable="true">\n        ...\n    </clr-tt-row>\n</clr-treetable>',l}return r}(B.a)).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h.Cb({type:n,selectors:[["clr-treetable-demo"]],hostVars:4,hostBindings:function(t,l){2&t&&h.Ab("content-area",!0)("dox-content-panel",!0)},features:[h.ub],decls:502,vars:9,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","design-guidelines"],[1,"list"],["href","https://clarity.design/documentation/tree-view"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","examples"],["clrExpandable","true"],[3,"clrCode"],[1,"clr-code"],[3,"clrClickableRows"],["clrExpandable","true",3,"clrExpanded"],["target","_blank","href","https://www.google.com"],[1,"clr-col-9"],[1,"clr-col-3"]],template:function(t,l){1&t&&(h.Ob(0,"clr-doc-wrapper",0),h.Ob(1,"article"),h.Ob(2,"h5",1),h.Bc(3," Treetables are for organizing hierarchical data with multiple columns. "),h.Nb(),h.Ob(4,"div",2),h.Ob(5,"h3"),h.Bc(6,"Use When"),h.Nb(),h.Ob(7,"p"),h.Bc(8," Use this component when you need to display a hierarchichal data structure with multiple columns per entry. Make sure all entries use the same columns. E.g. the parent has a name and a description column, the child cannot have a name and a date column. "),h.Nb(),h.Ob(9,"h3"),h.Bc(10,"Do not use"),h.Nb(),h.Ob(11,"p"),h.Bc(12,"Avoid using this component in any of the following cases:"),h.Nb(),h.Ob(13,"ul",3),h.Ob(14,"li"),h.Bc(15," You require using a pagination. The treetable does not support paging. "),h.Nb(),h.Ob(16,"li"),h.Bc(17," The entries in your datastructure do not have multiple values (columns). Consider using a "),h.Ob(18,"a",4),h.Bc(19,"TreeView"),h.Nb(),h.Bc(20,". "),h.Nb(),h.Ob(21,"li"),h.Bc(22," Your elements need to be sorted. Since the data-rows are indented, a change of the order would cause confusion. "),h.Nb(),h.Nb(),h.Ob(23,"h3"),h.Bc(24,"Behavior"),h.Nb(),h.Ob(25,"p"),h.Bc(26," Each entry can have none, one or multiple descendants. The first column of a descendant-row is indentend to visualize the hierarchy. Parent rows are collapsed, i.e. all children rows are hidden initially. To display the children the user can either click on the leading caret-icon or the whole parent row, depending on the row-selection mode. Avoid the row-selection mode when the row contains individually clickable items. "),h.Nb(),h.Ob(27,"h4"),h.Bc(28,"Sorting"),h.Nb(),h.Bc(29," The treetable cannot be sorted by the user. Display the entries in alphabetical order. Consider collapsing either all or none of the parent nodes. "),h.Ob(30,"h3"),h.Bc(31,"Technical limitations"),h.Nb(),h.Ob(32,"p"),h.Bc(33," Note that up to 6 levels of nesting are supported. "),h.Nb(),h.Ob(34,"h3"),h.Bc(35,"Summary of Options"),h.Nb(),h.Ob(36,"h4"),h.Bc(37,"clr-treetable"),h.Nb(),h.Ob(38,"table",5),h.Ob(39,"thead"),h.Ob(40,"tr"),h.Ob(41,"th",6),h.Bc(42,"Input/Output"),h.Nb(),h.Ob(43,"th",7),h.Bc(44,"Values"),h.Nb(),h.Ob(45,"th",8),h.Bc(46,"Default"),h.Nb(),h.Ob(47,"th",6),h.Bc(48,"Effect"),h.Nb(),h.Nb(),h.Nb(),h.Ob(49,"tbody"),h.Ob(50,"tr"),h.Ob(51,"td",6),h.Ob(52,"b"),h.Bc(53,"[clrClickableRows]"),h.Nb(),h.Ob(54,"div",9),h.Bc(55,"Type: boolean"),h.Nb(),h.Ob(56,"div",9),h.Bc(57,"Default: true"),h.Nb(),h.Nb(),h.Ob(58,"td",7),h.Bc(59,"boolean"),h.Nb(),h.Ob(60,"td",8),h.Bc(61,"true"),h.Nb(),h.Ob(62,"td",6),h.Bc(63,"Sets the [clrClickable] for every row"),h.Nb(),h.Nb(),h.Ob(64,"tr"),h.Ob(65,"td",6),h.Ob(66,"b"),h.Bc(67,"[clrHideHeader]"),h.Nb(),h.Ob(68,"div",9),h.Bc(69,"Type: boolean"),h.Nb(),h.Ob(70,"div",9),h.Bc(71,"Default: false"),h.Nb(),h.Nb(),h.Ob(72,"td",7),h.Bc(73,"boolean"),h.Nb(),h.Ob(74,"td",8),h.Bc(75,"false"),h.Nb(),h.Ob(76,"td",6),h.Bc(77,"Hides the header row"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(78,"h4"),h.Bc(79,"clr-tt-row"),h.Nb(),h.Ob(80,"table",5),h.Ob(81,"thead"),h.Ob(82,"tr"),h.Ob(83,"th",6),h.Bc(84,"Input/Output"),h.Nb(),h.Ob(85,"th",7),h.Bc(86,"Values"),h.Nb(),h.Ob(87,"th",8),h.Bc(88,"Default"),h.Nb(),h.Ob(89,"th",6),h.Bc(90,"Effect"),h.Nb(),h.Nb(),h.Nb(),h.Ob(91,"tbody"),h.Ob(92,"tr"),h.Ob(93,"td",6),h.Ob(94,"b"),h.Bc(95,"[clrExpanded]"),h.Nb(),h.Ob(96,"div",9),h.Bc(97,"Type: boolean"),h.Nb(),h.Ob(98,"div",9),h.Bc(99,"Default: false"),h.Nb(),h.Nb(),h.Ob(100,"td",7),h.Bc(101,"boolean"),h.Nb(),h.Ob(102,"td",8),h.Bc(103,"false"),h.Nb(),h.Ob(104,"td",6),h.Bc(105,"Whether the row is expanded or not"),h.Nb(),h.Nb(),h.Ob(106,"tr"),h.Ob(107,"td",6),h.Ob(108,"b"),h.Bc(109,"[clrClickable]"),h.Nb(),h.Ob(110,"div",9),h.Bc(111,"Type: boolean"),h.Nb(),h.Ob(112,"div",9),h.Bc(113,"Default: true"),h.Nb(),h.Nb(),h.Ob(114,"td",7),h.Bc(115,"boolean"),h.Nb(),h.Ob(116,"td",8),h.Bc(117,"true"),h.Nb(),h.Ob(118,"td",6),h.Bc(119," Whether the whole row is clickable to expand it "),h.Nb(),h.Nb(),h.Ob(120,"tr"),h.Ob(121,"td",6),h.Ob(122,"b"),h.Bc(123,"[clrExpandable]"),h.Nb(),h.Ob(124,"div",9),h.Bc(125,"Type: boolean"),h.Nb(),h.Ob(126,"div",9),h.Bc(127,"Default: false"),h.Nb(),h.Nb(),h.Ob(128,"td",7),h.Bc(129,"boolean"),h.Nb(),h.Ob(130,"td",8),h.Bc(131,"false"),h.Nb(),h.Ob(132,"td",6),h.Bc(133," Whether the row is expandable (also shows caret icons) "),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(134,"div",10),h.Ob(135,"h3"),h.Bc(136,"Code & Examples"),h.Nb(),h.Ob(137,"h4"),h.Bc(138,"Treetable with clickable rows"),h.Nb(),h.Ob(139,"p"),h.Bc(140," Click on a row to display its children. "),h.Nb(),h.Ob(141,"clr-treetable"),h.Ob(142,"clr-tt-column"),h.Bc(143,"Name"),h.Nb(),h.Ob(144,"clr-tt-column"),h.Bc(145,"Role"),h.Nb(),h.Ob(146,"clr-tt-column"),h.Bc(147,"Random Number"),h.Nb(),h.Ob(148,"clr-tt-column"),h.Bc(149,"Random Date"),h.Nb(),h.Ob(150,"clr-tt-row",11),h.Ob(151,"clr-tt-cell"),h.Bc(152,"David Wallace"),h.Nb(),h.Ob(153,"clr-tt-cell"),h.Bc(154,"CFO"),h.Nb(),h.Ob(155,"clr-tt-cell"),h.Bc(156,"2"),h.Nb(),h.Ob(157,"clr-tt-cell"),h.Bc(158,"2nd of August"),h.Nb(),h.Ob(159,"clr-tt-row",11),h.Ob(160,"clr-tt-cell"),h.Bc(161,"Michael Scott"),h.Nb(),h.Ob(162,"clr-tt-cell"),h.Bc(163,"Regional Manager"),h.Nb(),h.Ob(164,"clr-tt-cell"),h.Bc(165,"19"),h.Nb(),h.Ob(166,"clr-tt-cell"),h.Bc(167,"3rd of April"),h.Nb(),h.Ob(168,"clr-tt-row"),h.Ob(169,"clr-tt-cell"),h.Bc(170,"Dwight K. Schrute"),h.Nb(),h.Ob(171,"clr-tt-cell"),h.Bc(172,"Assistant to the Regional Manager"),h.Nb(),h.Ob(173,"clr-tt-cell"),h.Bc(174,"290"),h.Nb(),h.Ob(175,"clr-tt-cell"),h.Bc(176,"17th of May"),h.Nb(),h.Nb(),h.Ob(177,"clr-tt-row",11),h.Ob(178,"clr-tt-cell"),h.Bc(179,"Jim Halpert"),h.Nb(),h.Ob(180,"clr-tt-cell"),h.Bc(181,"Head of Sales"),h.Nb(),h.Ob(182,"clr-tt-cell"),h.Bc(183,"Lucky 7"),h.Nb(),h.Ob(184,"clr-tt-cell"),h.Bc(185,"21st of December"),h.Nb(),h.Ob(186,"clr-tt-row"),h.Ob(187,"clr-tt-cell"),h.Bc(188,"Andy Bernard"),h.Nb(),h.Jb(189,"clr-tt-cell"),h.Ob(190,"clr-tt-cell"),h.Bc(191,"13"),h.Nb(),h.Ob(192,"clr-tt-cell"),h.Bc(193,"1st of December"),h.Nb(),h.Nb(),h.Ob(194,"clr-tt-row"),h.Ob(195,"clr-tt-cell"),h.Bc(196,"Stanley Hudson"),h.Nb(),h.Jb(197,"clr-tt-cell"),h.Ob(198,"clr-tt-cell"),h.Bc(199,"3"),h.Nb(),h.Ob(200,"clr-tt-cell"),h.Bc(201,"15th of November"),h.Nb(),h.Nb(),h.Ob(202,"clr-tt-row"),h.Ob(203,"clr-tt-cell"),h.Bc(204,"Phyllis Vance"),h.Nb(),h.Jb(205,"clr-tt-cell"),h.Jb(206,"clr-tt-cell"),h.Jb(207,"clr-tt-cell"),h.Nb(),h.Ob(208,"clr-tt-row"),h.Ob(209,"clr-tt-cell"),h.Bc(210,"Todd Packer"),h.Nb(),h.Ob(211,"clr-tt-cell"),h.Bc(212,"The Packman"),h.Nb(),h.Ob(213,"clr-tt-cell"),h.Bc(214,"96"),h.Nb(),h.Ob(215,"clr-tt-cell"),h.Bc(216,"6th of September"),h.Nb(),h.Nb(),h.Nb(),h.Ob(217,"clr-tt-row",11),h.Ob(218,"clr-tt-cell"),h.Bc(219,"Angela Martin"),h.Nb(),h.Ob(220,"clr-tt-cell"),h.Bc(221,"Head of Accounting"),h.Nb(),h.Ob(222,"clr-tt-cell"),h.Bc(223,"29"),h.Nb(),h.Ob(224,"clr-tt-cell"),h.Bc(225,"7th of September"),h.Nb(),h.Ob(226,"clr-tt-row"),h.Ob(227,"clr-tt-cell"),h.Bc(228,"Kevin Malone"),h.Nb(),h.Jb(229,"clr-tt-cell"),h.Ob(230,"clr-tt-cell"),h.Bc(231,"10"),h.Nb(),h.Ob(232,"clr-tt-cell"),h.Bc(233,"4th of June"),h.Nb(),h.Nb(),h.Ob(234,"clr-tt-row"),h.Ob(235,"clr-tt-cell"),h.Bc(236,"Oscar Martinez"),h.Nb(),h.Jb(237,"clr-tt-cell"),h.Ob(238,"clr-tt-cell"),h.Bc(239,"11"),h.Nb(),h.Ob(240,"clr-tt-cell"),h.Bc(241,"9th of June"),h.Nb(),h.Nb(),h.Nb(),h.Ob(242,"clr-tt-row",11),h.Ob(243,"clr-tt-cell"),h.Bc(244,"Kelly Kapoor"),h.Nb(),h.Ob(245,"clr-tt-cell"),h.Bc(246,"Head of Customer Service"),h.Nb(),h.Ob(247,"clr-tt-cell"),h.Bc(248,"1"),h.Nb(),h.Jb(249,"clr-tt-cell"),h.Ob(250,"clr-tt-row"),h.Ob(251,"clr-tt-cell"),h.Bc(252,"Ryan Howard"),h.Nb(),h.Ob(253,"clr-tt-cell"),h.Bc(254,"Temp"),h.Nb(),h.Jb(255,"clr-tt-cell"),h.Jb(256,"clr-tt-cell"),h.Nb(),h.Nb(),h.Ob(257,"clr-tt-row"),h.Ob(258,"clr-tt-cell"),h.Bc(259,"Creed Bratton"),h.Nb(),h.Ob(260,"clr-tt-cell"),h.Bc(261,"Quality Assurance"),h.Nb(),h.Ob(262,"clr-tt-cell"),h.Bc(263,"3"),h.Nb(),h.Ob(264,"clr-tt-cell"),h.Bc(265,"Early 1900s"),h.Nb(),h.Nb(),h.Ob(266,"clr-tt-row"),h.Ob(267,"clr-tt-cell"),h.Bc(268,"Meredith Palmer"),h.Nb(),h.Ob(269,"clr-tt-cell"),h.Bc(270,"Supplier Relations"),h.Nb(),h.Jb(271,"clr-tt-cell"),h.Jb(272,"clr-tt-cell"),h.Nb(),h.Ob(273,"clr-tt-row"),h.Ob(274,"clr-tt-cell"),h.Bc(275,"Toby Flenderson"),h.Nb(),h.Ob(276,"clr-tt-cell"),h.Bc(277,"Human Resources"),h.Nb(),h.Ob(278,"clr-tt-cell"),h.Bc(279,"0"),h.Nb(),h.Ob(280,"clr-tt-cell"),h.Bc(281,"Ugh..."),h.Nb(),h.Nb(),h.Ob(282,"clr-tt-row"),h.Ob(283,"clr-tt-cell"),h.Bc(284,"Pam Beesly"),h.Nb(),h.Ob(285,"clr-tt-cell"),h.Bc(286,"Reception"),h.Nb(),h.Ob(287,"clr-tt-cell"),h.Bc(288,"10"),h.Nb(),h.Ob(289,"clr-tt-cell"),h.Bc(290,"4th of July"),h.Nb(),h.Nb(),h.Ob(291,"clr-tt-row"),h.Ob(292,"clr-tt-cell"),h.Bc(293,"Darryl Philbin"),h.Nb(),h.Ob(294,"clr-tt-cell"),h.Bc(295,"Warehouse"),h.Nb(),h.Ob(296,"clr-tt-cell"),h.Bc(297,"99"),h.Nb(),h.Ob(298,"clr-tt-cell"),h.Bc(299,"31st of August"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(300,"clr-tt-row"),h.Ob(301,"clr-tt-cell"),h.Bc(302,"Some Dude - you probably know him, but he definitely knows you!"),h.Nb(),h.Ob(303,"clr-tt-cell"),h.Bc(304,"N/A"),h.Nb(),h.Ob(305,"clr-tt-cell"),h.Bc(306,"-1"),h.Nb(),h.Ob(307,"clr-tt-cell"),h.Bc(308,"1st of April"),h.Nb(),h.Nb(),h.Nb(),h.Jb(309,"clr-code-snippet",12),h.Ob(310,"h4"),h.Bc(311,"Treetable with clickable carets and expanded rows"),h.Nb(),h.Ob(312,"p"),h.Bc(313," Sometimes you might want to have links or buttons inside your rows. Click event bubbling might prevent clicking on said links without expanding or contracting that row. Additionally, you can have rows that are expanded by default using the "),h.Ob(314,"code",13),h.Bc(315,"clrExpanded"),h.Nb(),h.Bc(316," input property. "),h.Nb(),h.Ob(317,"clr-treetable",14),h.Ob(318,"clr-tt-column"),h.Bc(319,"Name"),h.Nb(),h.Ob(320,"clr-tt-column"),h.Bc(321,"Role"),h.Nb(),h.Ob(322,"clr-tt-column"),h.Bc(323,"Actor"),h.Nb(),h.Ob(324,"clr-tt-row",15),h.Ob(325,"clr-tt-cell"),h.Bc(326,"David Wallace"),h.Nb(),h.Ob(327,"clr-tt-cell"),h.Bc(328,"CFO"),h.Nb(),h.Ob(329,"clr-tt-cell"),h.Ob(330,"a",16),h.Bc(331,"Some actor"),h.Nb(),h.Nb(),h.Ob(332,"clr-tt-row",11),h.Ob(333,"clr-tt-cell"),h.Bc(334,"Michael Scott"),h.Nb(),h.Ob(335,"clr-tt-cell"),h.Bc(336,"Regional Manager"),h.Nb(),h.Ob(337,"clr-tt-cell"),h.Ob(338,"a",16),h.Bc(339,"Some actor"),h.Nb(),h.Nb(),h.Ob(340,"clr-tt-row"),h.Ob(341,"clr-tt-cell"),h.Bc(342,"Dwight K. Schrute"),h.Nb(),h.Ob(343,"clr-tt-cell"),h.Bc(344,"Assistant to the Regional Manager"),h.Nb(),h.Ob(345,"clr-tt-cell"),h.Ob(346,"a",16),h.Bc(347,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(348,"clr-tt-row"),h.Ob(349,"clr-tt-cell"),h.Bc(350,"Jim Halpert"),h.Nb(),h.Ob(351,"clr-tt-cell"),h.Bc(352,"Head of Sales"),h.Nb(),h.Ob(353,"clr-tt-cell"),h.Ob(354,"a",16),h.Bc(355,"Some actor"),h.Nb(),h.Nb(),h.Ob(356,"clr-tt-row"),h.Ob(357,"clr-tt-cell"),h.Bc(358,"Andy Bernard"),h.Nb(),h.Jb(359,"clr-tt-cell"),h.Ob(360,"clr-tt-cell"),h.Ob(361,"a",16),h.Bc(362,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(363,"clr-tt-row"),h.Ob(364,"clr-tt-cell"),h.Bc(365,"Stanley Hudson"),h.Nb(),h.Jb(366,"clr-tt-cell"),h.Ob(367,"clr-tt-cell"),h.Ob(368,"a",16),h.Bc(369,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(370,"clr-tt-row"),h.Ob(371,"clr-tt-cell"),h.Bc(372,"Phyllis Vance"),h.Nb(),h.Jb(373,"clr-tt-cell"),h.Ob(374,"clr-tt-cell"),h.Ob(375,"a",16),h.Bc(376,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(377,"clr-tt-row"),h.Ob(378,"clr-tt-cell"),h.Bc(379,"Todd Packer"),h.Nb(),h.Ob(380,"clr-tt-cell"),h.Bc(381,"The Packman"),h.Nb(),h.Ob(382,"clr-tt-cell"),h.Ob(383,"a",16),h.Bc(384,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(385,"clr-tt-row",11),h.Ob(386,"clr-tt-cell"),h.Bc(387,"Angela Martin"),h.Nb(),h.Ob(388,"clr-tt-cell"),h.Bc(389,"Head of Accounting"),h.Nb(),h.Ob(390,"clr-tt-cell"),h.Ob(391,"a",16),h.Bc(392,"Some actor"),h.Nb(),h.Nb(),h.Ob(393,"clr-tt-row"),h.Ob(394,"clr-tt-cell"),h.Bc(395,"Kevin Malone"),h.Nb(),h.Jb(396,"clr-tt-cell"),h.Ob(397,"clr-tt-cell"),h.Ob(398,"a",16),h.Bc(399,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(400,"clr-tt-row"),h.Ob(401,"clr-tt-cell"),h.Bc(402,"Oscar Martinez"),h.Nb(),h.Jb(403,"clr-tt-cell"),h.Ob(404,"clr-tt-cell"),h.Ob(405,"a",16),h.Bc(406,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(407,"clr-tt-row",11),h.Ob(408,"clr-tt-cell"),h.Bc(409,"Kelly Kapoor"),h.Nb(),h.Ob(410,"clr-tt-cell"),h.Bc(411,"Head of Customer Service"),h.Nb(),h.Ob(412,"clr-tt-cell"),h.Ob(413,"a",16),h.Bc(414,"Some actor"),h.Nb(),h.Nb(),h.Ob(415,"clr-tt-row"),h.Ob(416,"clr-tt-cell"),h.Bc(417,"Ryan Howard"),h.Nb(),h.Ob(418,"clr-tt-cell"),h.Bc(419,"Temp"),h.Nb(),h.Ob(420,"clr-tt-cell"),h.Ob(421,"a",16),h.Bc(422,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(423,"clr-tt-row"),h.Ob(424,"clr-tt-cell"),h.Bc(425,"Creed Bratton"),h.Nb(),h.Ob(426,"clr-tt-cell"),h.Bc(427,"Quality Assurance"),h.Nb(),h.Ob(428,"clr-tt-cell"),h.Ob(429,"a",16),h.Bc(430,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(431,"clr-tt-row"),h.Ob(432,"clr-tt-cell"),h.Bc(433,"Meredith Palmer"),h.Nb(),h.Ob(434,"clr-tt-cell"),h.Bc(435,"Supplier Relations"),h.Nb(),h.Ob(436,"clr-tt-cell"),h.Ob(437,"a",16),h.Bc(438,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(439,"clr-tt-row"),h.Ob(440,"clr-tt-cell"),h.Bc(441,"Toby Flenderson"),h.Nb(),h.Ob(442,"clr-tt-cell"),h.Bc(443,"Human Resources"),h.Nb(),h.Ob(444,"clr-tt-cell"),h.Ob(445,"a",16),h.Bc(446,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(447,"clr-tt-row"),h.Ob(448,"clr-tt-cell"),h.Bc(449,"Pam Beesly"),h.Nb(),h.Ob(450,"clr-tt-cell"),h.Bc(451,"Reception"),h.Nb(),h.Ob(452,"clr-tt-cell"),h.Ob(453,"a",16),h.Bc(454,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Ob(455,"clr-tt-row"),h.Ob(456,"clr-tt-cell"),h.Bc(457,"Darryl Philbin"),h.Nb(),h.Ob(458,"clr-tt-cell"),h.Bc(459,"Warehouse"),h.Nb(),h.Ob(460,"clr-tt-cell"),h.Ob(461,"a",16),h.Bc(462,"Some actor"),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(463,"clr-tt-row"),h.Ob(464,"clr-tt-cell"),h.Bc(465,"Some Dude"),h.Nb(),h.Ob(466,"clr-tt-cell"),h.Bc(467,"N/A"),h.Nb(),h.Ob(468,"clr-tt-cell"),h.Bc(469,"You know him, nothing more to see"),h.Nb(),h.Nb(),h.Nb(),h.Jb(470,"clr-code-snippet",12),h.Ob(471,"h4"),h.Bc(472,"Custom column sizing"),h.Nb(),h.Ob(473,"p"),h.Bc(474," For custom column widths use the "),h.Ob(475,"code",13),h.Bc(476,"clr-col-"),h.Nb(),h.Bc(477," classes on the header columns "),h.Ob(478,"code",13),h.Bc(479,"clr-tt-column"),h.Nb(),h.Bc(480,". The cells in the body will adjust accordingly automatically. "),h.Nb(),h.Ob(481,"clr-treetable"),h.Ob(482,"clr-tt-column",17),h.Bc(483,"Some column"),h.Nb(),h.Ob(484,"clr-tt-column",18),h.Bc(485,"Some other column"),h.Nb(),h.Ob(486,"clr-tt-row",11),h.Ob(487,"clr-tt-cell"),h.Bc(488,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dignissimos, ducimus..."),h.Nb(),h.Ob(489,"clr-tt-cell"),h.Bc(490,"2"),h.Nb(),h.Ob(491,"clr-tt-row"),h.Ob(492,"clr-tt-cell"),h.Bc(493,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda, at atque dignissimos ..."),h.Nb(),h.Ob(494,"clr-tt-cell"),h.Bc(495,"3"),h.Nb(),h.Nb(),h.Nb(),h.Ob(496,"clr-tt-row"),h.Ob(497,"clr-tt-cell"),h.Bc(498,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque ex libero, minus ..."),h.Nb(),h.Ob(499,"clr-tt-cell"),h.Bc(500,"1"),h.Nb(),h.Nb(),h.Nb(),h.Jb(501,"clr-code-snippet",12),h.Nb(),h.Nb(),h.Nb()),2&t&&(h.fc("ng",l.ng)("ui",l.ui)("title",l.title)("newLayout",l.newLayout),h.xb(309),h.fc("clrCode",l.htmlExampleClickableRows),h.xb(8),h.fc("clrClickableRows",!1),h.xb(7),h.fc("clrExpanded",!0),h.xb(146),h.fc("clrCode",l.htmlExampleClickableCaret),h.xb(31),h.fc("clrCode",l.htmlExampleCustomSize))},directives:[m.a,O.K,O.P,O.M,O.Q,O.N,O.R,O.L,O.S,p.a],encapsulation:2}),n),f=((o=function l(){t(this,l)}).\u0275mod=h.Gb({type:o}),o.\u0275inj=h.Fb({factory:function(t){return new(t||o)},imports:[[a.c,s.a,d.a,i.g.forChild([{path:"",component:w}]),u.h,N.a,O.b]]}),o)}}])}();