
import { PropsWithChildren, useMemo } from "react";
import { Provider } from "react-redux";
import { favoriteStore } from "@/lib/store";

export const ReduxProvider = ({ children }: PropsWithChildren<{}>) => {
    const store = useMemo(() => favoriteStore(), []);
    
    return <Provider store={store}>{children}</Provider>;
}