import {useTopCategories} from "@/components/category/hooks/useTopCategories";
import {Category} from "@/components/category/components/Category";
import {CategoryList} from "@/components/category/styles/CategoryStyles";
import {MagentoCategory} from "@/components/category/types/magentoCategory";

export const TopCategoryList: React.FC = () => {
    const topCategories = useTopCategories();

    return (
        <CategoryList>
            {(topCategories && topCategories!.items.map((category: MagentoCategory ) => (
                    <Category key={category.uid} category={category}/>
                ))
            )}
        </CategoryList>
    )
}
