import { PrismaClient } from '@prisma/client';
import Product from '../components/Product';

import useQuiosco from '../hooks/useQuiosco';
import Layout from '../layouts/Layout';

export default function Home() {
  const { currentCategory } = useQuiosco();

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className=" text-2xl font-bold">{currentCategory?.name}</h1>
      <p>Lista de producos</p>

      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.productos?.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </Layout>
  );
}

/* export async function getStaticProps() {
  const prisma = new PrismaClient();

  const categorys = await prisma.category.findMany(); // consulta que retorna todo

   const categorys = await prisma.category.findMany({
    where: {
      name: 'Pizzas',
    },
  }); 
  Consulta que retorna el que le especifiquemos
  

  return {
    props: {
      categorys,
    },
  }; 
}*/
