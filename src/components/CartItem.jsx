import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { deleteItemFromCartApi } from './../api/cartApi';

export default function CartItem({ item }) {
  const { id, name, image, qty, price } = item;
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center p-6 space-x-6">
      <img
        src={image}
        alt={name}
        className="w-32 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">quantity: {qty}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
          ₹{price * (qty || 1)}
        </p>
      </div>
      <button
        onClick={async () => {
          const result = await deleteItemFromCartApi(id);
          console.log('resullttt', result);
          removeFromCart(item);
        }}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 cursor-pointer"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
