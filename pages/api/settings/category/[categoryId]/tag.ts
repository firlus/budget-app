import { Category, PrismaClient, Tag } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Tag[] | Tag>
) {
    const prisma = new PrismaClient();

    if (req.method === "POST") {
        console.log("BODY");
        console.log(req.body);
        const newTag = req.body as Tag;
        const categoryId = parseInt(req.query.categoryId as string);
        prisma.category.update({
            where: { id: categoryId }, data: {
                tags: {
                    create: newTag
                }
            },
        })
            .then(
                tag => res.status(200).json(tag as unknown as Tag)).catch(e => res.status(500).json(e))
    } else if (req.method === "GET") {

        const categoryId = parseInt(req.query.categoryId as string);

        const tags = await prisma.tag.findMany({ where: { categoryId: categoryId } })
        res.status(200).json(tags);
    }
}
