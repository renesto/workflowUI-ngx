(self.webpackChunkworkflow_ui_ngx=self.webpackChunkworkflow_ui_ngx||[]).push([[152],{5152:function(t,i,e){"use strict";e.r(i),e.d(i,{WorklistModule:function(){return oi}});var n,o=e(2057),s=e(4751),r=e(7208),l=e(5629),a=e(6852),c=e(3532),p=e(9451),u=Array.isArray,d="object"==typeof global&&global&&global.Object===Object&&global,f="object"==typeof self&&self&&self.Object===Object&&self,h=d||f||Function("return this")(),g=h.Symbol,_=Object.prototype,m=_.hasOwnProperty,b=_.toString,y=g?g.toStringTag:void 0,A=Object.prototype.toString,T=g?g.toStringTag:void 0,v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?function(t){var i=m.call(t,y),e=t[y];try{t[y]=void 0;var n=!0}catch(s){}var o=b.call(t);return n&&(i?t[y]=e:delete t[y]),o}(t):function(t){return A.call(t)}(t)},x=function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)},k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/,Z=function(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)},S=h["__core-js_shared__"],O=(n=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",L=Function.prototype.toString,I=/^\[object .+?Constructor\]$/,q=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=function(t,i){var e=function(t,i){return null==t?void 0:t[i]}(t,i);return function(t){return!(!Z(t)||(i=t,O&&O in i))&&(function(t){if(!Z(t))return!1;var i=v(t);return"[object Function]"==i||"[object GeneratorFunction]"==i||"[object AsyncFunction]"==i||"[object Proxy]"==i}(t)?q:I).test(function(t){if(null!=t){try{return L.call(t)}catch(i){}try{return t+""}catch(i){}}return""}(t));var i}(e)?e:void 0},C=E(Object,"create"),R=Object.prototype.hasOwnProperty,$=Object.prototype.hasOwnProperty;function M(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}M.prototype.clear=function(){this.__data__=C?C(null):{},this.size=0},M.prototype.delete=function(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i},M.prototype.get=function(t){var i=this.__data__;if(C){var e=i[t];return"__lodash_hash_undefined__"===e?void 0:e}return R.call(i,t)?i[t]:void 0},M.prototype.has=function(t){var i=this.__data__;return C?void 0!==i[t]:$.call(i,t)},M.prototype.set=function(t,i){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=C&&void 0===i?"__lodash_hash_undefined__":i,this};var J=M,j=function(t,i){for(var e=t.length;e--;)if((n=t[e][0])===(o=i)||n!=n&&o!=o)return e;var n,o;return-1},N=Array.prototype.splice;function F(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}F.prototype.clear=function(){this.__data__=[],this.size=0},F.prototype.delete=function(t){var i=this.__data__,e=j(i,t);return!(e<0||(e==i.length-1?i.pop():N.call(i,e,1),--this.size,0))},F.prototype.get=function(t){var i=this.__data__,e=j(i,t);return e<0?void 0:i[e][1]},F.prototype.has=function(t){return j(this.__data__,t)>-1},F.prototype.set=function(t,i){var e=this.__data__,n=j(e,t);return n<0?(++this.size,e.push([t,i])):e[n][1]=i,this};var U=F,Q=E(h,"Map"),Y=function(t,i){var e,n,o=t.__data__;return("string"==(n=typeof(e=i))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof i?"string":"hash"]:o.map};function P(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}P.prototype.clear=function(){this.size=0,this.__data__={hash:new J,map:new(Q||U),string:new J}},P.prototype.delete=function(t){var i=Y(this,t).delete(t);return this.size-=i?1:0,i},P.prototype.get=function(t){return Y(this,t).get(t)},P.prototype.has=function(t){return Y(this,t).has(t)},P.prototype.set=function(t,i){var e=Y(this,t),n=e.size;return e.set(t,i),this.size+=e.size==n?0:1,this};var D=P;function H(t,i){if("function"!=typeof t||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=i?i.apply(this,n):n[0],s=e.cache;if(s.has(o))return s.get(o);var r=t.apply(this,n);return e.cache=s.set(o,r)||s,r};return e.cache=new(H.Cache||D),e}H.Cache=D;var B,K,z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,W=/\\(\\)?/g,X=(B=H(function(t){var i=[];return 46===t.charCodeAt(0)&&i.push(""),t.replace(z,function(t,e,n,o){i.push(n?o.replace(W,"$1"):e||t)}),i},function(t){return 500===K.size&&K.clear(),t}),K=B.cache,B),G=g?g.prototype:void 0,V=G?G.toString:void 0,tt=function t(i){if("string"==typeof i)return i;if(u(i))return function(t,i){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=i(t[e],e,t);return o}(i,t)+"";if(x(i))return V?V.call(i):"";var e=i+"";return"0"==e&&1/i==-1/0?"-0":e},it=function(t,i){return u(t)?t:function(t,i){if(u(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!x(t))||w.test(t)||!k.test(t)||null!=i&&t in Object(i)}(t,i)?[t]:X(function(t){return null==t?"":tt(t)}(t))},et=function(t){if("string"==typeof t||x(t))return t;var i=t+"";return"0"==i&&1/t==-1/0?"-0":i},nt=function(t,i,e){var n=null==t?void 0:function(t,i){for(var e=0,n=(i=it(i,t)).length;null!=t&&e<n;)t=t[et(i[e++])];return e&&e==n?t:void 0}(t,i);return void 0===n?e:n},ot=e(5554),st=e(5324),rt=e(1721),lt=e(6782),at=e(1989);let ct=(()=>{class t extends st.H{constructor(t,i){super(),this._config=t,this._ref=i,this._authService=rt.M.injector.get(ot.e),this._fb=rt.M.injector.get(s.qu),this._authService.isLoggedIn$$.pipe((0,lt.R)(this.ngUnsubscribe$)).subscribe(t=>{t||this._ref.close()})}}return t.\u0275fac=function(i){return new(i||t)(at.Y36(p.S),at.Y36(p.E7))},t.\u0275cmp=at.Xpm({type:t,selectors:[["app-modal-base"]],features:[at.qOj],decls:1,vars:0,template:function(t,i){1&t&&at._uU(0,"no template")},encapsulation:2}),t})();var pt=e(3013),ut=e(900),dt=e(8497);let ft=(()=>{class t{constructor(t){this._http=t}getTasks(){return this._http.get(`${ut.X.REST_API_URL}/tasks/${ut.X.TASKS_LIMIT}`)}getTask(t){return this._http.get(`${ut.X.REST_API_URL}/task/${t}`)}saveTask(t){return this._http.post(`${ut.X.REST_API_URL}/task/${t.id}`,t)}}return t.\u0275fac=function(i){return new(i||t)(at.LFG(dt.eN))},t.\u0275prov=at.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var ht=e(4656),gt=e(4207),_t=e(9309),mt=e(154),bt=e(369),yt=e(3928);let At=(()=>{class t{constructor(){this.relAttr="",this.targetAttr="",this.hrefAttr="",this.href=""}ngOnChanges(){this.hrefAttr=this.href,this.isLinkAbsolute()&&(this.relAttr="noopener noreferrer",this.targetAttr="_blank")}isLinkAbsolute(){return this.href.includes("://")}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=at.lG2({type:t,selectors:[["","handleLink",""]],hostVars:3,hostBindings:function(t,i){2&t&&at.uIk("rel",i.relAttr)("target",i.targetAttr)("href",i.hrefAttr,at.P3R)},inputs:{href:"href"},features:[at.TTD]}),t})(),Tt=(()=>{class t{constructor(){}transform(t,i){return nt(t,i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=at.Yjl({name:"get",type:t,pure:!0}),t})();function vt(t,i){if(1&t&&(at.TgZ(0,"span",12),at.ALo(1,"translate"),at._UZ(2,"i",13),at.TgZ(3,"span",14),at._uU(4),at.ALo(5,"date"),at.qZA(),at.qZA()),2&t){const t=at.oxw();at.Q6J("title",at.lcZ(1,2,"TASK_MODAL.TIME_CREATED")),at.xp6(4),at.hij(" ",at.xi3(5,4,null==t.task?null:t.task.timeCreated,"dd.MM.yyyy HH:mm:ss")," ")}}function xt(t,i){if(1&t&&(at.TgZ(0,"span",12),at.ALo(1,"translate"),at._UZ(2,"i",15),at.TgZ(3,"span",14),at._uU(4),at.qZA(),at.qZA()),2&t){const t=at.oxw();at.Q6J("title",at.lcZ(1,2,"TASK_MODAL.ROLE")),at.xp6(4),at.hij(" ",null==t.task?null:t.task.role," ")}}function kt(t,i){1&t&&at._UZ(0,"i",21)}function wt(t,i){1&t&&at._UZ(0,"i",22)}function Zt(t,i){if(1&t&&(at.TgZ(0,"div",16),at.ALo(1,"translate"),at.TgZ(2,"span",17),at._uU(3),at.ALo(4,"translate"),at.qZA(),at.TgZ(5,"span",18),at.YNc(6,kt,1,0,"i",19),at.YNc(7,wt,1,0,"i",20),at._uU(8),at.qZA(),at.qZA()),2&t){const t=at.oxw();at.Q6J("title",at.lcZ(1,15,"TASK_MODAL.PRIORITY")),at.xp6(3),at.hij(" ",at.lcZ(4,17,"TASK_MODAL.PRIORITY")," "),at.xp6(2),at.ekj("is-danger",t.task&&1===t.task.priority)("is-warning",t.task&&2===t.task.priority)("is-success",t.task&&3===t.task.priority)("is-primary",t.task&&4===t.task.priority)("is-info",t.task&&t.task.priority<4),at.xp6(1),at.Q6J("ngIf",(null==t.task?null:t.task.priority)<=3),at.xp6(1),at.Q6J("ngIf",(null==t.task?null:t.task.priority)>3),at.xp6(1),at.hij(" ",null==t.task?null:t.task.priority," ")}}function St(t,i){if(1&t&&(at.TgZ(0,"div",3),at._UZ(1,"markdown",23),at.qZA()),2&t){const t=at.oxw();at.xp6(1),at.Q6J("data",null==t.task?null:t.task.message)}}function Ot(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"div",27),at.TgZ(1,"label",28),at._uU(2),at.qZA(),at.TgZ(3,"input",29),at.NdJ("ngModelChange",function(i){at.CHM(t);const e=at.oxw().$implicit,n=at.oxw();return(null==n.task?null:n.task.formFields)[e.key]=i}),at.qZA(),at.qZA()}if(2&t){const t=at.oxw().$implicit,i=at.oxw();at.xp6(1),at.Q6J("for",t.key),at.xp6(1),at.Oqu(t.key),at.xp6(1),at.Q6J("id",t.key)("ngModel",null==i.task?null:i.task.formFields[t.key])}}function Lt(t,i){if(1&t&&(at.TgZ(0,"div"),at.TgZ(1,"label",30),at._uU(2),at.qZA(),at.TgZ(3,"a",31),at._uU(4),at.qZA(),at.qZA()),2&t){const t=at.oxw().$implicit;at.xp6(1),at.Q6J("for",t.key),at.xp6(1),at.hij(" ",t.key,": "),at.xp6(1),at.Q6J("href",t.value,at.LSH),at.xp6(1),at.Oqu(t.value)}}function It(t,i){if(1&t&&(at.TgZ(0,"div"),at.TgZ(1,"label",28),at._uU(2),at.qZA(),at.TgZ(3,"a",31),at.TgZ(4,"div",32),at._UZ(5,"img",33),at.qZA(),at.qZA(),at.qZA()),2&t){const t=at.oxw().$implicit;at.xp6(1),at.Q6J("for",t.key),at.xp6(1),at.hij(" ",t.key," "),at.xp6(1),at.Q6J("href",t.value,at.LSH),at.xp6(2),at.Q6J("src",t.value,at.LSH)}}const qt=function(){return["link","img"]},Et=function(){return["link"]},Ct=function(){return["img"]};function Rt(t,i){if(1&t&&(at.TgZ(0,"div",24),at.YNc(1,Ot,4,4,"div",25),at.ALo(2,"get"),at.YNc(3,Lt,5,4,"div",26),at.ALo(4,"get"),at.YNc(5,It,6,4,"div",26),at.ALo(6,"get"),at.qZA()),2&t){const t=i.$implicit,e=at.oxw();at.Q6J("hidden","$$$Handler"===t.key),at.xp6(1),at.Q6J("ngIf",!at.DdM(13,qt).includes(at.xi3(2,4,null==e.formFields?null:e.formFields.$$$Handler,t.key))),at.xp6(2),at.Q6J("ngIf",at.DdM(14,Et).includes(at.xi3(4,7,null==e.formFields?null:e.formFields.$$$Handler,t.key))),at.xp6(2),at.Q6J("ngIf",at.DdM(15,Ct).includes(at.xi3(6,10,null==e.formFields?null:e.formFields.$$$Handler,t.key)))}}function $t(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"button",34),at.NdJ("throttleClick",function(){const i=at.CHM(t).$implicit;return at.oxw().performAction(i)}),at.qZA()}if(2&t){const t=i.$implicit,e=at.oxw();at.Q6J("disabled",e.loading)("label",t)}}let Mt=(()=>{class t extends ct{constructor(t,i,e,n,o,s){super(t,o),this._config=t,this._el=i,this._i18n=e,this._messageService=n,this._ref=o,this._worklistService=s,this.formFields=null,this.loading=!0,this.placeholder="assets/images/placeholder.jpg",this.task=null}ngOnInit(){this.loading=!0,this._worklistService.getTask(this._config.data.id).subscribe(t=>{this.task=t,this.formFields=Object.assign({},t.formFields),this.loading=!1},t=>{const i=nt(t,"error.summary","");this._messageService.add({severity:"error",summary:this._i18n.instant("TASK_MODAL.LOADING_ERROR"),detail:i}),console.error(t),this.closeModal(),this.loading=!1})}getBlockableElement(){return this._el.nativeElement.parentElement.parentElement}performAction(t){this.loading=!0;const i=Object.assign({},this.task);i.action=t,i.formFields&&i.formFields.$$$Handler&&(i.formFields.$$$Handler=JSON.stringify(i.formFields.$$$Handler)),this._worklistService.saveTask(i).subscribe(()=>{setTimeout(()=>{this._messageService.add("$Save"!==t?{severity:"success",summary:this._i18n.instant("TASK_MODAL.SUCCESS_MESSAGE"),detail:this._i18n.instant("TASK_MODAL.ACTION_COMPLETE",{action:t})}:{severity:"success",summary:this._i18n.instant("TASK_MODAL.SAVING_COMPLETE")}),this.closeModal(t),this.loading=!1},300)},t=>{const i=nt(t,"error.summary","");this._messageService.add({severity:"error",summary:this._i18n.instant("TASK_MODAL.SAVING_ERROR"),detail:i}),console.error(t),this.loading=!1})}closeModal(t=""){this._ref.close(t)}}return t.\u0275fac=function(i){return new(i||t)(at.Y36(p.S),at.Y36(at.SBq),at.Y36(l.sK),at.Y36(pt.ez),at.Y36(p.E7),at.Y36(ft))},t.\u0275cmp=at.Xpm({type:t,selectors:[["app-task-modal"]],features:[at.qOj],decls:16,vars:18,consts:[[3,"target","blocked"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],[1,"columns","is-multiline","p-dialog-content",2,"max-height","60vh","overflow","auto","padding","0"],[1,"column","is-full"],["class","details-header","style","display: inline-block; margin-right: 32px",3,"title",4,"ngIf"],["style","display: inline-flex;","class","details-header tags has-addons",3,"title",4,"ngIf"],["class","column is-full",4,"ngIf"],["class","column is-full",3,"hidden",4,"ngFor","ngForOf"],[1,"p-dialog-footer",2,"padding","0","text-align","right"],["pButton","","pRipple","","style","margin-right: 8px","class","is-fullwidth-mobile",3,"disabled","label","throttleClick",4,"ngFor","ngForOf"],["pButton","","pRipple","","icon","pi pi-save",1,"button","is-success","is-fullwidth-mobile",2,"margin-right","8px",3,"disabled","label","throttleClick"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-secondary","is-fullwidth-mobile",3,"disabled","label","click"],[1,"details-header",2,"display","inline-block","margin-right","32px",3,"title"],[1,"pi","pi-clock",2,"font-weight","bold","vertical-align","middle","margin-right","4px"],[2,"font-size","13px","font-weight","600"],[1,"pi","pi-user",2,"font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"details-header","tags","has-addons",2,"display","inline-flex",3,"title"],[1,"tag","is-light",2,"margin-bottom","0","font-size","12px"],[1,"tag",2,"margin-bottom","0","font-size","12px"],["class","pi pi-arrow-up","style","font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px",4,"ngIf"],["class","pi pi-arrow-down","style","font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px",4,"ngIf"],[1,"pi","pi-arrow-up",2,"font-size","9px","font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"pi","pi-arrow-down",2,"font-size","9px","font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"markdown-body",3,"data"],[1,"column","is-full",3,"hidden"],["class","field",4,"ngIf"],[4,"ngIf"],[1,"field"],[1,"label",3,"for"],["type","text","pInputText","",2,"width","100%",3,"id","ngModel","ngModelChange"],[1,"label",2,"display","inline",3,"for"],["handleLink","",3,"href"],[1,"img-placeholder"],[2,"height","100px",3,"src"],["pButton","","pRipple","",1,"is-fullwidth-mobile",2,"margin-right","8px",3,"disabled","label","throttleClick"]],template:function(t,i){1&t&&(at.TgZ(0,"p-blockUI",0),at._UZ(1,"i",1),at.qZA(),at.TgZ(2,"div",2),at.TgZ(3,"div",3),at.YNc(4,vt,6,7,"span",4),at.YNc(5,xt,5,4,"span",4),at.YNc(6,Zt,9,19,"div",5),at.qZA(),at.YNc(7,St,2,1,"div",6),at.YNc(8,Rt,7,16,"div",7),at.ALo(9,"keyvalue"),at.qZA(),at.TgZ(10,"div",8),at.YNc(11,$t,1,2,"button",9),at.TgZ(12,"button",10),at.NdJ("throttleClick",function(){return i.performAction("$Save")}),at.ALo(13,"translate"),at.qZA(),at.TgZ(14,"button",11),at.NdJ("click",function(){return i.closeModal()}),at.ALo(15,"translate"),at.qZA(),at.qZA()),2&t&&(at.Q6J("target",i)("blocked",i.loading),at.xp6(4),at.Q6J("ngIf",null==i.task?null:i.task.timeCreated),at.xp6(1),at.Q6J("ngIf",null==i.task?null:i.task.role),at.xp6(1),at.Q6J("ngIf",null==i.task?null:i.task.priority),at.xp6(1),at.Q6J("ngIf",null==i.task?null:i.task.message),at.xp6(1),at.Q6J("ngForOf",at.lcZ(9,12,i.formFields)),at.xp6(3),at.Q6J("ngForOf",null==i.task||null==i.task.actions?null:i.task.actions.split(",")),at.xp6(1),at.Q6J("disabled",i.loading)("label",at.lcZ(13,14,"TASK_MODAL.SAVE_BUTTON")),at.xp6(2),at.Q6J("disabled",i.loading)("label",at.lcZ(15,16,"TASK_MODAL.CLOSE_BUTTON")))},directives:[ht.b,o.O5,o.sg,gt.Hq,_t.H,mt.j,bt.lF,s.Fj,yt.o,s.JJ,s.On,At],pipes:[o.Nd,l.X$,o.uU,Tt],styles:[".priority-top[_ngcontent-%COMP%]{color:#e54343}.priority-2nd[_ngcontent-%COMP%]{color:#e8912f}.priority-3rd[_ngcontent-%COMP%]{color:#f5da2c}.priority-4th[_ngcontent-%COMP%]{color:#268226}.priority-low[_ngcontent-%COMP%]{color:#2088cd}.img-placeholder[_ngcontent-%COMP%]{height:100px;background-repeat:no-repeat;background-size:contain;background-image:url(placeholder.26c5501417f0a21d2c61.gif)}.details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:8px}@media screen and (min-width: 769px){.details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}}"]}),t})();var Jt=e(7965),jt=e(6052);function Nt(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"div",6),at._uU(1),at.ALo(2,"translate"),at.TgZ(3,"span",7),at._UZ(4,"i",8),at.TgZ(5,"input",9),at.NdJ("input",function(i){return at.CHM(t),at.oxw(),at.MAs(1).filterGlobal(i.target.value,"contains")}),at.ALo(6,"translate"),at.qZA(),at.qZA(),at.TgZ(7,"button",10),at.NdJ("throttleClick",function(){return at.CHM(t),at.oxw().onRefresh()}),at.ALo(8,"translate"),at.qZA(),at.qZA()}2&t&&(at.xp6(1),at.hij(" ",at.lcZ(2,3,"WORKLIST.TABLE_TITLE")," "),at.xp6(4),at.Q6J("placeholder",at.lcZ(6,5,"WORKLIST.SEARCH_PLACEHOLDER")),at.xp6(2),at.Q6J("label",at.lcZ(8,7,"WORKLIST.REFRESH_BUTTON")))}function Ft(t,i){if(1&t&&at._UZ(0,"p-sortIcon",16),2&t){const t=at.oxw().$implicit;at.Q6J("field",t.field)}}function Ut(t,i){if(1&t&&(at.TgZ(0,"th",14),at._uU(1),at.YNc(2,Ft,1,1,"p-sortIcon",15),at.qZA()),2&t){const t=i.$implicit;at.Udp("width",t.width),at.Q6J("pSortableColumn",t.isSortable?t.field:null),at.xp6(1),at.hij(" ",t.header," "),at.xp6(1),at.Q6J("ngIf",t.isSortable)}}function Qt(t,i){if(1&t&&(at.TgZ(0,"tr"),at.TgZ(1,"th",11),at._uU(2,"#"),at.qZA(),at.YNc(3,Ut,3,5,"th",12),at._UZ(4,"th",13),at.qZA()),2&t){const t=at.oxw();at.xp6(3),at.Q6J("ngForOf",t.cols)}}function Yt(t,i){1&t&&(at.TgZ(0,"span",27),at._uU(1,"New"),at.qZA())}function Pt(t,i){if(1&t&&(at.TgZ(0,"span"),at.YNc(1,Yt,2,0,"span",26),at.qZA()),2&t){const t=at.oxw().$implicit,i=at.oxw().$implicit;at.xp6(1),at.Q6J("ngIf",i[t.field])}}function Dt(t,i){if(1&t&&(at.TgZ(0,"span"),at._uU(1),at.ALo(2,"date"),at.qZA()),2&t){const t=at.oxw().$implicit,i=at.oxw().$implicit;at.xp6(1),at.hij(" ",at.xi3(2,1,i[t.field],"dd.MM.yyyy HH:mm:ss")," ")}}function Ht(t,i){if(1&t&&(at.TgZ(0,"span"),at._uU(1),at.qZA()),2&t){const t=at.oxw().$implicit,i=at.oxw().$implicit;at.xp6(1),at.hij(" ",i[t.field]," ")}}function Bt(t,i){if(1&t&&(at.TgZ(0,"td",23),at.YNc(1,Pt,2,1,"span",24),at.YNc(2,Dt,3,4,"span",24),at.YNc(3,Ht,2,1,"span",25),at.qZA()),2&t){const t=i.$implicit;at.Udp("width",t.width)("text-align",t.align),at.ekj("tagged-cell","isNew"===t.field),at.Q6J("ngSwitch",t.field),at.xp6(1),at.Q6J("ngSwitchCase","isNew"),at.xp6(1),at.Q6J("ngSwitchCase","timeCreated")}}function Kt(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"button",28),at.NdJ("click",function(){at.CHM(t);const i=at.oxw().$implicit;return at.oxw().onAccept(i)}),at.ALo(1,"translate"),at.qZA()}2&t&&at.Q6J("title",at.lcZ(1,1,"WORKLIST.ACCEPT_BUTTON"))}function zt(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"button",29),at.NdJ("click",function(){at.CHM(t);const i=at.oxw().$implicit;return at.oxw().onDetails(i)}),at.ALo(1,"translate"),at.qZA()}2&t&&at.Q6J("title",at.lcZ(1,1,"WORKLIST.DETAILS_BUTTON"))}function Wt(t,i){if(1&t){const t=at.EpF();at.TgZ(0,"button",30),at.NdJ("click",function(){at.CHM(t);const i=at.oxw().$implicit;return at.oxw().onRelinquish(i)}),at.ALo(1,"translate"),at._UZ(2,"i",31),at.qZA()}2&t&&at.Q6J("title",at.lcZ(1,1,"WORKLIST.RELINQUISH_BUTTON"))}function Xt(t,i){if(1&t&&(at.TgZ(0,"tr"),at.TgZ(1,"td",17),at._uU(2),at.qZA(),at.YNc(3,Bt,4,9,"td",18),at.TgZ(4,"td",19),at.YNc(5,Kt,2,3,"button",20),at.YNc(6,zt,2,3,"button",21),at.YNc(7,Wt,3,3,"button",22),at.qZA(),at.qZA()),2&t){const t=i.$implicit,e=i.rowIndex,n=at.oxw();at.xp6(2),at.Oqu(e+1),at.xp6(1),at.Q6J("ngForOf",n.cols),at.xp6(2),at.Q6J("ngIf",t.isNew),at.xp6(1),at.Q6J("ngIf",!t.isNew),at.xp6(1),at.Q6J("ngIf",!t.isNew)}}function Gt(t,i){if(1&t&&(at.TgZ(0,"div",32),at._uU(1),at.ALo(2,"translate"),at.qZA()),2&t){at.oxw();const t=at.MAs(1);at.xp6(1),at.AsE("",at.lcZ(2,2,"WORKLIST.TOTAL"),": ",t.totalRecords,"")}}const Vt=function(){return[10,25,50,100]},ti=function(){return{minWidth:"1024px",width:"100%"}};let ii=(()=>{class t{constructor(t){this._i18n=t,this.items=[],this.loading=!1,this.accept=new at.vpe,this.details=new at.vpe,this.refresh=new at.vpe,this.relinquish=new at.vpe,this.cols=[{field:"isNew",header:"",width:"60px",align:"center",isSortable:!0},{field:"priority",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.PRIORITY"),width:"130px",align:"right",isSortable:!0},{field:"subject",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.SUBJECT"),isSortable:!0},{field:"message",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.MESSAGE"),isSortable:!0},{field:"role",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.ROLE"),isSortable:!0},{field:"timeCreated",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.TIME_CREATED"),width:"160px",align:"center",isSortable:!0}],this.filterCols=["priority","subject","message","role","timeCreated"]}onAccept(t){this.accept.emit(t)}onRelinquish(t){this.relinquish.emit(t)}onDetails(t){this.details.emit(t)}onRefresh(){this.refresh.emit()}}return t.\u0275fac=function(i){return new(i||t)(at.Y36(l.sK))},t.\u0275cmp=at.Xpm({type:t,selectors:[["app-tasks-table"]],inputs:{items:"items",loading:"loading"},outputs:{accept:"accept",details:"details",refresh:"refresh",relinquish:"relinquish"},decls:6,vars:11,consts:[["dataKey","id","sortField","timeCreated","styleClass","p-datatable-sm p-datatable-gridlines",3,"loading","globalFilterFields","paginator","rows","rowsPerPageOptions","value","sortOrder","tableStyle","responsiveLayout"],["table",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],[1,"table-header"],[1,"p-input-icon-left",2,"margin-left","16px","width","40%"],[1,"pi","pi-search"],["pInputText","","type","text",2,"width","100%",3,"placeholder","input"],["pButton","","pRipple","","icon","pi pi-refresh",1,"is-pulled-right","no-label-mobile",3,"label","throttleClick"],[2,"width","60px"],[3,"width","pSortableColumn",4,"ngFor","ngForOf"],[2,"width","85px"],[3,"pSortableColumn"],[3,"field",4,"ngIf"],[3,"field"],[2,"width","60px","text-align","right"],[3,"width","text-align","tagged-cell","ngSwitch",4,"ngFor","ngForOf"],[1,"button-cell",2,"width","85px","vertical-align","middle"],["type","button","pButton","","pRipple","","icon","pi pi-check","iconPos","left","class","button is-success",3,"title","click",4,"ngIf"],["type","button","pButton","","pRipple","","icon","pi pi-search","iconPos","left","style","margin-right: 8px",3,"title","click",4,"ngIf"],["type","button","pButton","","pRipple","","icon","pi pi-minus-circle","iconPos","left","class","p-button-danger",3,"title","click",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","tag is-info is-light",4,"ngIf"],[1,"tag","is-info","is-light"],["type","button","pButton","","pRipple","","icon","pi pi-check","iconPos","left",1,"button","is-success",3,"title","click"],["type","button","pButton","","pRipple","","icon","pi pi-search","iconPos","left",2,"margin-right","8px",3,"title","click"],["type","button","pButton","","pRipple","","icon","pi pi-minus-circle","iconPos","left",1,"p-button-danger",3,"title","click"],[1,"fa","fa-copy"],[1,"total"]],template:function(t,i){1&t&&(at.TgZ(0,"p-table",0,1),at.YNc(2,Nt,9,9,"ng-template",2),at.YNc(3,Qt,5,1,"ng-template",3),at.YNc(4,Xt,8,5,"ng-template",4),at.YNc(5,Gt,3,4,"ng-template",5),at.qZA()),2&t&&at.Q6J("loading",i.loading)("globalFilterFields",i.filterCols)("paginator",!0)("rows",25)("rowsPerPageOptions",at.DdM(9,Vt))("value",i.items)("sortOrder",-1)("tableStyle",at.DdM(10,ti))("responsiveLayout","scroll")},directives:[jt.iA,pt.jx,yt.o,gt.Hq,_t.H,mt.j,o.sg,jt.lQ,o.O5,jt.fz,o.RF,o.n9,o.ED],pipes:[l.X$,o.uU],styles:[".p-datatable-scrollable-header-box{padding-right:unset!important}  .p-datatable-virtual-scrollable-body{overflow-y:overlay}"],changeDetection:0}),t})();const ei=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,i,e){this._dialogService=t,this._i18n=i,this._worklistService=e,this.loading=!0,this.tasks=[]}ngOnInit(){this.loadTasks()}loadTasks(){this.loading=!0,this._worklistService.getTasks().subscribe(t=>{this.tasks=t,this.loading=!1},()=>{this.tasks=[],this.loading=!1})}acceptTask(t){t=Object.assign(Object.assign({},t),{action:"$Accept",formFields:{}}),this._worklistService.saveTask(t).subscribe(()=>this.loadTasks())}relinquishTask(t){t=Object.assign(Object.assign({},t),{action:"$Relinquish",formFields:{}}),this._worklistService.saveTask(t).subscribe(()=>this.loadTasks())}showTaskDetails(t){this._dialogService.open(Mt,{contentStyle:{overflow:"hidden"},data:{id:t.id},header:t.subject||this._i18n.instant("TASK_MODAL.TITLE"),dismissableMask:!1,transitionOptions:"350ms cubic-bezier(0.25, 0.8, 0.25, 1)",modal:!0,style:{"max-width":"1200px"},styleClass:"details-modal"}).onClose.subscribe(t=>t?this.loadTasks():null)}}return t.\u0275fac=function(i){return new(i||t)(at.Y36(p.xA),at.Y36(l.sK),at.Y36(ft))},t.\u0275cmp=at.Xpm({type:t,selectors:[["app-worklist-container"]],features:[at._Bn([p.xA])],decls:5,vars:2,consts:[[1,"hero","fullheight-with-navbar","main-bg"],["position","top-right"],[1,"container","is-fluid",2,"padding-top","32px","padding-bottom","32px"],[1,"card","border-rounded",2,"padding","16px","overflow","auto"],[3,"loading","items","refresh","accept","relinquish","details"]],template:function(t,i){1&t&&(at.TgZ(0,"div",0),at._UZ(1,"p-toast",1),at.TgZ(2,"div",2),at.TgZ(3,"div",3),at.TgZ(4,"app-tasks-table",4),at.NdJ("refresh",function(){return i.loadTasks()})("accept",function(t){return i.acceptTask(t)})("relinquish",function(t){return i.relinquishTask(t)})("details",function(t){return i.showTaskDetails(t)}),at.qZA(),at.qZA(),at.qZA(),at.qZA()),2&t&&(at.xp6(4),at.Q6J("loading",i.loading)("items",i.tasks))},directives:[Jt.FN,ii],styles:[""]}),t})()}];let ni=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=at.oAB({type:t}),t.\u0275inj=at.cJS({imports:[[c.Bz.forChild(ei)],c.Bz]}),t})(),oi=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=at.oAB({type:t}),t.\u0275inj=at.cJS({imports:[[o.ez,s.u5,s.UX,r.m,l.aw,a.I,ni]]}),t})()}}]);