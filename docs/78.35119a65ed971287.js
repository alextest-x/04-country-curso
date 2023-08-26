"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[78],{78:(ne,_,s)=>{s.r(_),s.d(_,{CountriesModule:()=>g});var c=s(895),f=s(551),e=s(256),S=s(262),q=s(646),O=s(4),p=s(505),B=s(529);class u{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){!localStorage.getItem("cacheStore")||(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,S.K)(()=>(0,q.of)([])))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,O.U)(i=>i.length>0?i[0]:null),(0,S.K)(()=>(0,q.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,p.b)(i=>this.cacheStore.byCapital={term:t,countries:i}),(0,p.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,p.b)(i=>this.cacheStore.byCountries={term:t,countries:i}),(0,p.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,p.b)(i=>this.cacheStore.byRegion={region:t,countries:i}),(0,p.b)(()=>this.saveToLocalStorage()))}}u.\u0275fac=function(t){return new(t||u)(e.LFG(B.eN))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});class y{}y.\u0275fac=function(t){return new(t||y)},y.\u0275cmp=e.Xpm({type:y,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]});var P=s(579),F=s(727);class J extends F.w0{constructor(t,n){super()}schedule(t,n=0){return this}}const T={setInterval(o,t,...n){const{delegate:i}=T;return i?.setInterval?i.setInterval(o,t,...n):setInterval(o,t,...n)},clearInterval(o){const{delegate:t}=T;return(t?.clearInterval||clearInterval)(o)},delegate:void 0};var R=s(737);const U={now:()=>(U.delegate||Date).now(),delegate:void 0};class v{constructor(t,n=v.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,i){return new this.schedulerActionCtor(this,t).schedule(i,n)}}v.now=U.now;const M=new class V extends v{constructor(t,n=v.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let i;this._active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,i){for(;t=n.shift();)t.unsubscribe();throw i}}}(class N extends J{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var i;if(this.closed)return this;this.state=t;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,n)),this.pending=!0,this.delay=n,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(a,this.id,n),this}requestAsyncId(t,n,i=0){return T.setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,n,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return n;null!=n&&T.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,n);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r,i=!1;try{this.work(t)}catch(a){i=!0,r=a||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:i}=n;this.work=this.state=this.scheduler=null,this.pending=!1,(0,R.P)(i,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});var L=s(482),D=s(403);class h{constructor(){this.debouncer=new P.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function E(o,t=M){return(0,L.e)((n,i)=>{let r=null,a=null,A=null;const w=()=>{if(r){r.unsubscribe(),r=null;const m=a;a=null,i.next(m)}};function te(){const m=A+o,I=t.now();if(I<m)return r=this.schedule(void 0,m-I),void i.add(r);w()}n.subscribe((0,D.x)(i,m=>{a=m,A=t.now(),r||(r=t.schedule(te,o),i.add(r))},()=>{w(),i.complete()},void 0,()=>{a=r=null}))})}(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPress(t){this.debouncer.next(t)}}function Q(o,t){1&o&&(e.TgZ(0,"div",2),e._uU(1," No hay pa\xedses que mostrar\n"),e.qZA())}h.\u0275fac=function(t){return new(t||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"value","placeholder","keyup"],["txtInput",""]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(i);const a=e.MAs(1);return e.KtG(n.onKeyPress(a.value))}),e.qZA()}2&t&&e.Q6J("value",n.initialValue)("placeholder",n.placeholder)},encapsulation:2});const k=function(o){return["/countries/by",o]};function Y(o,t){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16,"Info"),e.qZA()()()),2&o){const n=t.$implicit,i=t.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.hij(" ",n.flag," "),e.xp6(2),e.Q6J("src",n.flags.svg,e.LSH)("alt",n.name.common),e.xp6(2),e.Oqu(n.name.common),e.xp6(2),e.Oqu(n.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,n.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,k,n.cca3))}}function $(o,t){if(1&o&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Icon"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblaci\xf3n"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,Y,17,12,"tr",4),e.qZA()()),2&o){const n=e.oxw();e.xp6(17),e.Q6J("ngForOf",n.countries)}}class l{constructor(){this.countries=[]}}function K(o,t){1&o&&e._UZ(0,"shared-loading-spinner")}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(t,n){if(1&t&&(e.YNc(0,Q,2,0,"div",0),e.YNc(1,$,18,1,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",0===n.countries.length)("ngIfElse",i)}},dependencies:[c.sg,c.O5,f.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]});class Z{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe(n=>{this.countries=n,this.isLoading=!1})}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(u))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(r){return n.searchByCapital(r)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,K,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",n.initialValue),e.xp6(4),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("countries",n.countries))},dependencies:[c.O5,y,h,l],encapsulation:2});class b{constructor(t){this.countriesService=t,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.countriesService.searchCountry(t).subscribe(n=>{this.countries=n})}}b.\u0275fac=function(t){return new(t||b)(e.Y36(u))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"initialValue","onDebounce"],[3,"countries"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(r){return n.searchByCountry(r)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr")(9,"countries-table",3),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",n.initialValue),e.xp6(4),e.Q6J("countries",n.countries))},dependencies:[h,l],encapsulation:2});const j=function(o){return{"btn-outline-primary":o}};function X(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){const a=e.CHM(n).$implicit,A=e.oxw();return e.KtG(A.searchByRegion(a))}),e._uU(1),e.qZA()}if(2&o){const n=t.$implicit,i=e.oxw();e.Q6J("ngClass",e.VKq(2,j,i.selectedRegion===n)),e.xp6(1),e.hij(" ",n," ")}}class C{constructor(t){this.countriesService=t,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.selectedRegion=t,this.countriesService.searchRegion(t).subscribe(n=>{this.countries=n})}}C.\u0275fac=function(t){return new(t||C)(e.Y36(u))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Regi\xf3n"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,X,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr")(9,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",n.regions),e.xp6(4),e.Q6J("countries",n.countries))},dependencies:[c.mk,c.sg,l],encapsulation:2});var z=s(900);function H(o,t){1&o&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function G(o,t){if(1&o&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()(),e._UZ(7,"hr"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",5)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",6),e.qZA(),e.TgZ(13,"div",7)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),e._uU(19,"Poblaci\xf3n:"),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",9)(23,"strong"),e._uU(24,"C\xf3digo:"),e.qZA(),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",10)(27,"div",7)(28,"h3"),e._uU(29,"Traducciones"),e.qZA(),e.TgZ(30,"div",11)(31,"span",12),e._uU(32),e.qZA(),e.TgZ(33,"span",12),e._uU(34),e.qZA(),e.TgZ(35,"span",12),e._uU(36),e.qZA(),e.TgZ(37,"span",12),e._uU(38),e.qZA(),e.TgZ(39,"span",12),e._uU(40),e.qZA(),e.TgZ(41,"span",12),e._uU(42),e.qZA(),e.TgZ(43,"span",12),e._uU(44),e.qZA(),e.TgZ(45,"span",12),e._uU(46),e.qZA(),e.TgZ(47,"span",12),e._uU(48),e.qZA(),e.TgZ(49,"span",12),e._uU(50),e.qZA()()()()()),2&o){const n=e.oxw();e.xp6(6),e.Oqu(n.country.name.common),e.xp6(6),e.Q6J("src",n.country.flags.svg,e.LSH)("alt",n.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(21,15,n.country.population)," "),e.xp6(5),e.hij(" ",n.country.cca3," "),e.xp6(7),e.Oqu(n.country.translations.ara.common),e.xp6(2),e.Oqu(n.country.translations.bre.common),e.xp6(2),e.Oqu(n.country.translations.ces.common),e.xp6(2),e.Oqu(n.country.translations.cym.common),e.xp6(2),e.Oqu(n.country.translations.deu.common),e.xp6(2),e.Oqu(n.country.translations.est.common),e.xp6(2),e.Oqu(n.country.translations.fin.common),e.xp6(2),e.Oqu(n.country.translations.ita.common),e.xp6(2),e.Oqu(n.country.translations.kor.common),e.xp6(2),e.Oqu(n.country.translations.per.common)}}class x{constructor(t,n,i){this.activatedRoute=t,this.router=n,this.countriesService=i}ngOnInit(){this.activatedRoute.params.pipe((0,z.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}x.\u0275fac=function(t){return new(t||x)(e.Y36(f.gz),e.Y36(f.F0),e.Y36(u))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,n){if(1&t&&(e.YNc(0,H,2,0,"ng-template",null,0,e.W1O),e.YNc(2,G,51,17,"div",1)),2&t){const i=e.MAs(1);e.xp6(2),e.Q6J("ngIf",n.country)("ngIfElse",i)}},dependencies:[c.O5,c.JJ],encapsulation:2});const W=[{path:"by-capital",component:Z},{path:"by-country",component:b},{path:"by-region",component:C},{path:"by/:id",component:x},{path:"**",redirectTo:"by-capital"}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[f.Bz.forChild(W),f.Bz]});var ee=s(466);class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[c.ez,d,ee.m]})}}]);