import React from "react";
import PropTypes from 'prop-types';
import './Tab.css'

export const Tabeasy = ({ onChange, boxShadow, backgroundColor, colorText, size, numTab }) => {
    return (
        <div
            onChange={onChange}
            className={['storybook-tab', `storybook-tab--${size}`].join(' ')}
            style={{ backgroundColor: `${backgroundColor}`, display: 'flex', justifyContent:'space-around',boxShadow: `${boxShadow}` }}>
            {numTab ? numTab?.map((item, index) => {
                return <p className="hoverTab" style={{cursor:'pointer', fontFamily:'Montserrat', color:{colorText}}} key={index}>{item}</p>
            }) : null}
        </div>
    )
}

Tabeasy.propTypes = {
    onChange: PropTypes.func,
    numTab: PropTypes.arrayOf(PropTypes.string),
    backgroundColor: PropTypes.string,
    colorText: PropTypes.string,
    size: PropTypes.string,
    boxShadow: PropTypes.string
};

Tabeasy.defaultProps = {
    backgroundColor: 'white',
    size:'small',
    boxShadow:'3px 3px 10px lightgrey',
    colorText: 'white',
    numTab: ['Tab1', 'Tab2', 'Tab3'],
    onChange: PropTypes.func,
};
