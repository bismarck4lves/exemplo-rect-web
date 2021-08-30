import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-ZTVVTFL5MX';

const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
