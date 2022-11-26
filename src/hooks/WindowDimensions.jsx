import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
    const [size, setSize] = useState({
        windowWidth: null,
        height: null
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                windowWidth: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};

export default useWindowDimensions;