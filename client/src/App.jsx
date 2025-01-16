import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminRoute from '@components/AdminRoute';
import Layout from '@components/Layout';
import PrivateRoute from '@components/PrivateRoute';
import {
  CartScreen,
  ErrorScreen,
  HomeScreen,
  LoginScreen,
  OrderListScreen,
  OrderScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProductDetailsScreen,
  ProductListScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
} from '@screens';
import store from './store';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/product/:id',
        element: <ProductDetailsScreen />,
      },
      {
        path: '/cart',
        element: <CartScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '/shipping',
            element: <ShippingScreen />,
          },
          {
            path: '/payment',
            element: <PaymentScreen />,
          },
          {
            path: '/placeorder',
            element: <PlaceOrderScreen />,
          },
          {
            path: '/order/:id',
            element: <OrderScreen />,
          },
          {
            path: '/profile',
            element: <ProfileScreen />,
          },
        ],
      },
      {
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: '/admin/orderlist',
            element: <OrderListScreen />,
          },
          {
            path: '/admin/productlist',
            element: <ProductListScreen />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PayPalScriptProvider
        deferLoading={true}
        options={{
          currency: 'USD',
        }}>
        <RouterProvider router={router} />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar
        />
      </PayPalScriptProvider>
    </Provider>
  );
};

export default App;
