import React from "react";

export const Small = React.memo(({value}) => {
    
    console.log('Generado de nuevo');
    
    
    return (
        <small>{value}</small>
    )
})
