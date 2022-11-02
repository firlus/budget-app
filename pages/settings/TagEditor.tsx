import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Tag } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import IconButton from "../../components/particles/IconButton";
import Pill from "../../components/particles/Pill";
import TextButton from "../../components/particles/TextButton";
import { createTag, deleteTag, getTags } from "../../fetching/settings/Tag";

interface TagEditorProps {
    category: number,
}

export default function TagEditor({ category }: TagEditorProps) {

    const queryClient = useQueryClient();

    const [newTagName, setNewTagName] = useState("");

    const tags = useQuery([`tag`, category], () => {
        return getTags(category);
    });

    const createMutation = useMutation(createTag, {
        onSuccess: () => {
            queryClient.invalidateQueries(['tag', category])
        }
    })

    const deleteMutation = useMutation(deleteTag, {
        onSuccess: () => {
            queryClient.invalidateQueries(['tag', category])
        }
    })

    if (tags.isLoading) {
        return <>Loading...</>
    } else if (tags.isError) {
        return <>Error...</>
    } else {
        return <div className="w-full flex flex-col">
            <div className="rounded-full bg-slate-200 flex px-4 py-2 w-1/2 justify-between mb-2">
                <input type="text" value={newTagName} onChange={event => setNewTagName(event.target.value)} placeholder="Create new tag..." className="bg-slate-200 outline-0 focus:outline-0" />
                <CheckIcon width={24} height={24} className="cursor-pointer" onClick={() => {
                    createMutation.mutate({ name: newTagName, categoryId: category })
                    setNewTagName("");
                }} />
            </div>
            <div className="flex space-x-2">
                {tags.data?.map((tag: Tag) => <Pill>
                    <div className="flex items-center">
                        <div className="mr-2">
                            {tag.name}
                        </div>
                        <TrashIcon width={16} height={16} className="cursor-pointer" onClick={() => deleteMutation.mutate({ name: tag.name, categoryId: category, id: tag.id })} />
                    </div>
                </Pill>)}
            </div>
        </div>
    }

}