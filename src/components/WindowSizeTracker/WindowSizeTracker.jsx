import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

export const WindowSizeTracker = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h2>Window Size Tracker</h2>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}