import {createContext, ReactNode, useContext} from 'react';
import {useImmer} from "use-immer";

export interface OptionSelection {
    code: string
    attributeLabel: string
    value: string
    label: string
}

interface OptionPreferenceState {
    activeCategoryName: string
    optionSelection: OptionSelection[],
    activeOptionCode: string
    setActiveOptionCode: (code: string) => void
}

const intialState: OptionPreferenceState = {
    optionSelection: [],
    activeOptionCode: '',
    activeCategoryName: ''
}

const LocalStateContext = createContext<OptionPreferenceState | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

interface OptionPreferenceProviderProps {
    children: ReactNode;
}

const ActiveOptionProvider: React.FC<OptionPreferenceProviderProps> = ({ children }) => {
    const [state, setState] = useImmer<OptionPreferenceState>(intialState);

    const setActiveOptionCode = (code: string) => {
        setState(draft => { draft.activeOptionCode = code });
    }

    const setOptionSelection = (code: string, attributeLabel: string, value: string, label: string) => {
        setState(draft => {
            draft.optionSelection.push({
                code,
                attributeLabel,
                value,
                label
            });
        })
    }

    const setActiveCategoryName = (name: string) => {
        setState(draft => { draft.activeCategoryName = name });
    }

    return (
        <LocalStateProvider
            value={{
                setActiveOptionCode,
                setActiveCategoryName,
                setOptionSelection,
                optionState: state
            }}
        >
            {children}
        </LocalStateProvider>
    )
}

function useActiveOption(): OptionPreferenceState {
    const context = useContext(LocalStateContext);
    if (!context) {
        throw new Error("useActiveOption must be used within a LocalStateProvider");
    }
    return context;
}

export { ActiveOptionProvider, useActiveOption };
