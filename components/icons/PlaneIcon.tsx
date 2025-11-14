
import React from 'react';

export const PlaneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 15 C4 10 8 6 12 6 M20 15 C20 10 16 6 12 6" />
    </svg>
);