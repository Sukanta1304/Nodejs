const fs= require("fs") ;

const read= fs.readFileSync("./text.txt" , {encoding:"utf-8"});
// console.log(read);
const append= fs.appendFileSync("./text.txt" , "Hello from Sukanta") ;

const create= fs.writeFileSync("./text2.txt", "This is a new File") ;

// const del= fs.unlinkSync("./text2.txt") ;

const rename= fs.renameSync("./text2.txt","./text3.txt") ;

const list = fs.readdirSync("../Day1").forEach(file=> console.log(file))



