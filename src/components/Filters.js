import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';
import Test from './Test';

function Filters() {

    const [rate, setRate] = useState(3);

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
                <Form.Check
                    inline
                    label="Decending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            
            <span>    
                <Form.Check
                    inline
                    label="include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>    

            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />  
            </span>

            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={rate} style={{ cursor: "pointer" }} addRate={(i)=> {setRate(i)}}/>
            </span>

            <Button variant=" light">Clear filters</Button>

        </div>
    )
}

export default Filters
