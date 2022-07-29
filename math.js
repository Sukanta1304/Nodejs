
const sum=(a,b)=> a+b ;
const sub = (a,b)=> a-b;
const mul=(a,b)=> a*b ;
const div= (a,b)=>a/b ;
const cos= (a,b)=>Math.cos(a)*b ;
const tan= (num)=>Math.tan(num*Math.PI/180);
const {randomInt}= require("crypto") ;
const random= randomInt(1,6) ;
module.exports = {sum,sub,mul,div, cos,tan , random} ;

