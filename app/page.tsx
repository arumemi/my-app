import Grid from "./components/Grid";
import Title from "./components/Title/Title";
import { destination } from "./lib/destination";
import styles from './page.module.css';

export default function Home() {
  return (
   <div className={styles.homePage}>
     <div className={styles.hero}>
       <h1>Explore o Mundo Conosco</h1>
       <p>Descubra destinos incríveis e crie memórias inesquecíveis .</p>
     </div>
     
     <div className={styles.section}>
       <Title title="Destinos Populares" />
       <Grid travels={destination} />
     </div>
   </div>
  );
}
