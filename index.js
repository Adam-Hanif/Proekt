import React from "react";
import ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <div>
      <div> <Text name = 'Expo ' sity ='Grozny'/></div>
      
   </div>
   
  );
  
// function Text 2(props) {
//   return (<span>{props.welcome} </span>)
// }

function Text(props) {
  return (
    <>
      <h1>Welcome</h1>
      <h2>{props.name}{props.sity}</h2>
    </>
    
    
    
  )
}






