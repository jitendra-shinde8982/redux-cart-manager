
import { useDispatch } from 'react-redux'
import './App.css'
import Headers from './components/Header'
import Product from './components/product'
import { clearItem } from './features/Cartslice';


function App() {
  const dispatch = useDispatch()
  return (
    <>
      <Headers />

      <div className="min-h-screen bg-slate-50 p-8">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Our Products</h2>

          <button
            onClick={()=>dispatch(clearItem())}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition"
          >
            Clear Cart
          </button>
        </div>
        <Product />

      </div>

    </>
  )
}

export default App
