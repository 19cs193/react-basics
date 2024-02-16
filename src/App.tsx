
import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Button";

function App() {
  const[alertVisible,setAlertVisibility]=useState(false);
return(
  <div>
   {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>
      My alert
    </Alert>}
    <Buttons color='primary' onClick={()=>setAlertVisibility(true)}> My Button</Buttons>
  </div>
);
}

export default App;
