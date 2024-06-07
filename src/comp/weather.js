import React from 'react';

const Info = (props) => {
    return (
        <div>
            { props.city && 
            <div>
                <p>{ props.city}</p>
                <p>{ props.country}</p>
                <p>{ props.weather}</p>
                
            </div>
            
            }
            <p>{ props.error}</p>
        </div>
    );
}
export default Info;