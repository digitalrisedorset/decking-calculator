import {FlashMessageProvider} from "@/state/FlassMessageState";
import {MenuSolutionProvider} from "@/state/MenuSolutionState";
import {ActiveCategoryProvider} from "@/state/ActiveCategoryState";
import {ActiveOptionProvider} from "@/state/OptionPreferenceState";

export default function StateProvider({ children }: {
    children: React.ReactNode;
}) {
    return <FlashMessageProvider>
            <MenuSolutionProvider>
                <ActiveCategoryProvider>
                    <ActiveOptionProvider>
                        {children}
                    </ActiveOptionProvider>
                </ActiveCategoryProvider>
            </MenuSolutionProvider>
        </FlashMessageProvider>;
}
