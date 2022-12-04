import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFoundRoute from './Components/NotFoundRoute/NotFoundRoute';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import About from './About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=b')
          },
          element: <Products></Products>,
        },
        {
          path: '/product/:id',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
          },
          element: <ProductDetails></ProductDetails>
        },

        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contacts',
          element: <Contact></Contact>
        },
      ]
    },
    {
      path: '*',
      element: <NotFoundRoute></NotFoundRoute>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
