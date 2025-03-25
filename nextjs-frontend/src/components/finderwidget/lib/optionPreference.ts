import {OptionSelection} from "@/state/OptionPreferenceState";
import {config} from "@/config";

export type OptionPreference = 'climate' | 'style_general' | 'price' | 'result' | (string & {})

export type MenOptionPreference = 'climate' | 'material' | 'size' | 'price' | 'result' | (string & {})


export const getNextPreferenceStep = (actionOptionCode: string, categoryName: string): MenOptionPreference => {
    const layerAttributesSetup = config?.category[categoryName]?.layerAttributes

    if (actionOptionCode === "") {
        return layerAttributesSetup[0]
    }

    let index = 0
    for (let i = 0; i< layerAttributesSetup.length; i++) {
        if (actionOptionCode === layerAttributesSetup[i]) {
            index = i
            break
        }
    }

    if (layerAttributesSetup[index+1]) {
        return layerAttributesSetup[index+1]
    }

    return 'result'
}

export const getOptionLayerFilter = (optionState: OptionSelection[]) => {
    const getOptionSelectionQuery = (filter: {}, option: OptionSelection) => {
        filter[option.code] = {"eq": option.code=== 'price'?option.id: option.value}

        return filter
    }

    return optionState?.optionSelection?.reduce(getOptionSelectionQuery, {})
}
