import {OptionSelection} from "@/state/OptionPreferenceState";
import {formatRange} from "@/components/finderwidget/lib/price";
import {unescapeHtml} from "@/lib/string";

export const getOptionLabel = (option: OptionSelection) => {
    if (option.code === 'price') {
        return formatRange(option.label)
    }

    return unescapeHtml(option.label)
}

export const getOptionQuery = (optionSelection: OptionSelection[]) => {
    const getOptionSelectionQuery = (query: string, option: OptionSelection) => {
        const optionQuery = `${option.code}=${option.value}`
        if (query === '') {
            query += `?${optionQuery}`
        } else {
            query += `&${optionQuery}`
        }

        return query
    }

    return optionSelection.reduce(getOptionSelectionQuery, '')
}
