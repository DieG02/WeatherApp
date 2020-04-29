import React from 'react';
import SearchBar from './SearchBar.jsx';
import Image from '../logo.png';
import './Nav.css';

function Nav({onSearch}) {

  return (
    //Tu código acá:
    //La prop onSearch viene de la SearchBar, el valor es lo que se pasa en Nav(onSearch)
    <nav class="navbar navbar-dark bg-dark">
      <div>
        <img src={Image} width='35px' height='35px' style={{marginRight: '15px'}} alt='logoHenry'/>
        <span style={{fontSize: '20px', color: '#fff', fontFamily: 'Arial'}}>Henry - Weather App</span>  
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
