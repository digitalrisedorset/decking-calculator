import {createContext, ReactNode, useCallback, useContext} from 'react';
import {useImmer} from "use-immer";
import {DeckingStep} from "@/components/finderwidget/lib/decking";

type DeckingProduct = {
    sku: string;
    length: number
};

interface DeckingCalculatorState {
    step: DeckingStep
    shape: string,
    width: number | null,
    height: number | null,
    deckingTypeProduct: DeckingProduct,
    deckingMaterialProduct: DeckingProduct,
    deckingColour: string,
    setDeckingShape: (categoryIds: number[]) => void
}

const intialState: DeckingCalculatorState = {
    step: '',
    shape: '',
    width: null,
    height: null,
    deckingTypProducte: { sku: '', length: 0 },
    deckingMaterialProduct: { sku: '', length: 0 },
    deckingColour: ''
}

const LocalStateContext = createContext<DeckingCalculatorState | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

interface DeckingCalculatorProviderProps {
    children: ReactNode;
}

const DeckingCalculatorProvider: React.FC<DeckingCalculatorProviderProps> = ({ children }) => {
    const [state, setState] = useImmer<DeckingCalculatorState>(intialState);

    const setDeckingShape = useCallback((shape: string) => {
        setState(draft => { draft.shape = shape });
    }, [setState]);

    const setDeckingWidth = useCallback((width: number) => {
        setState(draft => { draft.width = width });
    }, [setState]);

    const setDeckingHeight = useCallback((height: number) => {
        setState(draft => { draft.height = height });
    }, [setState]);

    const setDeckingType = useCallback((deckingType: string, length: number) => {
        setState(draft => { draft.deckingTypeProduct = { deckingType, length } });
    }, [setState]);

    const setDeckingMaterial = useCallback((deckingMaterial: string, length: number) => {
        setState(draft => { draft.deckingMaterialProduct = { deckingMaterial, length } });
    }, [setState]);

    const setDeckingColour = useCallback((deckingColour: string) => {
        setState(draft => { draft.deckingColour = deckingColour });
    }, [setState]);

    const setStep = useCallback((step: string) => {
        console.log('set step', step)
        setState(draft => { draft.step = step });
    }, [setState]);

    return (
        <LocalStateProvider
            value={{
                setDeckingShape,
                setDeckingWidth,
                setDeckingHeight,
                setDeckingType,
                setDeckingMaterial,
                setDeckingColour,
                setStep,
                deckingState: state
            }}
        >
            {children}
        </LocalStateProvider>
    )
}

function useDeckingCalculator(): DeckingCalculatorState {
    const context = useContext(LocalStateContext);
    if (!context) {
        throw new Error("useDeckingCalculator must be used within a LocalStateProvider");
    }
    return context;
}

export { DeckingCalculatorProvider, useDeckingCalculator };
