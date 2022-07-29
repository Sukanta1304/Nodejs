const {sum,sub,mul,div,cos,tan,random}= require("./math")

// let res= sum(2,3) ;
// let res2= sub(2,3) ;
// let res3= mul(2,3) ;
// let res4= div(2,3) ;
// let res5= cos(2,10);
// let res= tan(0)
// console.log(res);
let inp= process.argv[2] ;
let inp1= +process.argv[3] ;
let inp2= +process.argv[4] ;
if(inp==='add'){
    let res= sum(inp1,inp2) ;
    console.log(res) ;
}
else if(inp==='sub'){

}
else if(inp==='mul'){
    
}
else if(inp==='div'){

};

switch(inp){
    case "sub":{
        let res= sub(inp1,inp2);
        console.log(res) ;
        break ;
    };
    case "add":{
        let res= sum(inp1,inp2);
        console.log(res);
        break ;
    };
    case "mul":{
        let res= mul(inp1,inp2);
        console.log(res);
        break;
    };
    case "div":{
        let res= div(inp1,inp2);
        console.log(res);
        break ;
    };
    case "tan":{
        let res= tan(inp1);
        console.log(res);
        break ;
    };
    case "cos":{
        let res= cos(inp1,inp2);
        console.log(res);
        break;
    };
    case "random":{
        console.log(random) ;
        break ;
    }
    default:{
        console.log("Error")
    }

}
