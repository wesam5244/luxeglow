import React from 'react';
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/services', element: <Services/>},
  { path: '/contact', element: <Contact/>}
]);

const App: React.FC = () => {
  return (  
    <RouterProvider router = {router}/> 
  );
}

export default App;
