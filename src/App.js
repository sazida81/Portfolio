import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    
  },
  {
    path: "/index",
    element: <Main />,
  }
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />   
    </div>
  );
}

export default App;
