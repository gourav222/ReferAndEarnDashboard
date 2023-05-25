import './App.css';
import {Header} from "./components/Header/Header"
import UpperContainer from './components/Main/UpperContainer';
import LowerContainer from './components/Main/LowerContainer';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='dashBoard'>
      <Header/>
      <UpperContainer/>
      <LowerContainer/>
      <Footer/>
    </div>
  );
}

export default App;
