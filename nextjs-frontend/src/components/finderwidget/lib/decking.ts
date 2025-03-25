import {config} from "@/config";

export type DeckingStep = 'shape' | 'dimension' | 'decking_type' | 'colour' | 'material' | 'quotation' | 'expired' | (string & {})

export const getNextCalculationStep = (step: string): DeckingStep => {
    const deckingSetup = config?.decking?.steps

    if (step === "") {
        return deckingSetup[1]
    }

    let index = 0
    for (let i = 0; i< deckingSetup.length; i++) {
        if (step === deckingSetup[i]) {
            index = i
            break
        }
    }

    if (deckingSetup[index+1]) {
        return deckingSetup[index+1]
    }

    return 'result'
}
