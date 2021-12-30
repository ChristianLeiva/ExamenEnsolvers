import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';


export const Form = function (props) {

    const [description, setDescription] = useState(" ");

    const addToDo = () => {
        props.addToDo({ checkbox: false, text: description });
        setDescription("")

    }


    return (
        <>
            <Row className="align-middle">
                <Col xs={2}>
                    <label for="exampleInputEmail1" class="form-label"> Description </label>
                </Col>
                <Col xs={6}>


                    <input type="l" class="form-control" id="exampleInputEmail1" aria-describedby="" value={description} onChange={(e) => { setDescription(e.target.value) }} />

                </Col>
                <Col xs={4}>
                    <button className="btn btn-primary" onClick={() => { addToDo() }}>Add</button>
                </Col>
            </Row>

        </>
    )

}

