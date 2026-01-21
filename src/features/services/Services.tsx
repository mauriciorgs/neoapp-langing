import styles from "./Services.module.css";

export const Services = () => {
  return (
    <section id='servicios' className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h2>Soluciones de software que impulsan tu negocio</h2>
          <p>
            Desarrollamos tecnología a la medida y productos propios que
            optimizan procesos, mejoran la productividad y acompañan el
            crecimiento de tu empresa.
          </p>
        </header>

        {/* Grid de servicios */}
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}></div>
            <h3>Software a la medida</h3>
            <p>
              Diseñamos y desarrollamos soluciones personalizadas adaptadas a
              los procesos reales de tu empresa.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}></div>
            <h3>Sistema POS</h3>
            <p>
              Nuestro sistema POS permite gestionar ventas, inventario y
              reportes desde una sola plataforma, de forma rápida y segura.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}></div>
            <h3>Automatización de procesos</h3>
            <p>
              Optimizamos tareas operativas mediante tecnología para reducir
              errores y aumentar la eficiencia.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}></div>
            <h3>Escalabilidad y soporte</h3>
            <p>
              Acompañamos a nuestros clientes con soporte continuo y soluciones
              preparadas para crecer junto a su negocio.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
