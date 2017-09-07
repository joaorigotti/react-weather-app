import React from 'react';
import { Link } from 'react-router';

const HeaderAppComponent = () => {
  return (
    <div className="header-app">
      <h1 className="title-app">
        <img className="logo" src="./img/cloud-outline.svg" width="80" alt="Nuvem" />
        &nbsp;Weather app
      </h1>

      <nav className="nav-app">
        <Link className="link" to="/">Exibir tabela</Link>
        <Link className="link" to="/grafico">Exibir gráfico</Link>
      </nav>
    </div>
  );
};

export default HeaderAppComponent;
