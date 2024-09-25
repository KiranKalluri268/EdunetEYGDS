console.log("statement1");
const display=()=>{
    let sum=0;
    for(let i=0;i<=100000;i++){
    sum=sum+i;
    }
    setTimeout(()=>{
        console.log("sum value is="+sum);
    },7000)   
}
display();
console.log("statement2");