import {KeystoneShape} from "@/components/finderwidget/types/keystone";
import React from "react";
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {getNextCalculationStep} from "@/components/finderwidget/lib/decking";
import {ShapeStyle} from "@/components/finderwidget/styles/FinderStyles";

interface ShapeProps {
    shape: KeystoneShape
}

export const Shape: React.FC<ShapeProps> = ({shape}: ShapeProps) => {
    const {setDeckingShape, setStep, deckingState} = useDeckingCalculator()

    async function handleClick(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        setDeckingShape(e.target.value)
        setStep(getNextCalculationStep(deckingState.step))
    }

    return (
        <ShapeStyle>
            <input type="radio" id={shape.code} value={shape.code}  checked={deckingState.shape=== shape.code} onChange={handleClick}/>
            <label htmlFor={shape.code}>
                <img src={`/images/${shape.image}`} alt={shape.name}  />
                <span>{shape.name}</span>
            </label>
        </ShapeStyle>
    )
}
