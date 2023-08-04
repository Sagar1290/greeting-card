import React from 'react'
import { useState } from 'react'

const Card = ({ Detail }) => {

    return (
        <div>
            <div className='card'>
                <div className='detail'>
                    <div className='name'>
                        {Detail.name}
                    </div>
                    <button className='btn'>next</button>
                </div>
                <div className='img'>
                    <img src={Detail.image} />
                </div>
            </div>
        </div>
    )
}

export default Card