import {useProductAttributeLayer} from "@/components/finderwidget/hooks/useProductAttributeLayer";
import {useActiveCategory} from "@/state/ActiveCategoryState";


export const useFindAttributeOptionsByCode = (code: string) => {
    const {categoryIds} = useActiveCategory()
    const {data, loading} = useProductAttributeLayer(categoryIds)

    const result = data?.products?.aggregations.filter((attribute) => attribute.attribute_code === code).map((attribute: any) => {
        return attribute
    })

    return result?.length>0? result[0]: null
}
