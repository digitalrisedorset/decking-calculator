import React from "react"
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {getNextCalculationStep} from "@/components/finderwidget/lib/decking";

interface ProductProps {
    product: any
}

export const Product: React.FC = ({product}: ProductProps) => {
    const {setDeckingType, setStep, deckingState} = useDeckingCalculator()

    async function onClick(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingType(product.sku, product.decking_length)
        setStep(getNextCalculationStep(deckingState.step))
    }

    return (
        <div className="board-type">
            <span className="title">{product.name}</span>
            <span className="price">{product.price}</span>
            <img src={product.small_image.url} alt={product.small_image.label}/>
            <button type="button" onClick={onClick}>
                Select
            </button>
        </div>
    )
}

export default Product
