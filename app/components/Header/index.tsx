import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Site de Viagens</h1>
      </Link>
      
      <nav>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/destino">Destinos</Link></li>
          <li><Link href="/popular">Populares</Link></li>
          <li><Link href="/sobre">Sobre Nós</Link></li>
          <li><Link href="/contacto">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
