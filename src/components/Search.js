import React from 'react';
import './Search.css';

const Search = () => {
    return(
    <div>
        <div className='search'>
            <input className='search-box' placeholder='Buscar imagenes'/>
            <button className='btn-search'>Buscar</button>
        </div>

        <div>
            {/* Resultados de la busqueda */}
        </div>
    </div>
    
    );
}

export default Search;