
import './App.css'; 
import { Languages } from './components';
import { Movies } from './components/Movies/Movies';
import { Read } from './components/Read/Read';
import { Sports } from './components/Sports/Sports';


const App = () =>{


  return (
   <>
 
    <Read/>
    <Sports/>
    <Movies/>
    <Languages/>

   </>
   );
   };

export default App

