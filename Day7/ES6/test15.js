async function display(){
    let x=600,y=100;
    if(x<y){
        return "Y value is a bigger"
    }
    else{
        throw new Error("this is an error");
    }}

let result=display();
result.then((data)=>{
    console.log(data)
})
result.catch((data)=>{
    console.log(data);
})