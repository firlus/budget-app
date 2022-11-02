import axios from "axios";

export interface Tag {
    id: number,
    name: string,
}

interface TagCreateInput {
    categoryId: number
    name: string
}

interface TagDeleteInput {
    categoryId: number
    id: number
    name: string
}

export async function getTags(category: number) {
    return (await axios.get(`/api/settings/category/${category}/tag`)).data;
}

export async function createTag(tag: TagCreateInput) {
    console.log("LKOOOOOK");
    console.log(tag);
    return (await axios.post(`/api/settings/category/${tag.categoryId}/tag`, { name: tag.name }));
}

export async function deleteTag(tag: TagDeleteInput) {
    await axios.delete(`/api/settings/category/${tag.categoryId}/tag/${tag.id}`);
    return tag
}