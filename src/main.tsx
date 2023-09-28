import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AddressProvider from './context/AddressProvider.tsx';
import InputProvider from './context/InputProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AddressProvider>
      <InputProvider>
        <App />
      </InputProvider>
      </AddressProvider>

  </React.StrictMode>,
)
