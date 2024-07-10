import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './Pages/Product';
import SuccessPage from './Pages/SuccessPage';
import FormContextProvider from './store/FormContext';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Product />,
    },
    {
      path: '/success-page',
      element: <SuccessPage />,
    },
  ]);

  return (
    <>
      <FormContextProvider>
        <RouterProvider router={router} />
        {/* <Product />; */}
      </FormContextProvider>
    </>
  );
}
