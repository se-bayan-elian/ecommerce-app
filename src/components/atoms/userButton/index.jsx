import React from 'react'

const Button = ({ btnName, background, padding, color, width }) => {
    const buttonStyle = {
        width: width,
        background: background,
        padding: padding,
        border: 'none',
        borderRadius: '5px',
        color: color || '#1C1C1C',
        cursor: 'pointer',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500
    };
    return (
        <button style={buttonStyle}>
            {btnName}
        </button>
    )
}

export default Button