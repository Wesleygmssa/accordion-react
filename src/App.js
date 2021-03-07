import React, {useState} from 'react';
import Accodion from './components/Acoordion';

function App() {
  const [active, setActive] = useState(false);
  return (
      <div className="App">
        <Accodion title="title1" active={active} setActive={setActive}/>
        <Accodion title="title2" active={active} setActive={setActive}/>
        <Accodion title="title3" active={active} setActive={setActive}/>
      </div>
  );
}

export default App;
