import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
} from './pages';

const app_router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
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
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/error',
        element: <ErrorPage />,
      },
      {
        path: '/login',
        element: <h1>Login Page</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={app_router} />;
}

export default App;
