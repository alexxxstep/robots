import React from 'react'

const Card = (props) => {
  const { name, email, id } = props.robot
  return (
    <div className='card'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
      <div>
        <h2>{name}m</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
