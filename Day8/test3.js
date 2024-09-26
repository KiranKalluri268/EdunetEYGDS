const http=require('http')
const myServer=http.createServer((request,response)=>{
    response.write("Welcome to http module");
    response.end();
})
myServer.listen(5500,()=>{
    console.log("My Server is running on 5500 port no")
})