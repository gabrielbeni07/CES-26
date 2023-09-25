import React, { useState, useEffect } from 'react';
import Cidade from './Cidade';

function App() {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const fetchCidades = async () => {
      const response = await fetch('/cidades');
      const data = await response.json();
      setCidades(data);
    };

    fetchCidades();
  }, []);

  return (
    <div className="App">
      {cidades.map(cidade => (
        <Cidade key={cidade.nome} nome={cidade.nome} />
      ))}
    </div>
  );
}

export default App;
