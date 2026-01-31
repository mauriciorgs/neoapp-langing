import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

// Importa aquí tus otras imágenes
import neopos from "../../assets/images/neopos.webp";
import neopos2 from "../../assets/images/neopos2.webp"; 
import neopos3 from "../../assets/images/neopos3.webp";

// Array de imágenes (puedes repetir la misma para probar si no tienes más)
const IMAGES = [
  { src: neopos, alt: "Dashboard principal del sistema POS" },
  { src: neopos2, alt: "Vista de inventario" }, // Reemplaza con tus otras imgs
  { src: neopos3, alt: "Reporte de ventas" },   // Reemplaza con tus otras imgs
];

export const Hero: React.FC = () => {
  // null = cerrado, número = índice de la imagen abierta
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  // Navegación
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => 
      prev !== null ? (prev + 1) % IMAGES.length : 0
    );
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => 
      prev !== null ? (prev - 1 + IMAGES.length) % IMAGES.length : 0
    );
  };

  // Teclado: Escape y Flechas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className={styles.hero} id='hero'>
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
            <a href='#' className='btn-primary'>Comprar POS</a>
            <a href='#servicios' className={styles.secondary}>Ver funcionalidades</a>
          </div>
        </div>

        {/* Visual: Imagen Principal + Miniaturas */}
        <div className={styles.visualWrapper}>
          
          {/* Imagen Principal (Muestra la primera del array) */}
          <div className={styles.visual} onClick={() => openModal(0)}>
            <img
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              loading='eager'
              className={styles.mainImage}
            />
            
          </div>

          {/* Miniaturas (Thumbnails) */}
          <div className={styles.thumbnails}>
            {IMAGES.map((img, index) => (
              <button 
                key={index} 
                className={styles.thumbBtn} 
                onClick={() => openModal(index)}
                aria-label={`Ver imagen ${index + 1}`}
              >
                <img src={img.src} alt={`Miniatura ${index}`} />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeModal}>
          
          <button className={styles.closeBtn} onClick={closeModal}>&times;</button>

          {/* Botón Anterior */}
          <button className={`${styles.navBtn} ${styles.prev}`} onClick={showPrev}>
            &#10094;
          </button>

          <img 
            src={IMAGES[selectedIndex].src} 
            alt={IMAGES[selectedIndex].alt} 
            className={styles.zoomedImage}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al clickear la imagen
          />

          {/* Botón Siguiente */}
          <button className={`${styles.navBtn} ${styles.next}`} onClick={showNext}>
            &#10095;
          </button>

          {/* Indicador de posición (ej: 1/3) */}
          <div className={styles.counter}>
            {selectedIndex + 1} / {IMAGES.length}
          </div>

        </div>
      )}
    </section>
  );
};