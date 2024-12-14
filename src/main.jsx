import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './home';
import { Catalogo } from './components/catalogo/catalogo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,  
    children: [{
      path: '/catalogo',
      element: <Catalogo />
    }]
  
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
