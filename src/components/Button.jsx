import React from 'react';

function Button(props) {
    return React.createElement('button', { className: 'btn', onClick: props.onClick }, props.children);
}

export default Button;
