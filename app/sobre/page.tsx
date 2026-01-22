import Title from "@/app/components/Title/Title";
import Image from 'next/image';
import styles from './sobre.module.css';

export default function SobrePage() {
  return (
    <div className={styles.sobrePage}>
      <Title title="Sobre Nós" />
      
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images (3).jpeg" 
            alt="Travel destination" 
            width={600} 
            height={400}
            className={styles.heroImage}
          />
        </div>
        
        <div className={styles.content}>
          <h3>🌍 Nossa Missão</h3>
          <p>
            Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.
             Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.
             Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.
             Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.
          </p>
          
          <h3>✨ Nossa Visão</h3>
          <p>
            Nossa missão é proporcionar experiências de viagem inesquecíveis, 
            conectando você aos lugares mais belos e culturalmente ricos do planeta.
          </p>
          
          <h3>🚀 Por Que Nos Escolher</h3>
          <ul>
            <li>✅ Destinos exclusivos e cuidadosamente selecionados</li>
            <li>✅ Equipe experiente e apaixonada por viagens</li>
            <li>✅ Suporte 24/7 durante sua jornada</li>
            <li>✅ Melhores preços e ofertas especiais</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>500+</div>
          <div className={styles.statLabel}>Destinos</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>10k+</div>
          <div className={styles.statLabel}>Clientes Felizes</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>15+</div>
          <div className={styles.statLabel}>Anos de Experiência</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>98%</div>
          <div className={styles.statLabel}>Satisfação</div>
        </div>
      </div>
    </div>
  );
}
