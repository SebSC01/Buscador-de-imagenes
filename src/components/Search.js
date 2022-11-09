import React, {useState} from 'react';
import './Search.css';

const Search = () => {

    const [Valor, setValor] = useState('');

    const [Resultados, setResultados] = useState([]);

    const busqueda = async () => {
        const API_KEY = 'W63aGOL-fTW-KmnxBI8K61tJOt1hkedpXPb_J1N6OMQ';
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${Valor}&per_page=30`;

        const response = await fetch(URL);
        const data = await response.json();
        setResultados(data.results);
        console.log(data);
    }

    return(
    <div>
        <div className='search'>
            <input className='search-box' placeholder='Buscar imagenes' onChange={e => setValor(e.target.value)}/>
            <button onClick={() => busqueda()} className='btn-search'>Buscar</button>
        </div>

        <div className='main__content'> 
            <div className='main__content--grid'>
                {Resultados.map((elemento, indice) => {
                    return(
                        <img key={indice} src={elemento.urls.regular} />
                        )     
                })}
            </div>
        </div>

    </div>
    
    );
}

export default Search;