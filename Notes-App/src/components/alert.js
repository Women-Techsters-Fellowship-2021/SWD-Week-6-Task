import React from 'react';

const style = {
    color: 'orangered',
    fontWeight: 500,
    textAlign:'center'
}

function Alert({error}) {

    return (
        <h3 style={style}>{ error }</h3>
    )
}

export default Alert;