import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useSyncAppRouter = ({ basePath }: { basePath: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const appNavigate = ({ detail }: CustomEvent<string>) => {
      if (detail === location.pathname) return;
      navigate(detail);
    };

    window.addEventListener('shop-route-change', appNavigate as EventListener);

    return () => {
      window.removeEventListener(
        'shop-route-change',
        appNavigate as EventListener
      );
    };
  }, [location.pathname, basePath, navigate]);

  useEffect(() => {
    if (location.pathname.startsWith(basePath)) {
      window.dispatchEvent(
        new CustomEvent('host-route-change', {
          detail: location.pathname.replace(basePath, ''),
        })
      );
    }
  }, [location.pathname, basePath]);
};

export default useSyncAppRouter;
