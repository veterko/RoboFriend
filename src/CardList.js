import React from 'react';
import Card from './Card'
import 'tachyons'

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i)=>{
        return (
        <Card 
             key={i} id={user.id} name={user.name} email={user.email} >
        </Card>)
    })
    return(
      <div>{cardComponent}</div>
    )
}

export default CardList;