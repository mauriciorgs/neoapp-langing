import { createBrowserRouter } from 'react-router';
import { HomeLayout } from '../pages/layout/HomeLayout';
import { HomePage } from '../pages/Home/HomePage';
import { TermsAndServicesPages } from '../pages/terms-services/TermsAndServicesPages';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';
import { PrivacyPage } from '../pages/privacy/PrivacyPage';
import { ContactoPage } from '../pages/contact/ContactoPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactoPage />,
      },
      {
        path: 'terms-and-services',
        element: <TermsAndServicesPages />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
