import React, { useState } from 'react';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { newDream } from '../reducers/dreamReducer'
import { Button, Form, TextArea } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import './Home.css'

const DreamForm = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleDateChange = (date) => {
        setDate(date)
    }

    const add = async (event) => {
        event.preventDefault()
        const data = { description: description, title: title, date: date.toLocaleDateString() }
        props.newDream(data)
        setDescription('')
        setTitle('')
    }
    return (
        <div className='one-item'>
            <Form onSubmit={add}>
                <Form.Field>
                    <input type='text' value={title} onChange={handleTitleChange} required placeholder='Dream title' />
                </Form.Field>
                <Form.Field>
                    <TextArea style={{ minHeight: 100 }} value={description} onChange={handleDescriptionChange} placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <DatePicker selected={date} value={date} onChange={() => handleDateChange(date)} />
                </Form.Field>
                <Button type='submit'>submit</Button>
            </Form>
        </div>
    )

}
const ConnectedForm = connect(null, { newDream })(DreamForm)
export default ConnectedForm