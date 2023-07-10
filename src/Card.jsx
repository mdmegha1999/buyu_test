import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div>
      <div className='card'>
      <p>
      {props.id}</p>
      <h3>{props.title}</h3>
      <p>{props.body}</p></div>
    </div>
  )
}
