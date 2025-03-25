import {createContext, ReactNode, useContext, useState} from 'react';

interface MenuSolutionState {
    open: boolean
    openSolution: () => void
    closeSolution: () => void
}

const LocalStateContext = createContext<MenuSolutionState | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

interface MenuSolutionProviderProps {
    children: ReactNode;
}

const MenuSolutionProvider: React.FC<MenuSolutionProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const openSolution = () => {
        setOpen(true)
    }

    const closeSolution = () => {
        setOpen(false)
    }

    return (
        <LocalStateProvider
            value={{
                openSolution,
                closeSolution,
                menuOpen: open
            }}
        >
            {children}
        </LocalStateProvider>
    )
}

function useMenuSolution(): MenuSolutionState {
    const context = useContext(LocalStateContext);
    if (!context) {
        throw new Error("useMenuSolution must be used within a LocalStateProvider");
    }
    return context;
}

export { MenuSolutionProvider, useMenuSolution };
