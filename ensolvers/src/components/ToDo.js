import React, { useState, useEffect } from "react";
import { Form } from '../components/Form';
import { Row, Col } from 'react-bootstrap';





export const ToDo = function (props) {

    const [list, setList] = useState([

    ]);

    useEffect(() => {

        fetch('http://localhost:4000/getToDoList')
            .then(res => res.json())
            .then(res => setList(res))
            .catch(err => console.error(err));

    }, [])


    const changeCheckbox = (index, e) => {
        let arr = [...list];
        arr[index].checkbox = e.target.checked;
        setList(arr);

    }

    const addToDo = (item) => {

        let arr = [...list];
        arr.push(item);
        setList(arr);
    }

    const deletToDo = (index) => {
        let arr = [...list];
        arr.splice(index, 1);
        setList(arr);
    }


    return (
        <>
            <h1>To Do</h1>
            {
                list.map((item, index) => (

                    <div key={index}>
                        <div class="form-check text-start" >

                            <input class="form-check-input" type="checkbox" onChange={(e) => { changeCheckbox(index, e) }} value="" defaultChecked={item.checkbox} />
                            <label class="form-check-label text-start" style={{ textDecoration: item.checkbox ? "line-through" : "" }}>
                                {`${item.text}`}
                            </label>
                            <button className="btn btn-danger" onClick={() => { deletToDo(index) }}>
                                Eliminar
                            </button>
                        </div>
                    </div>


                ))
            }
            <br />
            <br /><br />
            <div>

                <Row>
                    <Col>

                        <Form addToDo={addToDo}></Form>
                    </Col>
                </Row>

            </div>
        </>
    )
}




