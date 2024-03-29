import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");  
  const [alert, setAlert] = useState(null);

  const showAlert = (message)=>{
    setAlert({
      msg: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  return (
    <>
      <Navbar themeMode={mode} setMode={setMode} showMsg={showAlert}/>
      <Alert alert={alert}/>
      <TextField themeMode={mode} setMode={setMode} showMsg={showAlert} />

    </>
  );
}
export default App;
