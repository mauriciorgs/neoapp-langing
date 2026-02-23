import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './NotFound.module.css';

export const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className={styles['not-found-container']}>
      <div className={styles['not-found-content']}>
        <h1 className={styles['error-code']}>404</h1>
        <h2 className={styles['error-title']}>Página no encontrada</h2>

        <p className={styles['error-message']}>
          Parece que te has perdido. No te preocupes, te llevaremos de vuelta a
          NeoApp en{' '}
          <span className={styles['countdown-number']}>{countdown}</span>{' '}
          segundos...
        </p>

        <button onClick={() => navigate('/')} className={`btn-primary ${styles['btn-back']}`}>
          Volver al inicio ahora
        </button>
      </div>
    </div>
  );
};
