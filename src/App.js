import React from "react";
import "./style.css";
const data =[
  {id:1,name:"nithish"},
  {id:2,name:"recat"},
  {id:3,name:"java"},
  {id:4,name:"javascriot"},
  {id:5,name:"python"},
]
export default function App() {
  const[remove,setRemove]=React.useState(data)

 const Remove=(val)=>{
  //  console.log(val)
   const  result =remove.filter((elm,i)=> elm.id !==  val
   )
   console.log(result)
   setRemove(result)

 }

  return (
    <div>
      <table>
      <tr>
          <th>id</th>
          <th>name</th>
          <th>delete</th>
          </tr>
      
         { remove?.map((item,index)=>{
           return (
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><button onClick={()=>Remove(item.id)}>delete</button></td>
          </tr>
           )
            
         })} 
        
        </table>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      
    </div>
  );
}
