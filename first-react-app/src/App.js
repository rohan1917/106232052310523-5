import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";



function App() {
  const company = "DevTown";
  // const setNameConfig = "rk"

  const [name, setName]= useState("rohan");
  const [nameConfig, setNameConfig] = useState("defalutValue")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Functional Component</h1>
        <ClassComponent />
        <FunctionalComponent name={name} age={10} company={company} setName={setName}/>
        <FunctionalComponent nameConfig={nameConfig} age={10} company={company} setNameConfig={setNameConfig}/>
      </header>
    </div>
  );
}

export default App;
