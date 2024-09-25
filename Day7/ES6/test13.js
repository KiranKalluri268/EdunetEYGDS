function greet(name,callback){
    console.log(name);
    callback();
}
function welcome(){
    console.log("This is one of the callback function");
}
greet("ajayreddy",welcome);