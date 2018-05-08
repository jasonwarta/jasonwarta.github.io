import React from 'react';

const style = {
    iframe: {
        margin: 0,
        padding: 0,
        paddingLeft: '100px',
        border: 'none',
        width: '90%',
        height: '100%'
    }
}

const Frame = (props) => (
    <div><iframe scrolling="auto" style={style.iframe} src={props.src}></iframe></div>
);

export default Frame;