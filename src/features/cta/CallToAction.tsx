import styles from "./CallToAction.module.css";

export const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>¿Listo para impulsar tu negocio con tecnología?</h2>

        <p>
          Ya sea que necesites una solución de software a medida o quieras
          implementar nuestro sistema POS, estamos listos para ayudarte.
        </p>

        <div className={styles.actions}>
          <a href='/contacto' className='btn btn-primary'>
            Hablemos de tu proyecto
          </a>

          <a href='/pos' className={styles.secondary}>
            Conocer el sistema POS
          </a>
        </div>
      </div>
    </section>
  );
};
