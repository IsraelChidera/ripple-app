import React from 'react'

const index = ({ children, className, onClick, ...rest }) => {
    return (
        <button
            className={`text-xs rounded-3xl py-3 px-12 cursor-pointer bg-white hover:bg-hover border border-primary text-primary ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default index