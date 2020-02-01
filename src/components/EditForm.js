import React, { useState } from 'react';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { newDream, updateDream } from '../reducers/dreamReducer'
import { Button, Form, TextArea } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import './Home.css'

const DreamForm = (props) => {

    const [title, setTitle] = useState(props.dream.title)
    const [description, setDescription] = useState(props.dream.description)
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

    const update = async (event) => {
        event.preventDefault()
        const dream = { id: props.dream.id, description: description, title: title, date: date.toLocaleDateString() }
        props.updateDream(dream)
    }
    return (
        <div className='one-item'>
            <Form onSubmit={update}>
                <Form.Field>
                    <input type='text' value={title} onChange={handleTitleChange} required placeholder='Dream title' />
                </Form.Field>
                <Form.Field>
                    <TextArea style={{ minHeight: 100 }} value={description} onChange={handleDescriptionChange} placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <DatePicker selected={date} onChange={handleDateChange} />
                </Form.Field>
                <Button type='submit'>submit</Button>
            </Form>
        </div>
    )

}

const mapDispatchToProps = {
    newDream,
    updateDream
}
const ConnectedForm = connect(null, mapDispatchToProps)(DreamForm)
export default ConnectedForm