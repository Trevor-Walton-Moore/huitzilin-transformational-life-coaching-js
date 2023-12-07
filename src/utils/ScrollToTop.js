import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
    console.log("pathname: ", pathname);

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        console.log("pathname 2: ", pathname);
        window.scrollTo(0, 0);
    }, [pathname]);
};

export default ScrollToTop;
