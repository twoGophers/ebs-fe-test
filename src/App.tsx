import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Catalog from "../components/catalog/Catalog";
import Cart from "../components/cart/Cart";
import Icon from "../components/ui/Icon";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCatalog } from '../store/slices/catalog'

export default function App() {

  const dispatch = useAppDispatch();
  const { catalog, status } = useAppSelector((state) => state.catalog);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCatalog());
      } catch (error) {
        console.error("Ошибка загрузки данных", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1>Загрузка данных...</h1>
      </div>
    );
  }

  if( status !== 200) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1>Ошибка загрузки данных { status } </h1>
      </div>
    );
  }

  if (catalog?.data?.length === 0) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1>Каталог пуст</h1>
      </div>
    );
  }
  

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <header className="flex space-x-4 bg-gray-800 text-white">
          <div className="container p-4 flex flex-row justify-between">
            <nav >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium mr-10 text-xl hover:text-yellow-400 transition  ${isActive ? "text-yellow-400 font-bold" : "text-white "}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `font-medium text-xl hover:text-yellow-400 transition  ${isActive ? "text-yellow-400 font-bold" : "text-white "}`
                }
              >
                Cart
              </NavLink>
            </nav>
            <div className="flex flex-row h-full items-center ">
              <span className="w-10 h-10 "> 
                <Icon name={'cart'} />
              </span>
              <span className="text-lg">
                0
              </span>
            </div>
          </div>

        </header>
        {/* Основной контент */}
        <main className="container flex-grow p-4">
          <Routes>
            <Route path="/" element={<Catalog catalog={catalog} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        {/* Футер */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          Footer Content
        </footer>
      </Router>
    </div>
  );
}
