import React from "react";
import {OptionSelection, useActiveOption} from "@/state/OptionPreferenceState";
import {OptionSelectionStyle} from "@/components/finderwidget/styles/FinderStyles";
import {getOptionLabel, getOptionQuery} from "@/components/finderwidget/lib/option-match";

export const MenClothesMatch: React.FC = () => {
    const {optionState} = useActiveOption()

    const handleRedirect = (e: React.FormEvent) => {
        e.preventDefault();
        //http://magentodemo247.co.uk/women/tops-women.html?climate=203&price=30-40&style_general=119
        window.location.href = `http://magentodemo247.co.uk/men/tops-men.html${getOptionQuery(optionState.optionSelection)}`
    }

    return (
        <div className="product-finder">
            <h3>You have selected</h3>
            {optionState.optionSelection.map((option: OptionSelection) => {
                return <OptionSelectionStyle>
                    <label>{option.attributeLabel}</label>
                    <span>{getOptionLabel(option)}</span>
                </OptionSelectionStyle>})
            }
            <button onClick={handleRedirect}>Go to Products</button>
        </div>
    )
}
