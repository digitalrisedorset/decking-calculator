import {useTopCategoryNames} from "@/components/category/hooks/useTopCategoryNames";
import Link from "next/link";
import {MagentoCategory} from "@/components/category/types/magentoCategory";
import {useMenuSolution} from "@/state/MenuSolutionState";

export const Solutions: React.FC = () => {
    const {closeSolution} = useMenuSolution()
    const topCategories = useTopCategoryNames();

    return (
        <ul className="solution-category" onMouseLeave={closeSolution}>
            {(topCategories && topCategories!.items.map((category: MagentoCategory ) => {
                const url = category.name.toLowerCase()

                return (
                    <Link key={category.uid} href={`/${url}`}>{category.name}</Link>
                )})
            )}
        </ul>

    )
}
