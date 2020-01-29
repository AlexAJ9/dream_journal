import React from 'react';
import { connect } from 'react-redux'
import { Table, Container, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Filter from './Filter'
import './Home.css'
const DreamList = (props) => {

    return (

        <div className='data-table'>
            <Filter />
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {props.filteredDreams.map(dream =>
                            <Table.Row>
                                <Table.Cell>
                                    {dream.title}
                                </Table.Cell>
                                <Table.Cell>
                                    {dream.date}
                                </Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Button as={Link} to={`/dreams/${dream.id}`}  >Expand</Button>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Container>
        </div >
    )
}
const filteredDreams = ({ filter, dreams }) => dreams.filter(dreams => dreams.title.toLowerCase().includes(filter))

const mapStateToProps = (state) => {
    return {
        filteredDreams: filteredDreams(state)
    }
}
const ConnectedDreamList = connect(mapStateToProps, null)(DreamList)
export default ConnectedDreamList