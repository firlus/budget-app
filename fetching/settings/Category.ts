import axios from 'axios';
import { Category } from "@prisma/client";

interface CategoryCreateInput {
    name: string,
    color: string
}

let categories: Category[] = [];

export async function getCategories() {
    return await (await axios.get('/api/settings/category')).data;
}

export async function createCategory(category: CategoryCreateInput) {
    await axios.post('/api/settings/category', category);
    return category;
}

export async function deleteCategory(category: Category) {
    await axios.delete(`/api/settings/category/${category.id}`);
    return category
}


