import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList(props) {

  return (
    <div>
       {props.list.map((el) =>
       <div>
           <Link to={el.alpha3Code}>
           
           <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} alt="flag" />
           <h1>{el.name.official}</h1>
           </Link>
       </div>
       )} 
    </div>
  )
}

export default CountriesList