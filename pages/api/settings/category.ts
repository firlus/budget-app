import { Category, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[] | Category>
) {
    const prisma = new PrismaClient();

    if (req.method === "POST") {
        const newCategory = req.body as Category;
        prisma.category.create({ data: newCategory }).then(
            category => res.status(200).json(category)
        );
    } else if (req.method === "GET") {
        const categories = await prisma.category.findMany()
        res.status(200).json(categories);
    } else if (req.method === "DELETE") {
        const category = req.body as Category;
        await prisma.category.delete({ where: { id: category.id } })
        res.status(200).json(category);
    }
}
