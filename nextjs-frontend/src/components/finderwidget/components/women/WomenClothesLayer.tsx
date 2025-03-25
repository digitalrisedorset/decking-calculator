import React from "react";
import {useFindAttributeByCode} from "@/components/finderwidget/hooks/useFindAttributeByCode";
import {useProductAttributeLayer} from "@/components/finderwidget/hooks/useProductAttributeLayer";


export const WomenClothesLayer: React.FC = () => {
    const data = useProductAttributeLayer('climate')

    return (
        <div className="women-finder">
            {data?.map((option: any) => {
                return <div key={option.value}>{option.label}</div>
            })}
        </div>
    )
}
