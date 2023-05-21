import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">¡{props.greeting}!</h1>
        <p className="lead">Bienvenido al curso de React Js.</p>
      </div>
    </div>
  );
}

export default ItemListContainer;