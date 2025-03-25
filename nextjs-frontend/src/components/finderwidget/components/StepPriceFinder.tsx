import React from "react";
import {useFindAttributeOptionsByCode} from "@/components/finderwidget/hooks/useFindAttributeOptionsByCode";
import {PreferenceChoice} from "@/components/category/styles/CategoryStyles";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {formatRange} from "@/components/finderwidget/lib/price";

export const StepPriceFinder: React.FC = () => {
    const option = 'price'
    const {setOptionSelection, setActiveOptionCode} = useActiveOption()
    const data = useFindAttributeOptionsByCode(option)

    const onChange = async (e: React.MouseEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement
        setActiveOptionCode('result')
        setOptionSelection(option, data.label, input.id, input.id)
    };

    return (
        <div className="women-finder">
            {data?.options.map((option: any) => {
                return <PreferenceChoice key={option.value}>
                    <input type="radio" id={option.label} name="eventHost" value={option.value} onClick={onChange} />
                    <label htmlFor={option.label}>{formatRange(option.label)}</label>
                </PreferenceChoice>
            })}
        </div>
    )
}
