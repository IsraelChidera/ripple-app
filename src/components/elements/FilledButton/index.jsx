import React from 'react'

const index = ({ children, className, onClick, ...rest }) => {
    return (
        <button
            className={`text-xs rounded-3xl py-3.5 px-12 cursor-pointer text-white bg-primary hover:bg-hover ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default index