import React from "react"
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {getNextCalculationStep} from "@/components/finderwidget/lib/decking";

interface ProductProps {
    colour: number,
    sku: string
}

export const Colour: React.FC = ({colour, sku}: ProductProps) => {
    const {setDeckingColour, setStep, deckingState} = useDeckingCalculator()

    async function onClick(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingColour(sku)
        setStep(getNextCalculationStep(deckingState.step))
    }

    return (
        <div className="board-type">
            <span className="title">{colour.label}</span>
            <button type="button" onClick={onClick}>
                Select
            </button>
        </div>
    )
}

export default Colour
