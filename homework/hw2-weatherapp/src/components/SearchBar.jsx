import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div class="form-inline my-2 my-lg-0">     
        <input
          type="text"
          class="form-control"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <div style={{marginLeft: '10px'}}>
          <input type="submit" value="Agregar" class="btn btn-outline-success"/>
        </div>   
      </div>
    </form>
  );
}
//Desktop/Henry/caronte/M2/06-React/1-Intro/homework/hw2-weatherapp