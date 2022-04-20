import React from 'react';

import './Title.css';

const Title = props => {
    return (
        <h2 className={`title ${props.className}`}>{props.children}</h2>
    )
}

export default Title;