import { useState, useEffect } from 'react';

// export default function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//         width,
//         height
//     };
// }

// export default function useWindowDimensions() {
//
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//
//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [windowDimensions]);
//
//     console.log("WINDOW DIMS " + JSON.stringify(windowDimensions))
//     return windowDimensions;
// }