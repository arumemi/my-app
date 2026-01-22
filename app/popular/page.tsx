import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title/Title";
import { destination } from "@/app/lib/destination";
import styles from './page.module.css';

export default function PopularPage() {
  const popularDestinations = destination.slice(0, 6);
  
  return (
    <div className={styles.popularPage}>
      <div className={styles.pageHeader}>
        <h1>🔥 Destinos Mais Populares</h1>
        <p>Os destinos favoritos dos nossos viajantes
          ao redor do mundo.
           Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.
             Bem-vindo ao nosso site de viagens! Somos apaixonados por ajudar você a 
            descobrir os destinos mais incríveis ao redor do mundo.

        </p>
        <div className={styles.badge}>⭐ Top 6 Escolhas</div>
      </div>
      <div className={styles.content}>
        <Grid travels={popularDestinations} />
      </div>
    </div>
  );
}
