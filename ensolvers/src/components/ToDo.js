import React, { useState, useEffect } from "react";
import { Form } from '../components/Form';
import { Row, Col } from 'react-bootstrap';

const backendURL = "http://localhost:4000";

export const ToDo = function (props) {
    const [list, setList] = useState([]);


    useEffect(()=>{
        fetch(backendURL+'/getItemList')
        .then(res=>res.json())
        .then(res =>{
            setList(res);
        })
    },[])


    const changeCheckbox = (index, e) => {
        let arr = [...list];
        arr[index].checkbox = e.target.checked;
        setList(arr);

    }

    const addToDo = (item) => {
        
        fetch(backendURL+"/addItem",{method: 'POST', body: JSON.stringify(item), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },})
        .then(res=>res.json())
        .then(res=>{
            setList(res)
        })
    }

    const deletToDo = (item) => {
        fetch(backendURL+"/deleteItem/"+ item.id ,{method: 'DELETE'})
        .then(res=>res.json())
        .then(res=>{
            setList(res)
        })
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
                            <button className="btn btn-danger" onClick={() => { deletToDo(item) }}>
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




