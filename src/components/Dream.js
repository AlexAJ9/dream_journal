import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { deleteDream } from '../reducers/dreamReducer'
import { Container, Header, Button ,Divider} from 'semantic-ui-react'
const Dream = (props) => {

    const removeDream = async () => {
        props.deleteDream(props.dream)
    }
    return (
        <div className='one-item'>
            <div>
                <Container>
                    <Header as='h2'> {props.dream.title}</Header>
                    <Header as='h3'>Date: {props.dream.date}</Header>
                    <Divider />
                    <p>{props.dream.description}</p>
                    <Divider />
                </Container>
            </div>
            <br/>
            <Link to='/'><Button onClick={removeDream} >Delete dream</Button></Link>
        </div>
    )
}
const ConnectedDream = connect(null, { deleteDream })(Dream)
export default ConnectedDream