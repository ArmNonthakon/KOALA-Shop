import './App.css';
import Home from './Component/Home/home';
import Content from './Component/Content/content';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Auth from './Component/Auth/auth';
import Footer from './Component/Footer/footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/clothes',
    element: <Content topic="Clothes" checkNav={true} />,
  },
  {
    path: '/trousers',
    element: <Content topic="Trousers" checkNav={true} />,
  },
  {
    path: '/socks_shoes',
    element: <Content topic="Socks and Shoes" checkNav={true} />,
  },
  {
    path: '/accessories',
    element: <Content topic="Accessories" checkNav={true} />,
  },
  {
    path: '/login',
    element: <Auth state="login" />,
  },
  {
    path: '/signup',
    element: <Auth state="register" />,
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
