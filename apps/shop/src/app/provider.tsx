import { Children } from "react";
import { HelmetProvider } from "react-helmet-async";

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    return <HelmetProvider>
        {children}
    </HelmetProvider>
}