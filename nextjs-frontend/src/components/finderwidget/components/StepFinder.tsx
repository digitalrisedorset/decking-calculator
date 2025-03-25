import React from "react";
import {useFindAttributeOptionsByCode} from "@/components/finderwidget/hooks/useFindAttributeOptionsByCode";
import {PreferenceChoice} from "@/components/category/styles/CategoryStyles";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {getNextPreferenceStep} from "@/components/finderwidget/lib/optionPreference";
import {unescapeHtml} from "@/lib/string";


interface StepFinderProps {
    optionCode: string
    categoryName: string
}

export const StepFinder: React.FC<StepFinderProps> = ({optionCode, categoryName}: StepFinderProps) => {
    const {setActiveOptionCode, setOptionSelection} = useActiveOption()
    const data = useFindAttributeOptionsByCode(optionCode)

    const onChange = async (e: React.MouseEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement
        setActiveOptionCode(getNextPreferenceStep(optionCode, categoryName))
        setOptionSelection(optionCode, data.label, input.value, input.id)
    };

    return (
        <div className="step-finder">
            {data?.options.map((option: any) => {
                return (
                    <PreferenceChoice key={option.value}>
                        <input type="radio" id={option.label} name="eventHost" value={option.value} onClick={onChange} />
                        <label htmlFor={option.label}>{unescapeHtml(option.label)}</label>
                    </PreferenceChoice>
                )
            })}
        </div>
    )
}
