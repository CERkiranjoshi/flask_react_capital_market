import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';


const App=() => {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
