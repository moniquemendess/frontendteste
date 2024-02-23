
import './App.css'; 
import { Footer, Header } from './components';


const App = () =>{
  

  return (
   <>
  <Header/>
  <main>
  <Outlet />
  </main>
  <Footer/>
   </>
   );
   };

export default App

