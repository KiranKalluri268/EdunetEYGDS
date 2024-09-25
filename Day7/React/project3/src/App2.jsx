import { useState,useEffect } from "react";


function App(){
const [count,setCount]=useState(0);
useEffect(()=>
console.log("clicked",[count])
)
    return(
        <div>
            <center>
                {count}
    <button onClick={()=>setCount(count+1)}>Click</button>            
            </center>
        </div>

    )
}
export default App;