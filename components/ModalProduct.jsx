import Image from 'next/image';
import { useEffect, useState } from 'react';
import { formatDollar } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

function ModalProduct() {
  const [count, setCount] = useState(1);
  const { product, order, handleModal, handleOrder } = useQuiosco();
  const [orderEdit, setOrderEdit] = useState(false);

  const { name, img, price } = product;

  // Comprobar si el modal ya tiene un producto
  useEffect(() => {
    if (order.some((p) => p.id === product.id)) {
      const productEdit = order.find((p) => p.id === product.id);
      setOrderEdit(true);
      setCount(productEdit.count);
    }
  }, [product, order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${img}.jpg`}
          alt={`Postre-${name}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-black mt-5">{name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatDollar(price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (count <= 1) return;
              setCount(count - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{count}</p>
          <button
            type="button"
            onClick={() => {
              if (count >= 10) return;
              setCount(count + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => handleOrder({ ...product, count })}
          type="button"
          className="bg-indigo-500 hover:bg-indigo-800 uppercase text-white fond-blod rounded-sm py-3 px-4 mt-5 "
        >
          {orderEdit ? 'Guardar Cambios' : 'Añadir Pedido'}
        </button>
      </div>
    </div>
  );
}

export default ModalProduct;
