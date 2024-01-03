import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicePage from './pages/Services';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/http';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/services',
        element: <ServicePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
