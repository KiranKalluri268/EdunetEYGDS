async function display(){
    let x=60,y=100;
    if(x<y){
        return "Y value is a bigger"
    }
    else{
        throw new Error("this is an error");
    }
}