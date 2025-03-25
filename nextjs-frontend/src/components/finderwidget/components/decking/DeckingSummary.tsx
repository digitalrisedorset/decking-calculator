import React from "react";
import {OptionSelection, useActiveOption} from "@/state/OptionPreferenceState";
import {OptionSelectionStyle} from "@/components/finderwidget/styles/FinderStyles";
import {getOptionLabel, getOptionQuery} from "@/components/finderwidget/lib/option-match";
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {useNumberDeckingBoard} from "@/components/finderwidget/hooks/useCalculationNumberBoard";

export const DeckingSummary: React.FC = () => {
    const {deckingState} = useDeckingCalculator()
    const data = useNumberDeckingBoard()

    const handleRedirect = (e: React.FormEvent) => {
        e.preventDefault();

    }

    console.log('data', deckingState)

    return (
        <div className="product-finder">
            <h3>You have selected</h3>

            <p>We suggest you to purchase {data?.deckingBoards} decking boards and {data?.joists} joists</p>

            <button onClick={handleRedirect}>Add to cart</button>
        </div>
    )
}
