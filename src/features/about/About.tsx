import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Sobre nosotros</h2>

          <p>
            Somos una empresa de desarrollo de software enfocada en crear
            soluciones tecnológicas confiables, escalables y alineadas a las
            necesidades reales de nuestros clientes.
          </p>

          <p>
            Creemos en la tecnología como una herramienta para optimizar
            procesos, mejorar la toma de decisiones y potenciar el crecimiento
            de los negocios.
          </p>
        </div>

        <div className={styles.values}>
          <div className={styles.value}>
            <span>🚀</span>
            <h3>Calidad</h3>
            <p>Desarrollamos software robusto y bien diseñado.</p>
          </div>

          <div className={styles.value}>
            <span>🤝</span>
            <h3>Compromiso</h3>
            <p>Acompañamos a nuestros clientes en cada etapa.</p>
          </div>

          <div className={styles.value}>
            <span>🧠</span>
            <h3>Innovación</h3>
            <p>Buscamos soluciones modernas y eficientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
