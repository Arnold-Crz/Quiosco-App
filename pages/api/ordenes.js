import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    if (req.method === 'POST') {
      const { name, pedido, fecha, total } = req.body;

      const data = await prisma.orden.create({
        data: {
          name,
          pedido,
          fecha,
          total,
        },
      });
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
  }
}
