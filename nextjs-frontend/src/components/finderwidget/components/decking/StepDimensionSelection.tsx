import React from "react";

import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import Rectangle from "@/components/finderwidget/components/decking/Dimension/Rectangle";
import Square from "@/components/finderwidget/components/decking/Dimension/Square";

const RECTANGLE = 'rectangle'
const SQUARE = 'square'

export const StepDimensionSelection: React.FC = () => {
    const {deckingState} = useDeckingCalculator()

    const dimensionEvaluator = (shape: string) => {
        switch(shape) {
            case RECTANGLE: return <Rectangle />
            case SQUARE: return <Square />
            default: return <Rectangle />
        }
    }

    return (
        <>
            {dimensionEvaluator(deckingState.shape)}
        </>
    )
}
