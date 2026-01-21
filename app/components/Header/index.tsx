import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href="/">
        <h1>Site de Viagens</h1>
         </Link>
      
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/destino">Destino</Link></li>
          <li><Link href="/popular">Popular</Link></li>
          <li><Link href="/sobre">Sobre Nos</Link></li>
          <li><Link href="/contacto">Contactos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header