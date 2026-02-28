import styles from './Hero.module.css';
import neoMockup from '../../assets/images/neoapp-mockup.webp';

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
            <a href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software." className="btn-primary">
              Comprar POS
            </a>
            <a href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software." className={styles.secondary}>
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.mockup}></div>
          <img
            src={neoMockup}
            alt="Mockup sistema pos NeoPOS"
            className={styles['imagen-mockup']}
          />
        </div>
      </div>
    </section>
  );
};
