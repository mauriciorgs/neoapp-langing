import styles from "./CallToAction.module.css";

export const CallToAction = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>¿Listo para impulsar tu negocio con tecnología?</h2>

        <p>
          Ya sea que necesites una solución de software a medida o quieras
          implementar nuestro sistema POS, estamos listos para ayudarte.
        </p>

        <div className={styles.actions}>
          <a href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software." className='btn btn-primary'>
            Hablemos de tu proyecto
          </a>

          <a href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software." className={styles.secondary}>
            Conocer el sistema POS
          </a>
        </div>
      </div>
    </section>
  );
};
