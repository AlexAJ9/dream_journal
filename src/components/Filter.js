import React from 'react'
import { connect } from 'react-redux'
import { filterDreams } from '../reducers/filterReducer'
import { Icon, Input } from 'semantic-ui-react'
import './Home.css'
const Filter = (props) => {

    const handleChange = event => props.filterDreams(event.target.value)

    return (
        < Input onChange={handleChange} icon={< Icon name='search' inverted circular link />} placeholder='Search...'/>
    )
}
const mapDispatchToProps = {
    filterDreams
}
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter;