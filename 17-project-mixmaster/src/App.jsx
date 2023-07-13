import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
        path: '/cocktail',
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
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
