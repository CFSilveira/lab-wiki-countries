import './App.css';
import { Routes, Route } from "react-router-dom";

//import section for components
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

//import section for data
import Data from './countries.json';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="row">

        <div className='col-5'>
          <CountriesList list={Data} />
       </div>
       <div className='col-7'>
        <Routes>
          <Route path="/:id" element={ <CountryDetails /> } />
        </Routes> 
       </div>

      </div>
      </div>
    </div>
  );
}

export default App;