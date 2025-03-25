import {useProductAttributes} from "@/components/finderwidget/hooks/useProductAttributes";


export const useFindAttributeByCode = (code: string) => {
    const { data } = useProductAttributes()

    const result = data?.attributesList?.items.filter((attribute) => attribute.code === code)

    return result.length>0? result[0]:null
}
