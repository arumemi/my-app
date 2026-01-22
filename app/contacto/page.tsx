import Title from "@/app/components/Title/Title";
import styles from './page.module.css';

export default function ContactoPage() {
  return (
    <div className={styles.contactoPage}>
      <Title title="Contato" />
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Entre em Contato Conosco</h3>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📧</span>
            <div>
              <strong>E-mail</strong>
              <p>contato@sitedeviagens.com.br</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <div>
              <strong>Telefone</strong>
              <p>+55 (11) 98765-4321</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <strong>Endereço</strong>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>🕒</span>
            <div>
              <strong>Horário de Atendimento</strong>
              <p>Segunda a Sexta: 09h00 às 18h00</p>
            </div>
          </div>
        </div>
        
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0525644421!2d-46.925091249999996!3d-23.6815315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1642857200000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}