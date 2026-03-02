import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

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
    <div className="flex items-center justify-center min-h-screen text-text-main text-center px-4">
      <div className="max-w-md flex flex-col gap-6">
        <h1 className="text-[6rem] font-extrabold leading-none m-0 text-brand-accent [text-shadow:0_0_20px_rgba(14,165,233,0.4)]">
          404
        </h1>
        <h2 className="text-[2rem] font-semibold m-0 text-text-main">
          Página no encontrada
        </h2>
        <p className="text-lg text-text-muted m-0 leading-relaxed">
          Parece que te has perdido. No te preocupes, te llevaremos de vuelta a
          NeoApp en{' '}
          <span className="text-brand-accent font-bold text-xl">{countdown}</span>{' '}
          segundos...
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary px-6 py-3 mt-4 w-60 self-center">
          Volver al inicio ahora
        </button>
      </div>
    </div>
  );
};
