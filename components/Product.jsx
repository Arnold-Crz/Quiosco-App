import Image from 'next/image';
import { formatDollar } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

function Product({ product }) {
  const { id, name, price, img } = product;
  const { handleProduct, handleModal } = useQuiosco();

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${img}.jpg`}
        alt={`Platillo${name}`}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-400">
          {formatDollar(price)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleModal();
            handleProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Product;
