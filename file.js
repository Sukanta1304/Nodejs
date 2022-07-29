const fs= require("fs") ;


//console.log(__dirname);

let inp= process.argv[2] ;
let inp1= process.argv[3] ;
let inp2= process.argv[4] ;

switch(inp){
    case "read":{
        const read= fs.readFileSync(`./${inp1}` , {encoding:"utf-8"});
        console.log(read);
        break ;
    };
    case "append":{
        const append= fs.appendFileSync(`./${inp2}` , inp1) ;
        console.log("Append Success!!! please see related folder");
        break ;
    }
    case "delete":{
        const del= fs.unlinkSync(`./${inp1}`) ;
        console.log("Delete Success!!!") ;
        break ;
    };
    case "create":{
        const create= fs.writeFileSync(`./${inp1}`, "This is a new File") ;
        console.log("File created Successfully, please see the folder structure");
        break ;
    };
    case "rename":{
        const rename= fs.renameSync(`./${inp1}`,`./${inp2}`) ;
        console.log("rename Sucess!!!"); 
        break ;
    };
    case "list.":{
        const directory= __dirname
        const list = fs.readdirSync(directory).forEach(file=> console.log(file)) ;
        break ;
    }
}



