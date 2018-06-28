import React from "react";
import { PropTypes } from "prop-types";

export const RightArrow = props => {
    const { size, fill, style } = props;
    const defaultStyles = {};
    if (size) {
        defaultStyles.width = defaultStyles.height = size;
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg"   style={Object.assign(defaultStyles, props.style)}viewBox="0 0 31.49 31.49">
            <path fill={fill} d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
            C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
            c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
        </svg>
    );
};

RightArrow.defaultProps = {
    size: "14px",
    fill: "#abb3c8",
    style: {},
};

RightArrow.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fill: PropTypes.string,
    style: PropTypes.object,
};
