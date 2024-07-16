import React from 'react';
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout/>,
    children: [
      { index: true, element: <Home/> },
    ]
  }

])

const App: React.FC = () => {
  return (  
    <RouterProvider router = {router}/> 
  );
}

export default App;
