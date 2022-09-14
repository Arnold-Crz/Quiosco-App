import { PrismaClient } from '@prisma/client';

export default async function handler(_, res) {
  const prisma = new PrismaClient();
  const category = await prisma.category.findMany({
    // Trae el modelo relacionado con este modelo
    include: {
      productos: true,
    },
  });

  res.status(200).json(category);
}
