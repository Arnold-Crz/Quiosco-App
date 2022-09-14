import { useCallback } from 'react';
import { formatDollar } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';
import Layout from '../layouts/Layout';

export default function Total() {
  const { order, name, setName, handleSubmit, total } = useQuiosco();

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 4;
  }, [order, name]);

  return (
    <Layout page={'Total'}>
      <h1 className="text-4xl font-bold">Total de Pedido</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="block uppercase text-slate-800 font-bold"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="bg-gray-100 w-full mt-3 lg:w-1/3 p-2 rounded-md"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            {' '}
            Total a Pagar{' '}
            <span className="font-bold">{formatDollar(total)}</span>{' '}
          </p>
        </div>
        <div className="mt-5">
          <input
            className={`${
              checkOrder() ? 'bg-indigo-200' : 'bg-indigo-600'
            } w-full lg:w-auto px-5 py-2 uppercase fond-bold  hover:bg-indigo-800 text-white rounded-md text-center`}
            type="submit"
            value={'Cofirmar Pedido'}
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
