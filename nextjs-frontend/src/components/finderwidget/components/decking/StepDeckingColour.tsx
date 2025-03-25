import React from "react";

import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {ColourStyle} from "@/components/finderwidget/styles/ProductStyles";
import {useProduct} from "@/components/finderwidget/hooks/useProduct";
import {Loading} from "@/components/global/components/Loading";
import Colour from "@/components/finderwidget/components/decking/DeckingColour/Colour";

interface ProductOptionValue {
    uid: string;
    value_index: number;
    label: string;
}

interface ProductOption {
    attribute_code: string;
    values: ProductOptionValue[];
}

interface Product {
    configurable_options: ProductOption[];
}

export const StepDeckingColour: React.FC = () => {
    const { deckingState } = useDeckingCalculator();
    const { data, loading } = useProduct(deckingState.deckingTypeProduct.sku);

    console.log('data', data)

    if (loading) return <Loading />

    const getProductColours = (product) => {
        return product?.configurable_options.map((option: any) => {
            return (option?.values.map((value:any) => {
                return <Colour colour={value} />
            }))
        })
    }

    return (
        <ColourStyle>
            {data?.products?.items?.length>0 && getProductColours(data.products.items[0])}
        </ColourStyle>
    )
}
