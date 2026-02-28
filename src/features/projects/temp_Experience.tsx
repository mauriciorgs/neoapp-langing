import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h2>Experiencia construyendo soluciones digitales</h2>
          <p>
            Hemos desarrollado productos y plataformas tecnológicas adaptadas a
            distintos sectores, siempre enfocándonos en calidad, escalabilidad y
            resultados.
          </p>
        </header>

        {/* Grid */}
        <div className={styles.grid}>
          <article className={styles.item}>
            <span className={styles.badge}>Producto propio</span>
            <h3>Sistema POS</h3>
            <p>
              Plataforma de punto de venta diseñada para pequeños y medianos
              negocios, con gestión de ventas, inventario y reportes en tiempo
              real.
            </p>
          </article>

          <article className={styles.item}>
            <span className={styles.badge}>Software a medida</span>
            <h3>Plataformas empresariales</h3>
            <p>
              Desarrollo de sistemas personalizados para la gestión de pagos,
              ventas y procesos internos.
            </p>
          </article>

          <article className={styles.item}>
            <span className={styles.badge}>Automatización</span>
            <h3>Optimización de procesos</h3>
            <p>
              Soluciones enfocadas en automatizar tareas operativas y mejorar la
              eficiencia en empresas en crecimiento.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
