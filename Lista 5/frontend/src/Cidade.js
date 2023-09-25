import React, { useState } from 'react';

function Cidade({ nome }) {
  const [detalhes, setDetalhes] = useState(null);

  const handleClick = async () => {
    if (!detalhes) {
      const response = await fetch(`/cidades/${nome}`);
      const data = await response.json();
      setDetalhes(data);
    } else {
      setDetalhes(null);
    }
  };

  return (
    <div onClick={handleClick}>
      <h2>{nome}</h2>
      {detalhes && (
        <div>
          <img src={detalhes.foto} alt={nome} />
          <p>{detalhes.descricao}</p>
        </div>
      )}
    </div>
  );
}

export default Cidade;
