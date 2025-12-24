import CartCard from "./CartCard";

function Product() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">

            <h2 className="text-2xl font-bold mb-6">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CartCard />
            </div>

        </div>
    );
}

export default Product;
