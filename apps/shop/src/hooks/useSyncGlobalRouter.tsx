import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const useSyncGlobalRouter = ({basePath}: {basePath: string}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const newPath = `${basePath}${location.pathname === '/' ? '' : location.pathname}`;

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('shop-route-change', {detail: newPath}));

        const appNavigate = ({detail}: CustomEvent<string>) => {
            if(detail === location.pathname) return;
            navigate(detail);
        };

        window.addEventListener('host-route-change', appNavigate as EventListener);

        return () => {
            window.removeEventListener('host-route-change', appNavigate as EventListener);
        };
    }, [location.pathname]);
};

export default useSyncGlobalRouter;