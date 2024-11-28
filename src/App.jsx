import './App.css';
import { Routes, Route } from 'react-router-dom';
import Forms from './Components/Forms';

import MainTemplate from './Components/maintemplate';
import Home from './Components/home';
import Template1 from './Components/template1';
import ChooseTemplate from './Components/choosetemplate';


function App() {
  return (
    <>
      
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Forms' element={<Forms />}/>
          <Route path='/choosetemplate' element={<ChooseTemplate/>}/>
          <Route path='/template1' element={<Template1/>}/>
          <Route path='/maintemplate' element={<MainTemplate/>}/>
          
        </Routes>
      
    </>
  );
}

export default App;

