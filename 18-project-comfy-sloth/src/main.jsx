import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  ProductsProvider,
  UserProvider,
  FilterProvider,
  CartProvider,
} from './context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-1l0bn5vm74mrl2py.us.auth0.com'
    clientId='3UIMZLB8uFWBLaIS9Vk1VRIx3mZ1BFmE'
    cacheLocation='localstorage'
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
