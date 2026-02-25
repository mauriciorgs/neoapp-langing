import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Sistema POS moderno para
            <span> medianos y pequeños negocios</span>
          </h1>
          <p>
            Gestiona ventas, inventarios y pagos desde una sola plataforma.
            Diseñado para crecer contigo.
          </p>
          <div className={styles.actions}>
            <a href="#" className="btn-primary">
              Comprar POS
            </a>
            <a href="#servicios" className={styles.secondary}>
              Ver funcionalidades
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.mockup}></div>
          <img
            src="src/assets/images/neoapp-mockup.webp"
            alt="Mockup sistema pos NeoPOS"
            className={styles['imagen-mockup']}
          />
        </div>
      </div>
    </section>
  );
};
