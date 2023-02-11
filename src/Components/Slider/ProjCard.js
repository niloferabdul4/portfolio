import React from 'react';

const ProjCard = ({card}) => {
    return (
        <div>
            <div className='card'>              
                <img src={card.image} alt='' className='image' height={200} width={200}/>
            </div>   
        </div>
    );
}

export default ProjCard;
