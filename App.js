import React from "react";
import ReactDOM  from "react-dom/client";

const name = "Devil";

function isHeDeveloper(name){
  // if(name == 'Bhushan'){
  //   return "Yes"
  // }

  return ( name == "Bhushan" ? "Yes" : "No")

}


const ShowMyName = () => {
  return <h1>{name == "Devil" ? "Yes" : "No"}</h1>
};
console.log(ShowMyName);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ShowMyName/>);
// root.render(IsPatientDisabled());
// root.render(<IsPatientDisabled></IsPatientDisabled>)



{/* <Component /> */}
