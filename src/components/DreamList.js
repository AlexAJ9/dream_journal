import React from 'react';
import { connect } from 'react-redux'
import { Table, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Filter from './Filter'
import './Home.css'
const DreamList = (props) => {

    return (
       
        <div className='data-table'>
             <Filter />
            <Container>
            <Table celled>
                <Table.Body>
                    {props.filteredDreams.map(dream =>
                        <Table.Row>
                            <Table.Cell>
                                <Link to={`/dreams/${dream.id}`}>{dream.title}</Link>
                            </Table.Cell>
                            <Table.Cell>
                                {dream.date}
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