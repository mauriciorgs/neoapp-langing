import styles from "./Partners.module.css";

export const Partners = () => {
  return (
    <section id='aliados' className={styles.partners}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h2>Empresas que confían en nosotros</h2>
          <p>
            Nuestros aliados y clientes hacen parte de distintos sectores y han
            confiado en nuestras soluciones tecnológicas.
          </p>
        </header>

        {/* Logos */}
        <div className={styles.logos}>
          <div className={styles.logoItem}>Cliente A</div>
          <div className={styles.logoItem}>Cliente B</div>
          <div className={styles.logoItem}>Cliente C</div>
          <div className={styles.logoItem}>Cliente D</div>
        </div>
        <p className={styles.note}>
          * Algunos proyectos se desarrollaron bajo acuerdos de
          confidencialidad.
        </p>

        <p className={styles.ctaBridge}>
          ¿Quieres ser nuestro próximo aliado? Conversemos sobre tu proyecto.
        </p>
      </div>
    </section>
  );
};
