import React, {useEffect} from "react";
import {EventRow} from "@/components/global/styles/ItemStyles";
import {StepPriceFinder} from "@/components/finderwidget/components/StepPriceFinder";
import {useActiveCategory} from "@/state/ActiveCategoryState";
import {WomenClothesMatch} from "@/components/finderwidget/components/women/WomenClothesMatch";
import {WomenFinderStyle} from "@/components/finderwidget/styles/FinderStyles";
import {StepFinder} from "@/components/finderwidget/components/StepFinder";
import {
    getNextPreferenceStep
} from "@/components/finderwidget/lib/optionPreference";
import {useActiveOption} from "@/state/OptionPreferenceState";

export interface ClothesFinderProps {
    categoryIds: number[]
    optionCode: string
    nextCode: string
}

export const WomenClothesFinder: React.FC<ClothesFinderProps> = ({categoryIds}: ClothesFinderProps) => {
    const {setActiveCategoryIds} = useActiveCategory()
    const {optionState, setActiveCategoryName} = useActiveOption()

    useEffect(() => {
        setActiveCategoryIds(categoryIds)
        setActiveCategoryName('women')
    }, [categoryIds]);

    return (
        <WomenFinderStyle>
            <h2>Let us help you to find the perfect clothing for you today</h2>
            {optionState.activeOptionCode === '' && <EventRow>
                <p className="label">Do you know the type of weather you need this clothing for?</p>
                <StepFinder optionCode={getNextPreferenceStep(optionState.activeOptionCode, 'women')} categoryName={"women"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'climate' && <EventRow>
                <p className="label">Let's decide on the style upfront, shall we?</p>
                <StepFinder optionCode={optionState.activeOptionCode} categoryName={"women"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'style_general' && <EventRow>
                <p className="label">Let's decide on the style upfront, shall we?</p>
                <StepFinder optionCode={optionState.activeOptionCode} categoryName={"women"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'price' && <EventRow>
                <p className="label">Let's decide on the price?</p>
                <StepPriceFinder />
            </EventRow>}
            {optionState.activeOptionCode === 'result' && <EventRow>
                <p className="label">Finally, let's narrow the price range?</p>
                <WomenClothesMatch />
            </EventRow>}
        </WomenFinderStyle>
    )
}
