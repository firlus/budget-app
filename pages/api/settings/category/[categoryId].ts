import { Category, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[] | Category>
) {
    const prisma = new PrismaClient();

    if (req.method === "DELETE") {
        const categoryId = parseInt(req.query.categoryId as unknown as string);
        const category = await prisma.category.delete({ where: { id: categoryId } })
        res.status(200).json(category);
    }
}