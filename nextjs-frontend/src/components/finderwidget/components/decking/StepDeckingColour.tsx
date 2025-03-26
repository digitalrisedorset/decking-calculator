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
        const findVariantSku = (variants, value_index) => {
            for (const variant of variants) {
                const match = variant.attributes.every(attr => {
                    return value_index === attr.value_index;
                });

                if (match) {
                    return variant.product.sku;
                }
            }

            return null; // no match
        }


        return product?.configurable_options.map((option: any) => {
            return (option?.values.map((value:any) => {
                const sku = findVariantSku(product.variants, value.value_index)
                return <Colour key={value.uid} colour={value} sku={sku} />
            }))
        })
    }

    return (
        <ColourStyle>
            {data?.products?.items?.length>0 && getProductColours(data.products.items[0])}
        </ColourStyle>
    )
}
