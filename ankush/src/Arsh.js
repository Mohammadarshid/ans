import { useState } from "react";

function Arsh (){

    


    const [count,setCount]=useState(0)
    
    const  Adddata=()=>{
        console.log(count);
        setCount(count+1)
       

    }

    return(
        <>
        {count}
        <button on onClick={Adddata}></button>
        </>
    )


}
export default Arsh