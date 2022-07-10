import React from "react";
import PropTypes from 'prop-types';
import './Input.css'

export const Input = ({ borderLine, placeholder, size, borderRadius, boxShadow, ...props }) => {

    return (
        <input
            placeholder={placeholder}
            className={['storybook-input', `storybook-input--${size}`].join(' ')}
            style={{
                border: `1px solid ${borderLine}`,
                borderRadius: `${borderRadius}px`,
                boxShadow: `${boxShadow}`,
            }}
            {...props}
        >

        </input>
    )
}
Input.propTypes = {
    /**
     * What background color to use
     */
    borderLine: PropTypes.string,

    borderRadius: PropTypes.number,
    boxShadow: PropTypes.string,
    /**
     * How large should the Input be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Input contents
     */
    placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
    borderLine: 'white',
    borderRadius: '10',
    size: 'large',
    boxShadow: '3px 3px 10px lightgrey'
};
