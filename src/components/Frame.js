import React from 'react';

const style = {
    iframe: {
        margin: 0,
        padding: 0,
        border: 'none',
        width: '100%',
        height: '100%'
    }
}

export default function Frame(props) {
    console.log(props);
    return (
        <div>
            <iframe scrolling="auto" style={style.iframe} src={props.url}></iframe>
        </div>
    )
}