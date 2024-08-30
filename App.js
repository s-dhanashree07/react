import logo from './asset/img.jpg';
import './App.css';
// import './components/Header.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
       <Header/>
      <img src={logo}/>
     
    </div>
  );
}

export default App;
