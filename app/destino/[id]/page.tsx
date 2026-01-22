import Image from 'next/image';
import Link from 'next/link';
import { destination } from '@/app/lib/destination';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DestinoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const destinationId = parseInt(id);
  
  const destinationDetail = destination.find(d => d.id === destinationId);
  
  if (!destinationDetail) {
    notFound();
  }

  return (
    <div className={styles.detailPage}>
      <Link href="/destino" className={styles.backLink}>
        ← Voltar para Destinos
      </Link>
      
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src={destinationDetail.image} 
            alt={destinationDetail.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}>
            <h1>{destinationDetail.name}</h1>
            <p className={styles.country}>📍 {destinationDetail.country}</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Sobre este Destino</h2>
          <p className={styles.description}>{destinationDetail.description}</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>🎯 Principais Atrações</h3>
            <ul>
              {destinationDetail.attractions?.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>🎨 Atividades</h3>
            <ul>
              {destinationDetail.activities?.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>📅 Melhor Época para Visitar</h3>
            <p className={styles.highlight}>{destinationDetail.bestTimeToVisit}</p>
          </div>

          <div className={styles.infoCard}>
            <h3>💰 Faixa de Preço</h3>
            <p className={styles.priceRange}>{destinationDetail.priceRange}</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Pronto para Explorar?</h2>
          <p>Reserve sua viagem para {destinationDetail.name} e crie memórias inesquecíveis!</p>
          <div className={styles.buttonGroup}>
            <Link href="/contacto" className={styles.primaryButton}>
              Entre em Contato
            </Link>
            <Link href="/destino" className={styles.secondaryButton}>
              Ver Mais Destinos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return destination.map((dest) => ({
    id: dest.id.toString(),
  }));
}
