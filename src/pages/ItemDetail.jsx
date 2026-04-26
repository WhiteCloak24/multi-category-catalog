import { useParams, useNavigate } from "react-router-dom";
import { catalogueData } from "../utils/constants";

const ItemDetail = () => {
  const { itemname } = useParams();
  const navigate = useNavigate();

  const item = catalogueData.find((i) => i.itemname === itemname);

  return (
    <div className="max-w-6xl mx-auto animate-in zoom-in-95 duration-500">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-semibold transition-colors"
      >
        <span className="text-xl">←</span> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left: Hero Image (Spans 3 columns) */}
        <div className="lg:col-span-3 sticky top-12 bg-white rounded-[40px] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <img
            src={item.image}
            className="w-full h-auto object-contain max-h-125"
          />
        </div>

        {/* Right: Info (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
              {item.itemname}
            </h1>
            <p className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
              {item.category}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">
              Tech Specs
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {item.itemprops.map((prop, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm hover:border-indigo-100 transition-colors"
                >
                  <span className="text-slate-500 font-medium text-sm">
                    {prop.label}
                  </span>
                  <span className="text-slate-900 font-bold">{prop.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
