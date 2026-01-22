import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title/Title";
import { destination } from "@/app/lib/destination";
import styles from './page.module.css';

export default function DestinoPage() {
  return (
    <div className={styles.destinoPage}>
      <div className={styles.pageHeader}>
        <h1>🌍 Todos os Destinos</h1>
        <p>Explore nossa coleção completa de destinos incríveis ao redor do mundo</p>
      </div>
      <div className={styles.content}>
        <Grid travels={destination} />
      </div>
    </div>
  );
}
