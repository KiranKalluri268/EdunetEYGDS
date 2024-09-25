import { useState } from "react";
function App(){
 const [count,setCount]=useState(0);
    return(
        <div>
            <center>
                <h2>{count}</h2>
<button onClick={()=>setCount(count+1)}>Change</button>
            </center>
        </div>
    )
}
export default App;