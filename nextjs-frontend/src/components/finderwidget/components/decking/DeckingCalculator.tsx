import React from "react";
import {EventRow} from "@/components/global/styles/ItemStyles";
import {WomenFinderStyle} from "@/components/finderwidget/styles/FinderStyles";
import {MenClothesMatch} from "@/components/finderwidget/components/men/MenClothesMatch";
import {ShapeFinder} from "@/components/finderwidget/components/decking/ShapeFinder";
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";
import {StepDimensionSelection} from "@/components/finderwidget/components/decking/StepDimensionSelection";
import {StepDeckingType} from "@/components/finderwidget/components/decking/StepDeckingType";
import {StepDeckingColour} from "@/components/finderwidget/components/decking/StepDeckingColour";
import {StepDeckingMaterial} from "@/components/finderwidget/components/decking/StepDeckingMaterial";
import {DeckingSummary} from "@/components/finderwidget/components/decking/DeckingSummary";

export interface DeckingCalculatorProps {
    categoryIds: number[]
}

export const DeckingCalculator: React.FC = () => {
    const {deckingState} = useDeckingCalculator()

    return (
        <WomenFinderStyle>
                <h2>We'll save you time & money with an online quote for your next decking! </h2>
                {deckingState.step === '' && <EventRow>
                    <p className="label">What is the shape of the decking space you are looking for?</p>
                    <ShapeFinder />
                </EventRow>}
                {deckingState.step === 'dimension' && <EventRow>
                    <p className="label">Let's decide on the dimensions?</p>
                    <StepDimensionSelection />
                </EventRow>}
                {deckingState.step === 'decking_type' && <EventRow>
                    <p className="label">Let's decide on the decking type, shall we?</p>
                    <StepDeckingType />
                </EventRow>}
                {deckingState.step === 'colour' && <EventRow>
                    <p className="label">Let's decide on the colour now?</p>
                    <StepDeckingColour />
                </EventRow>}
                {deckingState.step === 'material' && <EventRow>
                    <p className="label">Let's decide on the material now?</p>
                    <StepDeckingMaterial />
                </EventRow>}
                {deckingState.step === 'quotation' && <EventRow>
                    <p className="label">Finally, let's narrow the price range?</p>
                    <DeckingSummary />
                </EventRow>}
                {deckingState.step === 'expired' && <EventRow>
                    <p className="label">Finally, let's narrow the price range?</p>
                    <MenClothesMatch />
                </EventRow>}
            </WomenFinderStyle>
    )
}
