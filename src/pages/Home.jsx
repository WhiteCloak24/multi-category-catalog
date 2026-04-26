import { useParams, Link } from "react-router-dom";
import { catalogueData } from "../utils/constants";
import { useEffect } from "react";

const Home = () => {
  const { categoryName } = useParams();

  const displayItems = categoryName
    ? catalogueData.filter(
        (i) => i.category.toLowerCase() === categoryName.toLowerCase(),
      )
    : catalogueData;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <h2 className="text-4xl font-black text-slate-900 capitalize tracking-tight">
          {categoryName || "New Arrivals"}
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {displayItems.map((item) => (
          <Link
            to={`/multi-category-catalog/item/${item.itemname}`}
            key={item.itemname}
            className="group relative bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-2 border border-slate-100"
          >
            <div className="relative h-64 w-full mb-4 overflow-hidden rounded-2xl bg-slate-50">
              <img
                src={item.image}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 border border-white/50">
                {item.category}
              </div>
            </div>

            <div className="px-2 pb-2">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {item.itemname}
              </h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-400 italic">
                  View Specifications
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
