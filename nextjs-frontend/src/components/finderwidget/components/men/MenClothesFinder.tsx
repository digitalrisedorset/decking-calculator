import React, {useEffect} from "react";
import {EventRow} from "@/components/global/styles/ItemStyles";
import {StepPriceFinder} from "@/components/finderwidget/components/StepPriceFinder";
import {useActiveCategory} from "@/state/ActiveCategoryState";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {WomenFinderStyle} from "@/components/finderwidget/styles/FinderStyles";
import {StepFinder} from "@/components/finderwidget/components/StepFinder";
import {ClothesFinderProps} from "@/components/finderwidget/components/women/WomenClothesFinder";
import {getNextPreferenceStep} from "@/components/finderwidget/lib/optionPreference";
import {MenClothesMatch} from "@/components/finderwidget/components/men/MenClothesMatch";

export const MenClothesFinder: React.FC<ClothesFinderProps> = ({categoryIds}: ClothesFinderProps) => {
    const {setActiveCategoryIds} = useActiveCategory()
    const {optionState, setActiveCategoryName} = useActiveOption()

    useEffect(() => {
        setActiveCategoryIds(categoryIds)
        setActiveCategoryName('women')
    }, [categoryIds]);

    return (<WomenFinderStyle>
            <h2>Let's roll up our sleeves, put some sweat in this search</h2>
            {optionState.activeOptionCode === '' && <EventRow>
                <p className="label">Do you know the type of weather you need this clothing for?</p>
                <StepFinder optionCode={getNextPreferenceStep(optionState.activeOptionCode, 'men')} categoryName={"men"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'climate' && <EventRow>
                <p className="label">Let's decide on the material upfront, shall we?</p>
                <StepFinder optionCode={optionState.activeOptionCode} categoryName={"men"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'material' && <EventRow>
                <p className="label">Let's decide on the material upfront, shall we?</p>
                <StepFinder optionCode={optionState.activeOptionCode}  categoryName={"men"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'size' && <EventRow>
                <p className="label">Let's decide on the size now?</p>
                <StepFinder optionCode={optionState.activeOptionCode}  categoryName={"men"}/>
            </EventRow>}
            {optionState.activeOptionCode === 'price' && <EventRow>
                <p className="label">Let's decide on the size now?</p>
                <StepPriceFinder />
            </EventRow>}
            {optionState.activeOptionCode === 'result' && <EventRow>
                <p className="label">Finally, let's narrow the price range?</p>
                <MenClothesMatch />
            </EventRow>}
        </WomenFinderStyle>
    )
}
