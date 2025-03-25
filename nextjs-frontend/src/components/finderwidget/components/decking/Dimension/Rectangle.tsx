import React from "react"
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {getNextCalculationStep} from "@/components/finderwidget/lib/decking";
import {DimensionStyle} from "@/components/finderwidget/styles/FinderStyles";

export const Rectangle: React.FC = () => {
    const {setDeckingWidth, setDeckingHeight, setStep, deckingState} = useDeckingCalculator()

    async function onWidthChange(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingWidth(e.target.value)
        if (deckingState.height !== null) {
            setStep(getNextCalculationStep(deckingState.step))
        }
    }

    async function onHeightChange(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingHeight(e.target.value)
        if (deckingState.width !== null) {
            setStep(getNextCalculationStep(deckingState.step))
        }
    }

    return (
        <DimensionStyle>
            <h3>Enter the width and height for your rectangle surface</h3>
            <label>A</label>
            <div>
                <input type="text" onChange={onWidthChange}/>
                <p>Metres</p>
            </div>
            <label>B</label>
            <div>
                <input type="text" onChange={onHeightChange}/>
                <p>Metres</p>
            </div>
        </DimensionStyle>
    )
}

export default Rectangle
