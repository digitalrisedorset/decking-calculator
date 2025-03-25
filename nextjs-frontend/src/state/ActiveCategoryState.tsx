import {createContext, ReactNode, useContext, useState} from 'react';

interface MenuSolutionState {
    categoryIds: number[]
    setActiveCategoryIds: (categoryIds: number[]) => void
}

const LocalStateContext = createContext<MenuSolutionState | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

interface MenuSolutionProviderProps {
    children: ReactNode;
}

const ActiveCategoryProvider: React.FC<MenuSolutionProviderProps> = ({ children }) => {
    const [categoryIds, setCategoryIds] = useState([]);

    const setActiveCategoryIds = (categoryIds: number[]) => {
        setCategoryIds(categoryIds)
    }

    return (
        <LocalStateProvider
            value={{
                setActiveCategoryIds,
                categoryIds
            }}
        >
            {children}
        </LocalStateProvider>
    )
}

function useActiveCategory(): MenuSolutionState {
    const context = useContext(LocalStateContext);
    if (!context) {
        throw new Error("useActiveCategory must be used within a LocalStateProvider");
    }
    return context;
}

export { ActiveCategoryProvider, useActiveCategory };
