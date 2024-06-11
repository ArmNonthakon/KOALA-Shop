import './App.css';
import Home from './Component/Home/home';
import Content from './Component/Content/content';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Auth from './Component/Auth/auth';
import Footer from './Component/Footer/footer';
import Navbar from './Component/Navbar/navbar';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/clothes',
    element: (
      <>
        <Navbar />
        <Content topic="Clothes" />
      </>
    ),
  },
  {
    path: '/trousers',
    element: (
      <>
        <Navbar />
        <Content topic="Trousers" />
      </>
    ),
  },
  {
    path: '/socks_shoes',
    element: (
      <>
        <Navbar />
        <Content topic="Socks and Shoes"  />
      </>
    ),
  },
  {
    path: '/accessories',
    element: (
      <>
        <Navbar />
        <Content topic="Accessories" />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
      <Navbar />
      <Auth state="login" />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
      <Navbar />
      <Auth state="register" />
      </>
    ),
  },
]);

function App() {

  return (
    <>
      <div className="main">
        <div className='content'>
          <RouterProvider router={router} />
        </div>
        <div className="Footerr">
          <Footer></Footer>
        </div>


      </div>

    </>
  );
}

export default App;
