import {useState} from "react"


 function  Home (){ 
 const [count,setCount] =useState(0)
    //const [add,setAdd]=useState(10)
 
     //let count = 0

      const addData=()=>{
       setCount(count /1001)
       //setAdd(12)
       console.log(count);
       
      } 
     
    
     
     
     

 return(
 <>
{count}

<button onClick={addData}>Add</button>

 </>
 )
}
export default Home 