// // import logo from './logo.svg';
// import './App.css';
// import VerticalNavbar from './components/Home/index';
// import Header from './components/Layout/header';
// import Footer from './components/Layout/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
    
//      <VerticalNavbar />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import NavbarComponent from './components/Layout/header'; // Adjust the path if necessary
import './App.css'; // If you have additional styles
import Footer from './components/Layout/footer'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        {/* Your main content */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
