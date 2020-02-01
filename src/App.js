import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Container, Button, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { initDreams } from './reducers/dreamReducer'
import DreamList from './components/DreamList'
import Dream from './components/Dream'
import Form from './components/Form'
import EditForm from './components/EditForm'
import './components/Home.css'

const App = (props) => {
  const [activeItem, setActiveItem] = useState('home')

  const dreamById = (id) => props.dreams.find(dream => dream.id === Number(id))

  const handleItemClick = (e,{name}) => {
    setActiveItem(name)
  }

  useEffect(() => {
    props.initDreams()
  }, [])
 
  return (
    <Container>
      <Router>
        <Menu tabular>
          <Menu.Item
            name='home' as={Link} to='/'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          >
          </Menu.Item>
          <Menu.Item
            name='create' as={Link} to='/create'
            active={activeItem === 'create'}
            onClick={handleItemClick}
          >
          </Menu.Item>
        </Menu>
        <Route exact path='/' render={() => <DreamList />} />
        <Route exact path='/dreams/:id' render={({ match }) => <Dream dream={dreamById(match.params.id)} />} />
        <Route exact path='/dreams/edit/:id' render={({ match }) => <EditForm dream={dreamById(match.params.id)} />} />
        <Route path='/create' render={() => <Form />} />
      </Router>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return {
    dreams: state.dreams
  }
}
const ConnectedApp = connect(mapStateToProps, { initDreams })(App)
export default ConnectedApp;
