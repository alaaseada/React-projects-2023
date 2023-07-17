import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        loader: SingleItemLoader(queryClient),
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
