import React from 'react'
type props = {
  travel: {
    id: number;
    name: string;
    description: string;
    image: string;
  }
}

const Card = ({travel} : props) => {
    const {id, name, description, image} = travel;
  return (
    <div key={id}>
      <img src={image} alt={`${name} width`} width={300} height={200} />
      <div >
      <h3>{name}</h3>
      <p>{description}</p>
        </div>
    </div>
  )
}

export default Card
