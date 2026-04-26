import { Outlet, NavLink, useParams } from "react-router-dom";
import { catalogueData } from "../utils/constants";
import { useEffect, useRef } from "react";

const MainLayout = () => {
  const itemsSection = useRef();
  const categories = [...new Set(catalogueData.map((item) => item.category))];
  const { categoryName } = useParams();

  useEffect(() => {
    itemsSection.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [categoryName]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#F8FAFC] overflow-hidden">
      <aside className="w-full lg:w-72 bg-white lg:bg-slate-900 border-b lg:border-none flex flex-col shrink-0 z-20 shadow-xl lg:shadow-2xl">
        <div className="p-6 hidden lg:block">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg rotate-3"></div>
            <h1 className="text-xl font-black text-white tracking-tighter">
              LUXE.
            </h1>
          </div>
        </div>

        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto p-3 lg:p-4 gap-1 no-scrollbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap duration-300 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 translate-x-1"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            Explore All
          </NavLink>
          {categories.map((cat) => (
            <NavLink
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              className={({ isActive }) =>
                `px-2 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 lg:translate-x-1"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`
              }
            >
              {cat}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto relative" ref={itemsSection}>
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-100 blur-[100px] opacity-50 rounded-full"></div>
        <div className="p-6 lg:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
