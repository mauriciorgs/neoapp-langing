import { RouterProvider } from 'react-router';
import { AppRouter } from './app.router';

export const NeoApp = () => {
  return <RouterProvider router={AppRouter} />;
};
