import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating({ rating, style, addRate }) {

    return (
        <>
            {
                [...Array(5)].map((_, i) => {
                    return <span key={i} style={style} onClick={ ()=> addRate(i) }>
                        {rating > i ? (
                            <AiFillStar style={{ fontSize: 15 }} />
                        ) : (
                            <AiOutlineStar style={{ fontSize: 15 }} />
                        )}
                    </span>
                })
            }
        </>
    )
}

export default Rating
