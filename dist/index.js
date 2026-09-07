"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,u){
var f=require('@stdlib/stats-strided-dnanvariancepn/dist').ndarray,x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,n,y){return x(f(e,r,a,n,y))}u.exports=j
});var d=i(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,a,n){return l(e,r,a,n,m(e,n))}v.exports=R
});var p=i(function(A,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),E=t();_(q,"ndarray",E);o.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),s,c=b(O(__dirname,"./native.js"));g(c)?s=h:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
