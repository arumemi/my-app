import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

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
    <Link href={`/destino/${id}`} className={styles.cardLink}>
      <div key={id} className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={name} width={300} height={200} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
