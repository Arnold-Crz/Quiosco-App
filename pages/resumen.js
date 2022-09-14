import ResumenProduct from '../components/ResumenProduct';
import useQuiosco from '../hooks/useQuiosco';
import Layout from '../layouts/Layout';

export default function Resumen() {
  const { order } = useQuiosco();

  return (
    <Layout page={'Resumen'}>
      <h1 className="text-4xl font-bold">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">Aun no tienes ordenes agregadas</p>
      ) : (
        order.map((o) => <ResumenProduct key={o.id} product={o} />)
      )}
    </Layout>
  );
}
