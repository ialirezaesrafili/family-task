// packages
import React, { Suspense } from 'react';
import PublicLayout from '../layouts/PublicLayout';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  AdminLogin,
  AboutPage,
  ContactPage
} from '../pages';
import Loading from '../components/Loading/Loading';


const publicRoutes = [
  {
    element: (
      <Suspense fallback={<Loading/>}>
        <PublicLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutPage />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={Loading}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={Loading}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/admin/login',
    element: (
      <Suspense fallback={Loading}>
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: '/unauthorized',
    element: <div>You don’t have permission</div>,
  },
];

export default publicRoutes;
