import React from "react";

import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {useProducts} from "@/components/finderwidget/hooks/useProducts";
import Product from "@/components/finderwidget/components/decking/DeckingType/Product";
import {ProductStyle} from "@/components/finderwidget/styles/ProductStyles";
import {Loading} from "@/components/global/components/Loading";


export const StepDeckingType: React.FC = () => {
    const {deckingState} = useDeckingCalculator()
    const {data, loading} = useProducts([42])

    if (loading) return <Loading />

    return (
        <ProductStyle>
            {data?.products.items.length > 0 && data?.products.items.map(
                (product: any) => <Product key={product.id} product={product} />
            )}
            {data?.products.items.length === 0 && <>No products found</>}
        </ProductStyle>
    )
}
