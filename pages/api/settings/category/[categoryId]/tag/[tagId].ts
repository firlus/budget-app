import { Category, PrismaClient, Tag } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Tag[] | Tag>
) {
    const prisma = new PrismaClient();

    if (req.method === "DELETE") {
        const categoryId = parseInt(req.query.categoryId as unknown as string);
        const tagId = parseInt(req.query.tagId as unknown as string);
        prisma.category.update({
            where: { id: categoryId }, data: {
                tags: {
                    delete: {
                        id: tagId
                    }
                }
            },
        })
            .then(
                tag => res.status(200).json(tag as unknown as Tag)).catch(e => res.status(500).json(e))
    }
}