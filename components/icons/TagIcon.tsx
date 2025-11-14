
import React from 'react';

export const TagIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h10c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1 1v14l7-7-7-7z" />
    </svg>
);
