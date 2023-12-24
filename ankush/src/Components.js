import React from "react"


function Components(props){
    console.log(props)
    return(
   <>
 {props.isverified? <div>{props.student.map((value,index,array)=>{

return (<div> {value.name}{value.sname}</div>)

 })}</div>:"you not varified"}



   </>
        )
   
   
   
   
 
   
   
}
export default Components