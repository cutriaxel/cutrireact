import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const ItemDetail = ({addToCart}) => {
let {state} = useLocation()
  console.log(state);
  return (
    <div style={{display: "flex", padding: "12rem"}}>
      <img src={state.card.image} style={{height: "300px"}}/>
      <div style={{marginTop: "10%"}}>
        <h2 style={{color: "#fff"}}>{state.card.title}</h2>
        <p>{state.card.category}</p>
        <p>{state.card.price}</p>
      </div>
      <button onClick={() => addToCart(state.card)}>
        AGREGAR
        </button>
    </div>
  )
}
