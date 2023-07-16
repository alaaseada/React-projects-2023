import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Landing,
  HomeLayout,
  About,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as LandingLoader } from './pages/Landing';
import { loader as SingleItemLoader } from './pages/Cocktail';
import { action as SubscribeToNewsLetter } from './components/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        loader: SingleItemLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
        action: SubscribeToNewsLetter,
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
