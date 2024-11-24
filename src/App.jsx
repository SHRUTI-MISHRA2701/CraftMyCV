import './App.css';
import { Routes, Route } from 'react-router-dom';
import Forms from './Components/Forms';

import MainTemplate from './Components/maintemplate';


function App() {
  return (
    <>
      
        
        <Routes>
          <Route path='/Forms' element={<Forms />}/>
          
          <Route path='/maintemplate' element={<MainTemplate/>}/>
          
        </Routes>
      
    </>
  );
}

export default App;

