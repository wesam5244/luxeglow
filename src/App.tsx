import React from 'react';
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
]);

const App: React.FC = () => {
  return (  
    <RouterProvider router = {router}/> 
  );
}

export default App;
