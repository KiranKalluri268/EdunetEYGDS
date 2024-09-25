import { useState } from "react";
function Test(){
    let [counter,setCounter]=useState(0);
    
    return(
        <div>
            <h2>Counter value is={counter}</h2>
<button onClick={()=>setCounter(++counter)}>change</button>
        </div>
    )
}
export default Test;