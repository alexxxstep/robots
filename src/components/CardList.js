import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot) => {
    return <Card key={robot.id} robot={robot} />
  })
  return <div className='cardlist'>{cardComponent}</div>
}

export default CardList
