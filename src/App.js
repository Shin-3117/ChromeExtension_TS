import { useState } from "react";
import './App.css';
function App() {
  const [isOnOff, setIsOnOff] = useState('on');
  const onOff = () =>{
    if(isOnOff==='on'){
      setIsOnOff('off');
    } else {
      setIsOnOff('on');
    }
    
  }
  return (
    <div className="App">
      <div className="onOffBox">
        <button onClick={onOff}> on/off </button>
        <div>{isOnOff}</div>
      </div>
      <button>스샷 번역</button>
    </div>
  );
}

export default App;
