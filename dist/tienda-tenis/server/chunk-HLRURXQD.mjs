import './polyfills.server.mjs';
import{c as j}from"./chunk-IDUGRUK6.mjs";import{a as S,b as O}from"./chunk-2AWHHJ5V.mjs";import{c as I,d as P,i as x,j as D,l as T,n as E,r as p}from"./chunk-IYKMBAP6.mjs";import{R as u,Ta as w,U as f,V as a,Va as C,Xa as b,Za as A,_ as g,_a as F,da as y,ea as l,ga as v,jc as R,qb as N,za as M}from"./chunk-FJJP4KGF.mjs";var H=[{path:"tenis",loadChildren:()=>import("./chunk-KXHK6LPH.mjs").then(o=>o.TenisModule)},{path:"**",redirectTo:"tenis"}],k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[p.forRoot(H),p]});let o=e;return o})();var h=(()=>{let e=class e{constructor(){this.title="tiendaTenis"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(i,n){i&1&&N(0,"router-outlet")},dependencies:[E]});let o=e;return o})();var U="@",L=(()=>{let e=class e{constructor(r,i,n,s,d){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=g(C,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-EKQDFGKM.mjs")).catch(i=>{throw new u(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new c(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let z=d.createRenderer(r,i);s.use(z)}).catch(d=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){w()},e.\u0275prov=f({token:e,factory:e.\u0275fac});let o=e;return o})(),c=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(U)}};function B(o="animations"){return A("NgAsyncAnimations"),v([{provide:b,useFactory:(e,t,r)=>new L(e,t,r,o),deps:[R,x,F]},{provide:M,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e,bootstrap:[h]}),e.\u0275inj=a({providers:[T(),B(),I(P())],imports:[D,k,S,O]});let o=e;return o})();var W=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e,bootstrap:[h]}),e.\u0275inj=a({imports:[V,j]});let o=e;return o})();export{W as a};
