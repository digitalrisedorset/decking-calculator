import React from "react"
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {getNextCalculationStep} from "@/components/finderwidget/lib/decking";
import {DimensionStyle} from "@/components/finderwidget/styles/FinderStyles";

export const Square: React.FC = () => {
    const {setDeckingWidth, setStep, deckingState} = useDeckingCalculator()

    async function onChange(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingWidth(e.target.value)
        setStep(getNextCalculationStep(deckingState.step))
    }

    return (
        <DimensionStyle>
            <h3>Enter the width for your square surface</h3>
            <label htmlFor="dimension-square-a">A</label>
            <div>
                <input type="text" onBlur={onChange} />
                <p>M<span className="meters">etres</span></p>
            </div>
        </DimensionStyle>
    )
}

export default Square
