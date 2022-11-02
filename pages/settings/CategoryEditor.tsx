import { CheckIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ColorPicker from "../../components/particles/ColorPicker";
import DropdownSection from "../../components/particles/DropdownSection";
import IconButton from "../../components/particles/IconButton";
import { createCategory, deleteCategory, getCategories } from "./../../fetching/settings/Category"
import TagEditor from "./TagEditor";

export default function CategoryEditor() {

    const [isCreateMode, setCreateMode] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategoryColor, setNewCategoryColor] = useState("bg-cyan-600");

    const queryClient = useQueryClient();

    const categories = useQuery(['category'], getCategories);

    const createMutation = useMutation(createCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(['category'])
        }
    })
    const deleteMutation = useMutation(deleteCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(['category'])
        }
    })

    if (categories.isLoading) {
        return <>Loading...</>
    } else if (categories.isError) {
        return <>Error...</>
    } else {
        if (categories.data?.length === 0 && !isCreateMode) {
            return <div className="flex flex-col pl-6 justify-center items-center w-full h-96">
                <div className="text-lg text-center mx-16">There are currently no categories in your workspace. Add one :)</div>
                <div onClick={() => setCreateMode(true)}>
                    <IconButton Icon={PlusCircleIcon} />
                </div>
            </div>
        } else {
            return <div className="w-full flex flex-col">
                {categories.data?.map(category => <DropdownSection className="mb-2" actions={[{ icon: TrashIcon, onClick: () => deleteMutation.mutate(category) }]} title={
                    <div className="flex">
                        <div className={`w-6 h-6 rounded-full mr-2 ${category.color}`}></div>
                        <div>{category.name}</div>
                    </div>
                }>
                    <div className="w-full">
                        <TagEditor category={category.id} />
                    </div>
                </DropdownSection>)}
                {isCreateMode ?
                    <div className="w-full flex justify-between rounded-3xl bg-slate-200 px-6 py-4">
                        <div className="flex items-center w-full">
                            <ColorPicker size={4} className="mr-2" color={newCategoryColor} onColorChange={(color) => setNewCategoryColor(color)} />
                            <input type="text" value={newCategoryName} onChange={event => setNewCategoryName(event.target.value)} placeholder="Enter new name of category..." className="w-2/3 border-0 bg-slate-200 outline-0 focus:outline-0" />
                        </div>
                        <CheckIcon width={24} height={24} onClick={() => {
                            createMutation.mutate({ name: newCategoryName, color: newCategoryColor })
                            setCreateMode(false);
                            setNewCategoryName("");
                        }} />
                    </div>
                    :
                    <div>
                        <IconButton Icon={PlusCircleIcon} className="ml-3" onClick={() => setCreateMode(true)} />
                    </div>
                }
            </div>
        }
    }
}