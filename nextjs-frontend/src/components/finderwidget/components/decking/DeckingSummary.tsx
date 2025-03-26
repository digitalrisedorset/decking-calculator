import React, {useEffect, useState} from "react";
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {useNumberDeckingBoard} from "@/components/finderwidget/hooks/useCalculationNumberBoard";
import {useAddSimpleToCart} from "@/components/finderwidget/hooks/useAddSimpleToCart";
import {useAddConfigurableToCart} from "@/components/finderwidget/hooks/useAddConfigurableToCart";
import {ViewItems} from "@/components/finderwidget/components/decking/Cart/ViewItems";
import {useCart} from "@/components/finderwidget/hooks/useCart";

export const DeckingSummary: React.FC = () => {
    const {deckingState} = useDeckingCalculator()
    const data = useNumberDeckingBoard();
    const [addSimpleProductsToCart, { loading }] = useAddSimpleToCart();
    const [addConfigurableProductsToCart] = useAddConfigurableToCart();
    const [add, setAdd] = useState(false)
    const { refetch } = useCart();

    useEffect(() => {
        const ready =
            data &&
            data.deckingBoards > 0 &&
            data.joists > 0 &&
            deckingState?.cartId &&
            deckingState?.deckingTypeProduct?.sku &&
            deckingState?.deckingMaterialProduct?.sku;

        if (!ready) return;

        const handleCart = async () => {
            console.log("triggering addToCart")
            try {
                setAdd(true)
                await addSimpleProductsToCart({
                    variables: {
                        cartId: deckingState.cartId,
                        items: [
                            {
                                data: {
                                    sku: deckingState.deckingMaterialProduct.sku,
                                    quantity: data.joists,
                                }
                            },
                        ],
                    }
                });
                await addConfigurableProductsToCart({
                    variables: {
                        cartId: deckingState.cartId,
                        items: [
                            {
                                parent_sku: deckingState.deckingTypeProduct.sku,
                                data: {
                                    sku: deckingState.deckingColour,
                                    quantity: data.deckingBoards,
                                }
                            },
                        ],
                    }
                });
                await refetch();
            } catch (err) {
                console.error("Add to cart error:", err);
            }
        };

        if (!add) handleCart();
        // We only want this to run ONCE when all are ready
        // Do NOT include `deckingState` as a dependency
    }, [
        add,
        data?.deckingBoards,
        data?.joists,
        deckingState.cartId,
        deckingState.deckingTypeProduct?.sku,
        deckingState.deckingMaterialProduct?.sku,
        addSimpleProductsToCart
    ]);

    const handleRedirect = () => {

    }

    console.log('data', deckingState)

    return (
        <div className="product-finder">
            <h3>You have selected</h3>

            <p>We suggest you to purchase {data?.deckingBoards} decking boards and {data?.joists} joists</p>

            <ViewItems />

            <button onClick={handleRedirect}>Add to cart</button>
        </div>
    )
}
