import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Landing,
  HomeLayout,
  About,
  Error,
  Newsletter,
  Cocktail,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
      },
      {
        path: '/error',
        element: <Error />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
