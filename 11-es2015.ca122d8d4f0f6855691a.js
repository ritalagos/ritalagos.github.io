(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RN7a:function(e,t,i){"use strict";i.r(t),i.d(t,"CategoriesModule",(function(){return p}));var r=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),a=i("/sur"),n=i("fXoL"),s=i("LazK");function b(e,t){1&e&&(n.Sb(0,"div",19),n.Sb(1,"div",20),n.Sb(2,"span",21),n.Bc(3,"Loading..."),n.Rb(),n.Rb(),n.Rb())}function l(e,t){if(1&e){const e=n.Tb();n.Sb(0,"tr"),n.Sb(1,"th",25),n.Bc(2),n.Rb(),n.Sb(3,"td"),n.Bc(4),n.Rb(),n.Sb(5,"td"),n.Bc(6),n.Rb(),n.Sb(7,"td"),n.Sb(8,"button",26),n.ec("click",(function(){n.tc(e);const i=t.$implicit;return n.gc(2).deleteCategorie(i)})),n.Ob(9,"i",27),n.Rb(),n.Sb(10,"button",28),n.ec("click",(function(){n.tc(e);const i=t.$implicit;return n.gc(2).updateCategorie(i)})),n.Ob(11,"i",29),n.Rb(),n.Rb(),n.Rb()}if(2&e){const e=t.$implicit,i=t.index;n.Ab(2),n.Cc(i+1),n.Ab(2),n.Cc(e.cod),n.Ab(2),n.Cc(e.descripcion)}}function d(e,t){if(1&e&&(n.Sb(0,"table",22),n.Sb(1,"thead"),n.Sb(2,"tr"),n.Sb(3,"th",23),n.Bc(4,"#"),n.Rb(),n.Sb(5,"th",23),n.Bc(6,"Codigo"),n.Rb(),n.Sb(7,"th",23),n.Bc(8,"Descripci\xf3n"),n.Rb(),n.Sb(9,"th",23),n.Bc(10,"#Tags"),n.Rb(),n.Rb(),n.Rb(),n.Sb(11,"tbody"),n.zc(12,l,12,3,"tr",24),n.Rb(),n.Rb()),2&e){const e=n.gc();n.Ab(12),n.lc("ngForOf",e.categories)}}const u=[{path:"",component:(()=>{class e{constructor(e,t){this.fb=e,this.categorieService=t,this.cargaCompleted=!0,this.sweetAlert=new a.a,this.crearFormulario()}ngOnInit(){this.allCategories()}crearFormulario(){this.formulario=this.fb.group({cod:["",o.n.required],descripcion:["",o.n.required]})}get codigoNoValido(){return this.validarCampos("cod")}get descripcionNoValido(){return this.validarCampos("descripcion")}validarCampos(e){return this.formulario.get(e).invalid&&this.formulario.get(e).touched}cargarFormulario(e){this.formulario.setValue({cod:e.cod,descripcion:e.descripcion}),this.idCategorie=e.key}limpiarFormulario(){this.formulario.reset({cod:"",descripcion:""}),this.idCategorie=null}allCategories(){this.cargaCompleted=!1,this.categorieService.getAllCategories().subscribe(e=>{this.categories=e,this.cargaCompleted=!0})}addCategorie(){if(this.formulario.invalid)return Object.values(this.formulario.controls).forEach(e=>{e.markAsTouched()});let e;this.sweetAlert.dialogAlertWait();const t=this.formulario.value;e=this.idCategorie?this.categorieService.updateCategorie(this.idCategorie,t):this.categorieService.addCategorie(t),this.showDialog(e,t.descripcion,this.idCategorie)}updateCategorie(e){this.cargarFormulario(e)}deleteCategorie(e){this.sweetAlert.dialogAlertQuestion(e.descripcion).then(t=>{if(t.value){let t;t=this.categorieService.deleteCategorie(e),this.showDialog(t,e.descripcion)}})}showDialog(e,t,i){e.then(e=>{(e||i)&&(this.sweetAlert.dialogAlertSuccess(t),this.limpiarFormulario())}).catch(e=>{e&&this.sweetAlert.dialogAlertError(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(o.b),n.Nb(s.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-categories"]],decls:26,vars:7,consts:[[1,"d-flex","justify-content-between","flex-wrap","flex-md-nowrap","align-items-center","pt-3","pb-2","mb-3","border-bottom"],[1,"h2"],[1,"btn-toolbar","mb-2","mb-md-0"],[1,"btn-group","mr-2"],["href","https://firebase.google.com/","target","_blanck",1,"alert","alert-warning"],[1,"text-muted"],[1,"p-2"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"col"],["type","text","formControlName","cod","name","cod","placeholder","Codigo",1,"form-control"],["type","text","formControlName","descripcion","name","descripcion","placeholder","Descripci\xf3n",1,"form-control"],["type","submit",1,"btn","btn-sm","btn-outline-secondary"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"linea"],["class","text-center",4,"ngIf"],["class","table table-striped",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border","text-success",2,"width","3rem","height","3rem"],[1,"sr-only"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-danger","mr-1","btn-cero",3,"click"],["aria-hidden","true",1,"fa","fa-window-close"],[1,"btn","btn-secondary","btn-cero",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-square"]],template:function(e,t){1&e&&(n.Sb(0,"div",0),n.Sb(1,"h3",1),n.Bc(2,"Categorias"),n.Rb(),n.Sb(3,"div",2),n.Sb(4,"div",3),n.Sb(5,"a",4),n.Bc(6,"Activar Escritura en Firebase "),n.Sb(7,"span",5),n.Bc(8,"(no olvide desactivar luego)"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(9,"div",6),n.Sb(10,"form",7),n.ec("ngSubmit",(function(){return t.addCategorie()})),n.Sb(11,"div",8),n.Sb(12,"div",9),n.Ob(13,"input",10),n.Rb(),n.Sb(14,"div",9),n.Ob(15,"input",11),n.Rb(),n.Sb(16,"button",12),n.Bc(17,"Agregar"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(18,"div"),n.Sb(19,"div",13),n.Sb(20,"div",14),n.Sb(21,"h5",15),n.Bc(22,"Lista"),n.Rb(),n.Ob(23,"hr",16),n.zc(24,b,4,0,"div",17),n.zc(25,d,13,1,"table",18),n.Rb(),n.Rb(),n.Rb()),2&e&&(n.Ab(10),n.lc("formGroup",t.formulario),n.Ab(3),n.Fb("is-invalid",t.codigoNoValido),n.Ab(2),n.Fb("is-invalid",t.descripcionNoValido),n.Ab(9),n.lc("ngIf",!t.cargaCompleted),n.Ab(1),n.lc("ngIf",t.cargaCompleted))},directives:[o.p,o.i,o.d,o.a,o.h,o.c,r.k,r.j],styles:[".btn-cero[_ngcontent-%COMP%]{padding:0 5px}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(u)],c.e]}),e})(),p=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[r.c,g,o.k]]}),e})()}}]);