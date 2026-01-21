import styles from "./Hero.module.css";

import neopos from "../../assets/images/neopos.webp";

export const Hero = () => {
  return (
    <section className={styles.hero}>
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
            <a href='#' className='btn-primary'>
              Comprar POS
            </a>

            <a href='#servicios' className={styles.secondary}>
              Ver funcionalidades
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className={styles.visual}>
          <img
            src={neopos}
            alt='Sistema POS NeoApp en funcionamiento'
            loading='eager'
          />
        </div>
      </div>
    </section>
  );
};
