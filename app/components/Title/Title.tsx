import React from 'react'
import styles from './Title.module.css'

type props = {
  title: string
}

const Title = ({title} : props) => {
  return (
   <h2 className={styles.title}>{title}</h2>
  )
}

export default Title
