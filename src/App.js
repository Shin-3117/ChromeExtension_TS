import { useState } from "react";
import './App.css';



function App() {
  const [isOnOff, setIsOnOff] = useState(true);
//  const [dragTest, setDragTest] = useState('');


  const onOffClick = () =>{
    if(isOnOff){
      setIsOnOff(false);
    } else {
      setIsOnOff(true);
    }
  }
  
  if(isOnOff===true){
    const handleSelectionChange = event => {
      //setDragTest(window.getSelection().toString());
      let selectedTxt = window.getSelection().toString();
    
      let selectionValid = selectedTxt.length > 0;
      
      let selectionEmpty = selectedTxt.length === 0;
      if (selectionEmpty) {
        return;
      }  
      if (selectionValid) {
        console.log(selectedTxt);
        document.getElementById("toolTip").textContent = `${selectedTxt}`;
      }
    
    }
    document.addEventListener("selectionchange", handleSelectionChange);
  }


  return (
    <div className="App">
      <div className="onOffBox">
        <button onClick={onOffClick}> on/off </button>
        {isOnOff ? <div>on</div> : <div>off</div>}
        <div>{isOnOff}</div>
      </div>
      <button>스샷 번역</button>
      <div>가나다라마바 abcdefg 123456</div>
      <div>123456789</div>
      <p id="toolTip">
        (no selection)
      </p>
    </div>
  );
}

export default App;
