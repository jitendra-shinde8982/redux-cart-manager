
import { Plus } from "lucide-react";

function CartCard() {

  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src="https://loremflickr.com/400/400/shopping?lock=1"
        alt="product"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-sm text-slate-800">
          Pro Edition
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          High performance product
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">$120</span>
          <button className="bg-black text-white p-2 rounded-lg cursor-pointer hover:bg-slate-500">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
