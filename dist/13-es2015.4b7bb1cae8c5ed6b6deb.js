(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{fcCp:function(t,e,n){"use strict";n.r(e),n.d(e,"SystemAdminModule",function(){return R});var b=n("SVse"),c=n("s7LF"),o=n("iInd"),i=n("8Y7J"),a=n("c/fn"),d=n("hhfa"),r=n("QGev"),p=n("MEzG"),l=n("gtx6"),s=n("y1st");function m(t,e){1&t&&i.Rb(0,"img",30)}function u(t,e){1&t&&(i.Wb(0,"div",31),i.Rb(1,"div"),i.Vb())}const V=function(){return{width:"100%"}},g=function(){return{width:"351px"}};let W=(()=>{class t{constructor(t){this.location=t,this.dummy_data=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}ngOnInit(){}back(){this.location.back()}resetForm(){}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(b.l))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-add-system-admin"]],decls:100,vars:16,consts:[[1,"card","main-div"],[1,"card-header","page-heading-icon"],[1,"header-text"],[1,"row"],[1,"col-md-5"],["styleClass","p-button-outlined",1,"back-p-btn",3,"click"],["pTemplate","content"],[1,"card-body"],[1,"title-text"],[1,"pi","pi-user-plus"],[1,"col-md-1","mt-2","mr-3"],[2,"width","100px"],[1,"red-star"],[1,"col-md-10"],["field","name",3,"dropdown","inputStyle"],[1,"row","mt-4"],["optionLabel","name","optionValue","code","display","chip",3,"options","ngModel","ngModelChange"],["type","text","pInputText","","placeholder","first name",2,"width","340px"],[1,"col-md-4"],["type","text","pInputText","","placeholder","last name",2,"width","351px"],["type","email","pInputText","","placeholder","example@gmail.com",2,"width","340px"],["type","text","pInputText","","placeholder","0",2,"width","351px"],["type","text","pInputText","","placeholder","0",2,"width","340px"],["id","opc","name","picList","optionLabel","name","placeholder","Select Approve By",3,"options","required"],["type","date","pInputText","","placeholder","0",2,"width","340px"],["type","date","pInputText","","placeholder","0",2,"width","351px"],["type","text","pInputText","","placeholder","",2,"width","340px"],[1,"action-btn"],["type","button",1,"btn","btn-outline-primary","cancel-btn",3,"click"],["type","button",1,"btn","btn-primary","save-btn"],["src","../../../../assets/img/icons/back-arrow.svg","alt","",2,"width","17px"],[1,"product-item"]],template:function(t,e){1&t&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Wb(3,"h2"),i.Pc(4,"System Admin"),i.Vb(),i.Wb(5,"div",3),i.Wb(6,"div",4),i.Wb(7,"p-button",5),i.gc("click",function(){return e.back()}),i.Nc(8,m,1,0,"ng-template",6),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Wb(9,"form"),i.Wb(10,"div",7),i.Wb(11,"p",8),i.Rb(12,"i",9),i.Pc(13," Add System Admin "),i.Vb(),i.Wb(14,"div",3),i.Wb(15,"div",10),i.Wb(16,"label",11),i.Pc(17,"User Name "),i.Wb(18,"span",12),i.Pc(19,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(20,"div",13),i.Wb(21,"p-autoComplete",14),i.Nc(22,u,2,0,"ng-template"),i.Vb(),i.Vb(),i.Vb(),i.Wb(23,"div",15),i.Wb(24,"div",10),i.Wb(25,"label",11),i.Pc(26,"User Access "),i.Wb(27,"span",12),i.Pc(28,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(29,"div",13),i.Wb(30,"p-multiSelect",16),i.gc("ngModelChange",function(t){return e.selectedCities=t}),i.Vb(),i.Vb(),i.Vb(),i.Wb(31,"div",15),i.Wb(32,"div",10),i.Wb(33,"label",11),i.Pc(34,"First Name "),i.Wb(35,"span",12),i.Pc(36,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(37,"div",4),i.Rb(38,"input",17),i.Vb(),i.Wb(39,"div",10),i.Wb(40,"label",11),i.Pc(41,"Last Name "),i.Wb(42,"span",12),i.Pc(43,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(44,"div",18),i.Rb(45,"input",19),i.Vb(),i.Vb(),i.Wb(46,"div",15),i.Wb(47,"div",10),i.Wb(48,"label",11),i.Pc(49,"Email "),i.Wb(50,"span",12),i.Pc(51,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(52,"div",4),i.Rb(53,"input",20),i.Vb(),i.Wb(54,"div",10),i.Wb(55,"label",11),i.Pc(56,"Phone Number"),i.Wb(57,"span",12),i.Pc(58,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(59,"div",18),i.Rb(60,"input",21),i.Vb(),i.Vb(),i.Wb(61,"div",15),i.Wb(62,"div",10),i.Wb(63,"label",11),i.Pc(64,"Discount Margin %"),i.Wb(65,"span",12),i.Pc(66,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(67,"div",4),i.Rb(68,"input",22),i.Vb(),i.Wb(69,"div",10),i.Wb(70,"label",11),i.Pc(71,"Approved By"),i.Wb(72,"span",12),i.Pc(73,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(74,"div",18),i.Rb(75,"p-dropdown",23),i.Vb(),i.Vb(),i.Wb(76,"div",15),i.Wb(77,"div",10),i.Wb(78,"label",11),i.Pc(79,"Validity"),i.Vb(),i.Vb(),i.Wb(80,"div",4),i.Rb(81,"input",24),i.Vb(),i.Wb(82,"div",10),i.Wb(83,"label",11),i.Pc(84,"Until"),i.Vb(),i.Vb(),i.Wb(85,"div",18),i.Rb(86,"input",25),i.Vb(),i.Vb(),i.Wb(87,"div",15),i.Wb(88,"div",10),i.Wb(89,"label",11),i.Pc(90,"Status "),i.Wb(91,"span",12),i.Pc(92,"*"),i.Vb(),i.Vb(),i.Vb(),i.Wb(93,"div",4),i.Rb(94,"input",26),i.Vb(),i.Vb(),i.Wb(95,"div",27),i.Wb(96,"button",28),i.gc("click",function(){return e.resetForm()}),i.Pc(97," CANCEL "),i.Vb(),i.Wb(98,"button",29),i.Pc(99,"SAVE"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Db(21),i.Jc(i.uc(12,V)),i.rc("dropdown",!0)("inputStyle",i.uc(13,V)),i.Db(9),i.Jc(i.uc(14,V)),i.rc("options",e.cities)("ngModel",e.selectedCities),i.Db(45),i.Jc(i.uc(15,g)),i.rc("options",e.dummy_data)("required",!0))},directives:[a.a,d.h,c.z,c.q,c.r,r.a,p.a,c.p,c.s,l.a,s.a],styles:[".card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background:none;border:none}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}.card[_ngcontent-%COMP%]   .red-star[_ngcontent-%COMP%]{color:red}.card[_ngcontent-%COMP%]   .page-heading-icon[_ngcontent-%COMP%]{background:none;color:#000;border:none}.card[_ngcontent-%COMP%]   .page-heading-icon[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.card[_ngcontent-%COMP%]   .page-heading-icon[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.card[_ngcontent-%COMP%]   .page-heading-icon[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;font-size:1.5rem}.card[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline;justify-content:flex-start;line-height:35px;font-weight:700;border-radius:1px;margin-bottom:30px;padding:6px 6px 6px 15px;background-color:#f6f6f6}.card[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:11px}.card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:50px}.card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();var h=n("ZRSf");function P(t,e){1&t&&(i.Wb(0,"tr"),i.Wb(1,"th",46),i.Pc(2,"User Name"),i.Vb(),i.Wb(3,"th",47),i.Pc(4,"Status"),i.Vb(),i.Wb(5,"th",47),i.Pc(6,"Creaed Date"),i.Vb(),i.Wb(7,"th",48),i.Pc(8,"Action"),i.Vb(),i.Vb())}function x(t,e){}const f=function(){return["full_name","status","created_at"]},y=function(){return{showAll:"All"}},v=function(t){return[t,10,25,50]},w=[{path:"systemadmin",redirectTo:"/systemadmin",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t){this.router=t}ngOnInit(){}addSystemAdmin(){this.router.navigate(["/systemadmin/add-system-admin"])}todo(){}onSubmit(){}resetForm(){}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.c))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-system-admin"]],decls:89,vars:9,consts:[[1,"animated","fadeIn"],["name","systemAdminForm",3,"ngSubmit"],["systemAdminForm","ngForm"],[1,"col-md-12"],[1,"row","header","pt-3","pb-3"],[1,"col-lg-11","col-md-11","col-sm-11"],[1,"title","text-dark"],[1,"col-lg-1","col-md-1","col-sm-1"],["type","submit",1,"btn","btn-primary","btn-fill","pull-right","form-control",3,"click"],[1,"pi","pi-plus"],[1,"card-header","row",2,"background-color","#f6f6f6"],[1,"pi","pi-pencil"],[1,"ml-2"],[1,"row","mt-4"],[1,"col-le-12","col-md-12","col-sm-12"],["styleClass","p-datatable-gridlines","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","globalFilterFields","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"pt-4","pb-4"],[1,"table","table-bordered",2,"width","100%"],[2,"background-color","#f6f6f6"],["colspan","6",2,"padding","10px 20px"],["width","50%"],["width","10%",1,"text-center"],["type","checkbox","name","profile_all",1,"check-box"],["type","checkbox","name","profile_create",1,"check-box"],["type","checkbox","name","profile_edit",1,"check-box"],["type","checkbox","name","profile_delete",1,"check-box"],["type","checkbox","name","profile_approve",1,"check-box"],["type","checkbox","name","access_all",1,"check-box"],["type","checkbox","name","access_create",1,"check-box"],["type","checkbox","name","access_edit",1,"check-box"],["type","checkbox","name","access_delete",1,"check-box"],["type","checkbox","name","access_approve",1,"check-box"],["colspan","6"],["type","checkbox","name","reset_password",1,"check-box","mr-3"],["for","reset_password"],["type","checkbox","name","web_app",1,"check-box","mr-3"],["for","web_app"],["type","checkbox","name","mobile_app",1,"check-box","mr-3"],["for","mobile_app"],["align","center",1,"col-lg-12","submit-button","mt-5"],[1,"action-btn"],["type","button",1,"btn","btn-outline-primary","cancel-btn",3,"click"],["type","button",1,"btn","btn-primary","save-btn"],["width","40%"],["width","20%",1,"text-center"],["width","15%",1,"text-center"]],template:function(t,e){1&t&&(i.Wb(0,"div",0),i.Wb(1,"form",1,2),i.gc("ngSubmit",function(){return e.onSubmit()}),i.Wb(3,"div",3),i.Wb(4,"div",4),i.Wb(5,"div",5),i.Wb(6,"h3",6),i.Wb(7,"b"),i.Pc(8,"System Admin"),i.Vb(),i.Vb(),i.Vb(),i.Wb(9,"div",7),i.Wb(10,"button",8),i.gc("click",function(){return e.addSystemAdmin()}),i.Rb(11,"i",9),i.Vb(),i.Vb(),i.Vb(),i.Wb(12,"div",10),i.Rb(13,"i",11),i.Wb(14,"span",12),i.Wb(15,"b"),i.Pc(16,"System Admin Setup"),i.Vb(),i.Vb(),i.Vb(),i.Wb(17,"div",13),i.Wb(18,"div",14),i.Wb(19,"p-table",15,16),i.Nc(21,P,9,0,"ng-template",17),i.Nc(22,x,0,0,"ng-template",18),i.Vb(),i.Vb(),i.Vb(),i.Wb(23,"div",19),i.Wb(24,"table",20),i.Wb(25,"thead"),i.Wb(26,"tr",21),i.Wb(27,"th",22),i.Pc(28,"Admin Setup"),i.Vb(),i.Vb(),i.Vb(),i.Wb(29,"tbody"),i.Wb(30,"tr"),i.Rb(31,"td",23),i.Wb(32,"td",24),i.Pc(33,"All"),i.Vb(),i.Wb(34,"td",24),i.Pc(35,"Create"),i.Vb(),i.Wb(36,"td",24),i.Pc(37,"Edit"),i.Vb(),i.Wb(38,"td",24),i.Pc(39,"Delete"),i.Vb(),i.Wb(40,"td",24),i.Pc(41,"Approval"),i.Vb(),i.Vb(),i.Wb(42,"tr"),i.Wb(43,"td",23),i.Pc(44,"Admin Profile"),i.Vb(),i.Wb(45,"td",24),i.Rb(46,"input",25),i.Vb(),i.Wb(47,"td",24),i.Rb(48,"input",26),i.Vb(),i.Wb(49,"td",24),i.Rb(50,"input",27),i.Vb(),i.Wb(51,"td",24),i.Rb(52,"input",28),i.Vb(),i.Wb(53,"td",24),i.Rb(54,"input",29),i.Vb(),i.Vb(),i.Wb(55,"tr"),i.Wb(56,"td",23),i.Pc(57,"Admin Access"),i.Vb(),i.Wb(58,"td",24),i.Rb(59,"input",30),i.Vb(),i.Wb(60,"td",24),i.Rb(61,"input",31),i.Vb(),i.Wb(62,"td",24),i.Rb(63,"input",32),i.Vb(),i.Wb(64,"td",24),i.Rb(65,"input",33),i.Vb(),i.Wb(66,"td",24),i.Rb(67,"input",34),i.Vb(),i.Vb(),i.Wb(68,"tr"),i.Wb(69,"td",35),i.Rb(70,"input",36),i.Wb(71,"label",37),i.Pc(72,"Reset Password"),i.Vb(),i.Vb(),i.Vb(),i.Wb(73,"tr"),i.Wb(74,"td",35),i.Rb(75,"input",38),i.Wb(76,"label",39),i.Pc(77,"Web Application"),i.Vb(),i.Vb(),i.Vb(),i.Wb(78,"tr"),i.Wb(79,"td",35),i.Rb(80,"input",40),i.Wb(81,"label",41),i.Pc(82,"Mobile Application"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Wb(83,"div",42),i.Wb(84,"div",43),i.Wb(85,"button",44),i.gc("click",function(){return e.resetForm()}),i.Pc(86," CANCEL "),i.Vb(),i.Wb(87,"button",45),i.Pc(88,"SAVE"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Db(19),i.rc("globalFilterFields",i.uc(5,f))("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",i.vc(7,v,i.uc(6,y))))},directives:[c.z,c.q,c.r,h.f,d.h],styles:[".card-header[_ngcontent-%COMP%]{border:none}.check-box[_ngcontent-%COMP%]{width:20px;height:20px;cursor:pointer;background:#d7b1d7;border-radius:4px;box-shadow:inset 0 0 0 1px #0275d8}.action-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:50px}.action-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.action-btn[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{margin-right:10px}"]}),t})(),data:{title:"System Admin"}},{path:"add-system-admin",component:W}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({imports:[[o.g.forChild(w)],o.g]}),t})();var C=n("LqlI"),M=n("+yXi"),k=n("MY3+"),O=n("FjU+");let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({imports:[[b.c,_,c.l,r.b,p.b,a.c,C.b,M.b,l.b,s.b,O.b,c.v,h.g,k.b]]}),t})()}}]);