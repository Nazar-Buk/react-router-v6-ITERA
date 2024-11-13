import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import HomeChildPage1 from "./pages/HomeChildPage1";
import HomeChildPage2 from "./pages/HomeChildPage2";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import WrapProducts from "./pages/WrapProducts";
import Product from "./pages/Product";
import { fetchProduct } from "./fetchProductюоі";

export const router = createBrowserRouter([
  {
    path: "/", // наш головний роут, коли ми нічого не вводимо
    element: <Home />, // це окрема сторінка
    errorElement: <ErrorPage />, // тут ми вказуємо сторінку з помилкою
    children: [
      // це вкладені роути що належать цьому лейауту, тобто припустимо в лейауті є лівий сайтбар, а з права ми показуємо
      // нові сторінки що йому належать, їх записують у children
      {
        element: <HomeChildPage1 />,
        index: true, //  щоб цей компонент показувався за шляхом його батька, тобто в даному випадку при першому завантаженні
        // буде рендиритися дві компоненти Home та HomeChildPage1 за шляхом  --> "/"
      },
      {
        path: "/home-child-page-2",
        element: <HomeChildPage2 />,
      },
    ],
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/products",
    element: <WrapProducts />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/products/:productId", // вказує роутеру що /products  -- це статична частина шляху,
        // а /:productId -- це динамічна частина шдяху
        element: <Product />, // цей компонент буде показаний лише у тому випадку коли проміс відрезолвиться
        // або якщо у нас є звичайний об'єкт, то коли він повернеться
        loader: fetchProduct, // loader -- це фн котра повертає проміс із даними. От коли я отримаю дані, тільки тоді покажи мені <Product />
        // fetchProduct -- тут треба робити фетч
      },
    ],
  },
]);
